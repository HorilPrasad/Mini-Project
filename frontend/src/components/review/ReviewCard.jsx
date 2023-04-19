import style from '../../css/reviewcard.module.css';
import quote_up from '../../img/quote-up.png';
import quote_down from '../../img/quote-down.png';
import profileImg from '../../img/avatar.svg';

const ReviewCard = ()=>{
    return (
        <div className={style.card}>
        <div className={style.quote_up}>
            <img src={quote_up} alt="" width="30"/>
        </div>
        <div className={style.user_img}>
            <img src={profileImg} alt="" width="50"/>
            <h2 className={style.name}>John Dey</h2>
        </div>
        <div className={style.text}>Eum temporibus sit quos ad culpa, ullam, suscipit debitis autem, cum assumenda provident!"</div>
        <div className={style.quote_down}>
            <img src={quote_down} alt="" width="30"/>
        </div>
        
    </div>
    )
}

export default ReviewCard;