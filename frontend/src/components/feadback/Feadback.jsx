import { Button } from "../button/Button";
import { Input } from "../input/Input";
import style from '../../css/feadback.module.css'
const Feadback = () => {
    return (
        <div className={style.container}>
        <div className={style.heading}>
            <h3>Feedback&nbsp;</h3>
            <img src="./chat_g.png" alt="" width="25"/>
        </div>
            <div className="sub-cont">
                <form action="">
                    <label for="name" className={style.name} >Name</label><br/>
                    <input type="text" className={style.input} placeholder="Your name"/><br/>
                    <label for="email" className={style.email}>Email</label><br/>
                    <input type="text" name="email" className={style.input} placeholder="Your email"/><br/><br/>
                    <div className={style.rating_heading}>Rate us..</div><br/>
                    <div className={style.rating}>
                            <input type="radio" name="rate" id="rate1"/>
                            <label for="rate1"></label>
                            <input type="radio" name="rate" id="rate2"/>
                            <label for="rate2"></label>
                            <input type="radio" name="rate" id="rate3"/>
                            <label for="rate3"></label>
                            <input type="radio" name="rate" id="rate4"/>
                            <label for="rate4"></label>
                            <input type="radio" name="rate" id="rate5"/>
                            <label for="rate5"></label>
                    </div>
                    <label for="email" className={style.msg_heading}>Message</label><br/>
                    
                    <textarea name="msg" className={style.msg_box} placeholder="Write your feedback here..."></textarea><br/>
                    <div className={style.submit}>
                        <Button type="submit" buttonSize="btn--large" value="Send">send</Button>
                    </div>
                </form>   
        </div>
    </div>
    )
}

export default Feadback;