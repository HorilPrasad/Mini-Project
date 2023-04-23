import style from '../../css/contact.module.css'
import { Button } from '../button/Button'
const ContactUs = () =>{
    return(
        <div className={style.main_container}>
        <div className={style.left}>
            <div className={style.left_sub}>
                <div className={style.heading}>Contact Us</div>
                <div >Get In Touch With Us</div>
                <div className={style.msg}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque earum corrupti explicabo ratione sunt blanditiis, repudiandae quae. Inventore aut expedita quidem aspernatur dolores, iure dicta illo voluptates numquam minus totam.</div>
                <div className={style.phone}>
                    <div>
                        <img src="./phone.png" alt="" width="54"/>
                    </div>
                    <div >
                       <div >Phone Number</div>
                        <div >(+91)1234567890</div>
                    </div>
                </div>
                <div className={style.email}>
                    <div>
                        <img src="./email_contact.png" alt="" width="54"/>
                    </div>
                    <div >
                       <div >Email ID</div>
                        <div >esaywayservices04@gmail.com</div>
                    </div>
                </div>
            </div>
        </div>
        <div className={style.mid}></div>
        <div className={style.right}>
            <form >
                <input type="text" name="name" id="name" placeholder="Your Name"/><br/>
                <input type="email" name="email" id="email" placeholder="Your Email"/><br/>
                <input type="text" name="phone" id="phone" placeholder="Your Phone"/><br/>
                <textarea name="msg" id="user-msg" cols="30" rows="7" placeholder="Your Message..."></textarea>
                <Button type="submit" buttonSize='btn--large'>submit</Button>
            </form>
        </div>    
    </div>
    )
}

export default ContactUs