import style from '../../css/worker_card.module.css';
import img from '../../img/avatar.svg'
const Worker = () => {
    return(
        <div className={style.container}>
            <div className={style.profile}>
                <img src={img} />
            </div>
            <div className={style.details}>
                <div className={style.name}>
                    <h2>Horil Prasad</h2>
                    <p>Engineer</p>
                </div>
                <div className={style.services}>
                    <ul className={style.services_list}>
                        <li className={style.list_item}>Cleaner</li>
                        <li className={style.list_item}>Electrician</li>
                        <li className={style.list_item}>Carpainter</li>
                        <li className={style.list_item}>Machenics</li>
                        <li className={style.list_item}>Plumber</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Worker