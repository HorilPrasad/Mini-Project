import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Button } from "../button/Button";
import { Input } from "../input/Input";
import { Divider } from "../divider/Divider";
import "../../css/register.css";
import Select from 'react-select';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { storage } from "../../firebase/config";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage"
import { useUser } from "../shared/userContext";
import { baseUrl } from "../shared/baseUrl";

const Register = () => {
  const navigate = useNavigate();
  const [Inputs, setInputs] = useState({ name: "", email: "", password: "", address: "", phone: "", occupation: "", about: "", imageUrl: 'https://static.vecteezy.com/system/resources/previews/002/002/257/original/beautiful-woman-avatar-character-icon-free-vector.jpg' });
  const [userType, setUserType] = useState({ value: 'user' });
  const [worker, setWorker] = useState(false);
  const [image, setImage] = useState(null);
  const [otpsent, setOtpSend] = useState(false);
  const [serviceList, setServiceList] = useState(null);
  const [verify, setVerify] = useState(false);
  const [otp, setOtp] = useState('');
  const [buttonLoading, setbuttonLoading] = useState(false);

  const {login ,updateUser} = useUser();

  const userTypes = [{ value: 'user', label: 'User' }, { value: 'worker', label: 'Worker' }];
  const serviceTypes = [{ value: 'electrician', label: 'Electrician' }, { value: 'carpainter', label: 'Carpainter' },
  { value: 'cleaner', label: 'Cleaner' }]

  useEffect(() => {

    if (userType.value === 'worker')
      setWorker(true);
    else
      setWorker(false);
  }, [userType]);

  const inputImage = (event) => {

    if (event.target.files[0]) {
      setImage(event.target.files[0]);
    }


  }

  const inputEvent = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setInputs((lastValue) => {
      return {
        ...lastValue,
        [name]: value
      }

    });
  }


  const sendOtp = async (event) => {
    event.preventDefault();

    
    if (Inputs.email === "" || Inputs.password === "" || Inputs.phone === "" || image === null)
      toast.warn("All field mandatory!", { theme: "colored" });
    else {
      setOtpSend(true)
      setVerify(true)
      setbuttonLoading(true)
      await uploadImage();
      setbuttonLoading(false)
      // const email = Inputs.email;
      // const res = await fetch(baseUrl + "/api/verification/sendMail",{
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json'
      //   },
      //   body: JSON.stringify({email})
      // });
      // if(res.status === 200)
      // { 
      //   setOtpSend(true);
      //   toast.success("OTP send!");
      //   await uploadImage();
      // }
      // else
      //   toast.error("Server Error!");
    }

  }

  const uploadImage = async () => {
    const d = new Date();
    let key = d.getMilliseconds();
    const imageRef = ref(storage, `images/${image.name}${key}`);
    await uploadBytes(imageRef, image);

    const url = await getDownloadURL(imageRef);
    setInputs((lastValue) => {
      return {
        ...lastValue,
        imageUrl: url
      }

    });
    toast.success("Image uploaded");
    setbuttonLoading(false)
  }

  const verifyOtp = async () => {
    if (otp === '')
      toast("Enter Otp")
    else {
      const email = Inputs.email;
      console.log(otp)
      const res = await fetch(baseUrl+"/api/verification/verifyOtp", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ otp, email })
      });

      if (res.status === 200) {
        toast.success("Verify!")
        setVerify(true);
      }
      else
        toast("wrong otp")
    }
  }



  const UserRegister = async (event) => {
    event.preventDefault();

    console.log(Inputs);
    if (!worker) {
      const res = await fetch(baseUrl+'/api/users/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(Inputs)
      });
      if (res.status === 201) {
        const data = await res.json();
        toast.success('Register Successfully!', { theme: 'colored' })
        localStorage.clear();
        login()
        const currentUser = {id:data._id,name:data.name,email:data.email,imageUrl:data.imageUrl,userType:userType.value}
        localStorage.setItem('user', JSON.stringify(currentUser));
        updateUser(currentUser);
        navigate('/')

      } else {
        toast.error('Database not responding!', { theme: 'colored' })
      }
    } else {
      const list = serviceList.map(a => a.value);

      const res = await fetch(baseUrl+'/api/workers/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ Inputs, list })
      });

      if (res.status === 201) {
        localStorage.clear();
        const data = await res.json();
        localStorage.clear();
        login();
        const currentUser = {id:data._id,name:data.name,email:data.email,imageUrl:data.imageUrl,userType:userType.value}
        localStorage.setItem('user', JSON.stringify(currentUser));
        updateUser(currentUser)
        toast.success('Register Successfully!', { theme: 'colored' });
        navigate('/');
      }
      else
        toast.error("Error!")
    }
  }
  return (
    <div className="register-box">
      <Divider>Register</Divider>
      <form onSubmit={UserRegister}>
        <div className="register-form">
          <div className="input-text">
            <p>Type <span>*</span></p>
            <Select
              name="type"
              options={userTypes}
              className="basic-single"
              classNamePrefix="select"
              onChange={setUserType}
            />
          </div>
          <div className="input-text">
            <p>Name <span>*</span></p>
            <Input type="text" name="name" value={Inputs.name} onChange={inputEvent} />
          </div>
          <div className="input-text">
            <p>Phone <span>*</span></p>
            <Input type="phone" maxLength="10" name="phone" value={Inputs.phone} onChange={inputEvent} />
          </div>
          <div className="input-text">
            <p>User Email <span>*</span></p>
            <Input type="text" name="email" value={Inputs.email} onChange={inputEvent} />
          </div>
          <div className="input-text">
            <p>Address <span>*</span></p>
            <Input type="text" name="address" value={Inputs.address} onChange={inputEvent} />
          </div>
          <div className="input-text">
            <p>Password <span>*</span></p>
            <Input type="password" minLength="6" name="password" value={Inputs.password} onChange={inputEvent} />
          </div>

          <div className={`${worker ? "input-text" : "hide"}`}>
            <p>Occupation <span>*</span></p>
            <Input type="text" name="occupation" value={Inputs.occupation} onChange={inputEvent} />
          </div>
          <div className={`${worker ? "input-text" : "hide"}`}>
            <p>Services Provide <span>*</span></p>
            <Select
              isMulti
              name="services"
              options={serviceTypes}
              classNamePrefix="select"
              className="basic-multi-select"
              onChange={setServiceList}
            />
          </div>
          <div className={`${worker ? "input-text" : "hide"}`}>
            <p>Write about your self <span>*</span></p>
            <textarea className="textarea" name="about" value={Inputs.about} onChange={inputEvent} />
          </div>
          <div className="input-text">
            <p>Profile Image <span>*</span></p>
            <Input type="file" name="profile image" onChange={inputImage} />
          </div>

        </div>

        <div className={`${otpsent && !verify ? "otp-field" : "hide"}`}>
          <p>OTP: </p>
          <input type="number" name="otp" value={otp} onChange={e => setOtp(e.target.value)} />
        </div>
        <div className={`${otpsent ? "hide" : "otp-btn"}`}>
          <Button loading={buttonLoading} type="button" buttonSize="btn--large" onClick={sendOtp}>OTP</Button>
        </div>
        <div className={`${otpsent && !verify ? "verify-btn" : "hide"}`}>
          <Button loading={buttonLoading} type="button" buttonSize="btn--large" onClick={verifyOtp}>Verify</Button>
        </div>
        <div className={`${verify ? "register-btn" : "hide"}`}>
          <Button loading={buttonLoading} type="submit" buttonSize="btn--large">Register</Button>
        </div>
      </form>
    </div>
  )
}
export default Register