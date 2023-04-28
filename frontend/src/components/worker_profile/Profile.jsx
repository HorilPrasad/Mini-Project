import {useState,useEffect} from 'react'
import style from '../../css/profile.module.css'
import { Button } from '../button/Button'
import { useUser} from '../shared/userContext'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { baseUrl } from '../shared/baseUrl'
const Profile = () => {
    const navigate = useNavigate();
    const {logout} = useUser()
    const {id} = useParams();
    const [userData, setUserData] = useState();
    const {user} = useUser();


    const Logout = () =>{
        localStorage.clear();
        logout();
        toast.success("Logout!",{theme:'colored'})
        navigate('/');
    }

    const getUserProfile = async () =>{
        const res = await fetch(baseUrl +'/api/workers/profile/'+id);

        const data = await res.json();

        setUserData(data);
    }

    useEffect(() => {
        getUserProfile();
        console.log(user);
    }, [id]);


if(userData)
  return (
    <div className={style.container}>
        <div className={style.left}>
            <div className={style.profile_img}>
                <img src={userData.imageUrl} alt='user pic'/>
            </div>
            <div className={style.services}>
                <h3>Services</h3>
                <hr/>
                <ul className={style.services_list}>
                <li className={style.list_item}>Machenic</li>
                <li className={style.list_item}>Carpainter</li>
                <li className={style.list_item}>Plumber</li>
                </ul>
            </div>
            {(user && user.id ===id) &&<div className={style.logout}>
            <Button buttonSize='btn--large' onClick={Logout}>logout</Button>
            </div>}
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
                <Button buttonStyle='btn--outline'>Message</Button>
                <Button buttonStyle='btn--outline'>Contact</Button>
            </div>
            <h4>About</h4>
            <hr/>
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
            <h3>Working List</h3>
            <div className={style.done_list}>
                <table>
                    <tr>
                        <th>Name</th>
                        <th>Address</th>
                        <th>Date</th>
                        <th>Work</th>
                    </tr>
                    <tr>
                        <td>Horil Prasad</td>
                        <td>Prayagraj</td>
                        <td>23/04/2023</td>
                        <td>Cleaning</td>
                    </tr>
                    <tr>
                        <td>Horil Prasad</td>
                        <td>Prayagraj</td>
                        <td>23/04/2023</td>
                        <td>Cleaning</td>
                    </tr>
                    <tr>
                        <td>Horil Prasad</td>
                        <td>Prayagraj</td>
                        <td>23/04/2023</td>
                        <td>Cleaning</td>
                    </tr>
                    <tr>
                        <td>Horil Prasad</td>
                        <td>Prayagraj</td>
                        <td>23/04/2023</td>
                        <td>Cleaning</td>
                    </tr>
                    <tr>
                        <td>Horil Prasad</td>
                        <td>Prayagraj</td>
                        <td>23/04/2023</td>
                        <td>Cleaning</td>
                    </tr>
                    <tr>
                        <td>Horil Prasad</td>
                        <td>Prayagraj</td>
                        <td>23/04/2023</td>
                        <td>Cleaning</td>
                    </tr>
                    <tr>
                        <td>Horil Prasad</td>
                        <td>Prayagraj</td>
                        <td>23/04/2023</td>
                        <td>Cleaning</td>
                    </tr>
                    <tr>
                        <td>Horil Prasad</td>
                        <td>Prayagraj</td>
                        <td>23/04/2023</td>
                        <td>Cleaning</td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
  )
}

export default Profile
