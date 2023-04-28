import style from '../../css/contact.module.css'
import { Button } from '../button/Button'
const ContactUs = () => {
    return (
        <div class={style.main_container}>
            <div class={style.left}>
                <div class={style.left_sub}>
                    <div class={style.heading}>Contact Us</div>
                    <div class={style.heading_down}>Get In Touch With Us</div>
                    <div class={style.msg}>Welcome to the EasyWay services we provide an efficient way to find the worker for daily home services like electrician, cleaner, plumber. <br/>Contact us for any queries.</div>
                    <div class={style.phone}>
                        <div>
                            <img src="./phone.png" alt="" width="54" />
                        </div>
                        <div class={style.phone_div}>
                            <div class={style.phone_label}>Phone Number</div>
                            <div class={style.phone_value}>(+91)1234567890</div>
                        </div>
                    </div>
                    <div class={style.email}>
                        <div>
                            <img src="./email_contact.png" alt="" width="54" />
                        </div>
                        <div class={style.email_div}>
                            <div class={style.email_label}>Email ID</div>
                            <div class={style.email_value}>esaywayservices04@gmail.com</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class={style.mid}></div>
            <div class={style.right}>
                <form>
                    <input type="text" class={style.name_field} placeholder="Your Name" /><br />
                    <input type="email" class={style.email_field} placeholder="Your Email" /><br />
                    <input type="text" class={style.phone_field} placeholder="Your Phone" /><br />
                    <textarea name="msg" class={style.user_msg_field} cols="30" rows="7" placeholder="Your Message..."></textarea>
                    <Button type="submit" buttonSize='btn--large'>sumit</Button>
                </form>
            </div>
        </div>
    )
}

export default ContactUs