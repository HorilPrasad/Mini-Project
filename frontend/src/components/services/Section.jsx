import style from '../../css/section.module.css'
import { Button } from '../button/Button'
import Worker from '../card/Worker'
import {useNavigate} from 'react-router-dom'
import {useState,useEffect} from 'react'
import {baseUrl} from '../shared/baseUrl'
const Section = ({name}) => {
    const navigate = useNavigate();
    const [data, setdata] = useState(null);

      const getWorkersData = async(name) =>{
        const arr = name.split(' ');
        const type = arr[1].toLowerCase();
        const res = await fetch(baseUrl+'/api/workers/getAllWorkers');
  
        if(res.status === 200)
        {
          const data = await res.json();
          console.log(data)
          const temp = data.filter(x=>{
            if(x.occupation == 'electrician')
              return x;
          })
          console.log(temp)
          setdata(data);
        }
      }

      useEffect(() => {
        getWorkersData(name);

      }, []);

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
                {
                    data && data.slice(1,5).map((item,index) =>{
                        return <Worker key={index} data={item}/>
                    })
                }
                

            </div>
        </div>
    )
}

export default Section