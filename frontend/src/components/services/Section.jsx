import style from '../../css/section.module.css'
import { Button } from '../button/Button'
import Worker from '../card/Worker'
import {useNavigate} from 'react-router-dom'
import {useState} from 'react'
const Section = ({name}) => {
    const navigate = useNavigate();
    const [data, setdata] = useState({
        "_id":  "6447e7dc633ecd28ea51b2bb",
        "name": "User1",
        "email": "user1@gmail.com",
        "phone": "84654654",
        "address": "Prayagraj",
        "password": "$2b$10$2r.vHCB/5futQiCpRVFcI./2BuZuyr4ld0e1yETT.WrY9H1egW2OW",
        "occupation": "electrician",
        "serviceList": [
          "electrician",
          "carpainter",
          "cleaner"
        ],
        "description": "expert in all field",
        "imageUrl": "https://firebasestorage.googleapis.com/v0/b/easyway-f8126.appspot.com/o/images%2Fmale-mechanic.png889?alt=media&token=0d4159ec-741e-4884-8a12-5ae2cfee338b",
        "__v": 0
      });
    const handleClick = () =>{
        navigate(`${name}`)
    }

    return (
        <div className={style.section}>
            <div className={style.section_heading}>
                <h3>{name}</h3>
                <Button onClick={handleClick}>more</Button>
            </div>
            <div className={style.worker_list}>
                <Worker data={data}/>
                <Worker data={data}/>
                <Worker data={data}/>
                <Worker data={data}/>
            </div>
        </div>
    )
}

export default Section