import style from '../../css/contact.module.css'
import { useState } from 'react';
import { Button } from '../button/Button'
import { toast } from 'react-toastify';
const ContactUs = () => {
    const [inputs, setInputs] = useState({name:'', email:'', phone:'', message:''});

    const handleInput = (event)=>{
        console.log(event.target.value)
        const name = event.target.name;
        const value = event.target.value;

        setInputs((lastvalue) =>{
            return{
                ...lastvalue,
                [name]:value
            }
        })
    }

    const SubmitEvent = (e) =>{
        e.preventDefault();

        if(inputs.name === '' || inputs.email === '' | inputs.phone ==='' || inputs.message ==='')
            toast.warn('All field mandatory!',{theme:'colored'})


    }

    return (
        <div className={style.main_container}>
            <div className={style.left}>
                <div className={style.left_sub}>
                    <div className={style.heading}>Contact Us</div>
                    <div className={style.heading_down}>Get In Touch With Us</div>
                    <div className={style.msg}>Welcome to the EasyWay services we provide an efficient way to find the worker for daily home services like electrician, cleaner, plumber. <br/>Contact us for any queries.</div>
                    <div className={style.phone}>
                        <div>
                            <img src="./phone.png" alt="" width="54" />
                        </div>
                        <div className={style.phone_div}>
                            <div className={style.phone_label}>Phone Number</div>
                            <div className={style.phone_value}>(+91)1234567890</div>
                        </div>
                    </div>
                    <div className={style.email}>
                        <div>
                            <img src="./email_contact.png" alt="" width="54" />
                        </div>
                        <div className={style.email_div}>
                            <div className={style.email_label}>Email ID</div>
                            <div className={style.email_value}>esaywayservices04@gmail.com</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={style.mid}></div>
            <div className={style.right}>
                <form onSubmit={SubmitEvent}>
                    <input type="text" className={style.name_field} name='name' value={inputs.name} onChange={handleInput} placeholder="Your Name" /><br />
                    <input type="email" className={style.email_field} name='email' value={inputs.email} onChange={handleInput} placeholder="Your Email" /><br />
                    <input type="text" className={style.phone_field} name='phone' value={inputs.phone} onChange={handleInput} placeholder="Your Phone" /><br />
                    <textarea name="message" className={style.user_msg_field} value={inputs.message} onChange={handleInput} cols="30" rows="7" placeholder="Your Message..."></textarea>
                    <Button type="submit" buttonSize='btn--large'>sumit</Button>
                </form>
            </div>
        </div>
    )
}

export default ContactUs