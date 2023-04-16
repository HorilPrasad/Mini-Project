import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Button } from "../button/Button";
import { Input } from "../input/Input";
import { Divider } from "../divider/Divider";
import "../../css/register.css";
import Select from 'react-select';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { storage } from "../../firebase/config";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage"

const Register = () => {
  const navigate = useNavigate();
  const [Inputs, setInputs] = useState({ name: "", email: "", password: "", address: "", phone: "" ,occupation:"",about:""});
  const [userType, setUserType] = useState({ value: 'user' });
  const [worker, setWorker] = useState(false);
  const [image, setImage] = useState(null);
  const [otpsent, setOtpSend] = useState(false);
  const [serviceList, setServiceList] = useState(null);
  const [imageUrl , setImageUrl] = useState('');


  const userTypes = [{ value: 'user', label: 'User' }, { value: 'worker', label: 'Worker' }];
  const serviceTypes = [{ value: 'electrician', label: 'Electrician' }, { value: 'carpainter', label: 'Carpainter' },
  { value: 'cleaner', label: 'Cleaner' }]

  useEffect(() => {

    if (userType.value === 'worker')
      setWorker(true);
    else
      setWorker(false);
  });

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
    
    if (Inputs.email === "" || Inputs.password === "" || Inputs.phone === "" )
      toast.warn("All field mandatory!", { theme: "colored" });
    else{
      setOtpSend(true);
    }
      
  }

  const uploadImage = async () => {
    const d = new Date();
    let key = d.getMilliseconds();
    const imageRef = ref(storage, `images/${image.name}${key}`);
    await uploadBytes(imageRef, image);
    
    const url = await getDownloadURL(imageRef)
    setImageUrl(url)
    toast.success("Image uploaded");
  }

  const UserRegister = async (event) => {
    event.preventDefault();

    if(image != null)
      await uploadImage();

      
    if (!worker) {
      const res = await fetch('http://localhost:5000/api/users/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({Inputs,imageUrl})
      });
      if (res.status === 201) {
        const data = await res.json();
        toast.success('Register Successfully!', { theme: 'colored' })
        localStorage.clear();
        localStorage.setItem('user', JSON.stringify(data));
        setTimeout(()=>navigate('/'),5000);

      } else {
        toast.error('Database not responding!', { theme: 'colored' })
      }
    } else {
      const list = serviceList.map(a=>a.value);
      const res = await fetch('http://localhost:5000/api/workers/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({Inputs,list})
      });

      if(res.status === 201){ 
        toast.success('Register Successfully!',{theme:'colored'});
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

        <div className={`${otpsent ? "otp-field" : "hide"}`}>
          <p>OTP: </p>
          <input type="number" />
        </div>
        <div className={`${otpsent ? "hide" : "otp-btn"}`}>
          <Button type="button" buttonSize="btn--large" onClick={sendOtp}>OTP</Button>
        </div>
        <div className={`${otpsent ? "register-btn" : "hide"}`}>
          <Button type="submit" buttonSize="btn--large">Register</Button>
        </div>
      </form>
    </div>
  )
}
export default Register