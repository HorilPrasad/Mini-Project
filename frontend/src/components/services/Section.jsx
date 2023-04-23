import style from '../../css/section.module.css'
import { Button } from '../button/Button'
import Worker from '../card/Worker'
const Section = ({name}) => {
    

    return (
        <div className={style.section}>
            <div className={style.section_heading}>
                <h3>{name}</h3>
                <Button>more</Button>
            </div>
            <div className={style.worker_list}>
                <Worker />
                <Worker />
                <Worker />
                <Worker />
            </div>
        </div>
    )
}

export default Section