import React from 'react'
import style from '../../css/profile.module.css'
import { Button } from '../button/Button'
import { useUser} from '../shared/userContext'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const Profile = () => {
    const navigate = useNavigate();
    const {logout} = useUser()
    const Logout = () =>{
        localStorage.clear();
        logout();
        toast.success("Logout!",{theme:'colored'})
        navigate('/');
    }
  return (
    <div className={style.container}>
        <div className={style.left}>
            <div className={style.profile_img}>
                <img src="https://images.pexels.com/photos/1485031/pexels-photo-1485031.jpeg?cs=srgb&dl=pexels-harsh-raj-gond-1485031.jpg&fm=jpg" alt='user pic'/>
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
            <div className={style.logout}>
            <Button buttonSize='btn--large' onClick={Logout}>logout</Button>
            </div>
        </div> 
        <div className={style.right}>
            <div className={style.name}>
                <h3>Ms. Julee</h3>
                <p>Rusian</p>
                <h4>Ratings</h4>
                <div className={style.rating}>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                </div>
            </div>
            <h4>About</h4>
            <hr/>
            <div className={style.about}>
            <div className={style.about_list}>
                <h3>Phone</h3>
                <p>9862455653</p>
            </div>
            <div className={style.about_list}>
                <h3>Address</h3>
                <p>MNNIT Prayagraj</p>
            </div>
            <div className={style.about_list}>
                <h3>Email</h3>
                <p>user1@gmail.com</p>
            </div>
            <div className={style.about_list}>
                <h3>Description</h3>
                <p>Full night service only for MNNIT boys</p>
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
