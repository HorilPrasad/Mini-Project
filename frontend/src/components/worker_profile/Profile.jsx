import { useState, useEffect } from 'react'
import style from '../../css/profile.module.css'
import { Button } from '../button/Button'
import { useUser } from '../shared/userContext'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { baseUrl } from '../shared/baseUrl'
const Profile = () => {
    const navigate = useNavigate();
    const { logout } = useUser()
    const { id } = useParams();
    const [userData, setUserData] = useState();
    const { user } = useUser();


    const Logout = () => {
        localStorage.clear();
        logout();
        toast.success("Logout!", { theme: 'colored' })
        navigate('/');
    }
    const openInNewTab = url => {
        window.open(url, '_blank', 'noopener,noreferrer');
      };
    const getUserProfile = async () => {
        const res = await fetch(baseUrl + '/api/profile/' + id);
        const data = await res.json();
        setUserData(data);
        
    }

    useEffect(() => {
        getUserProfile();
    }, [id]);



    if (userData)
        return (
            <div className={style.container}>
                <div className={style.left}>
                    <div className={style.profile_img}>
                        <img src={userData.imageUrl} alt='user pic' />
                    </div>
                    <div className={style.services}>
                        <h3>Services</h3>
                        <hr />
                        <ul className={style.services_list}>
                        {
                           userData.serviceList && userData.serviceList.map((item, index)=>{
                                return <li className={style.list_item}>{item}</li>
                            })
                        }
                        </ul>
                    </div>
                    
                </div>
                <div className={style.right}>
                    <div className={style.name}>
                        <h3>{userData.name}</h3>
                        <p>{userData.occupation}</p>
                        <h4>Ratings</h4>
                        <div className={style.rating}>
                            <span>★</span>
                            <span>★</span>
                            <span>★</span>
                            <span>★</span>
                            <span>★</span>
                        </div>
                    </div>
                    <div className={style.contact_btn}>
                        <Button buttonStyle='btn--outline' onClick={() => openInNewTab(`https://wa.me/+91${userData.phone}`)}>Message</Button>
                        <Button buttonStyle='btn--outline'>Contact</Button>
                    </div>
                    <h4>About</h4>
                    <hr />
                    <div className={style.about}>
                        <div className={style.about_list}>
                            <h3>Phone</h3>
                            <p>{userData.phone}</p>
                        </div>
                        <div className={style.about_list}>
                            <h3>Address</h3>
                            <p>MNNIT Prayagraj</p>
                        </div>
                        <div className={style.about_list}>
                            <h3>Email</h3>
                            <p>{userData.email}</p>
                        </div>
                        <div className={style.about_list}>
                            <h3>Description</h3>
                            <p>{userData.description}</p>
                        </div>
                    </div>
                </div>
               
                <div className={style.working_list}>
                        <h2>Request List</h2>
                        <div className={style.working_list_item}>
                            <h3>1</h3>
                            <h3>Horil Prasad</h3>
                            <h3>Prayagraj</h3>
                            <h3>Plumber</h3>
                            <h3>01/05/2023</h3>
                            <h3 className={style.pending}>Pending</h3>
                        </div>
                        <div className={style.working_list_item}>
                            <h3>1</h3>
                            <h3>Horil Prasad</h3>
                            <h3>Prayagraj</h3>
                            <h3>Plumber</h3>
                            <h3>01/05/2023</h3>
                            <h3 className={style.pending}>Pending</h3>
                        </div>
                        <div className={style.working_list_item}>
                            <h3>1</h3>
                            <h3>Horil Prasad</h3>
                            <h3>Prayagraj</h3>
                            <h3>Plumber</h3>
                            <h3>01/05/2023</h3>
                            <h3 className={style.pending}>Pending</h3>
                        </div>
                        <div className={style.working_list_item}>
                            <h3>1</h3>
                            <h3>Horil Prasad</h3>
                            <h3>Prayagraj</h3>
                            <h3>Plumber</h3>
                            <h3>01/05/2023</h3>
                            <h3 className={style.pending}>Pending</h3>
                        </div>
                        <div className={style.working_list_item}>
                            <h3>1</h3>
                            <h3>Horil Prasad</h3>
                            <h3>Prayagraj</h3>
                            <h3>Plumber</h3>
                            <h3>01/05/2023</h3>
                            <h3 className={style.complete}>Done</h3>
                        </div>
                        <div className={style.working_list_item}>
                            <h3>1</h3>
                            <h3>Horil Prasad</h3>
                            <h3>Prayagraj</h3>
                            <h3>Plumber</h3>
                            <h3>01/05/2023</h3>
                            <h3 className={style.complete}>Done</h3>
                        </div>
                        <div className={style.working_list_item}>
                            <h3>1</h3>
                            <h3>Horil Prasad</h3>
                            <h3>Prayagraj</h3>
                            <h3>Plumber</h3>
                            <h3>01/05/2023</h3>
                            <h3 className={style.pending}>Pending</h3>
                        </div>
                </div>
                {(user && user.id === id) && <div className={style.logout}>
                        <Button buttonSize='btn--large' onClick={Logout}>logout</Button>
                    </div>}
            </div>
            
        )
}

export default Profile
