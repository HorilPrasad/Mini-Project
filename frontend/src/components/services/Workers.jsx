import { useParams } from "react-router-dom"
import { Divider } from "../divider/Divider";
import { useEffect, useState} from 'react'
import Worker from '../card/Worker'
import style from '../../css/workers.module.css'

const Workers = () => {
    const {name} = useParams();
    const [workerType, setworkerType] = useState('');
    const [data, setdata] = useState();

    const getWorkersData = async(type) =>{
      const res = await fetch('http://localhost:5000/api/workers/getAllWorkers');

      if(res.status === 200)
      {
        const data = await res.json();
        setdata(data);
        console.log(data);
      }
    }

    useEffect(() => {
      const arr = name.split(' ');
      const type = arr[1];
      setworkerType(type.toLowerCase());

      getWorkersData(workerType);

    }, []);

  return (
    <>
    <Divider>{name}</Divider>
    <div className={style.worker_list}>
    {
      data && data.map((item,index) => {
        if(workerType == (item.occupation).toLowerCase())
          return <Worker key={index} data={item}/>
      })
    }
    </div>
    </>
  )
}

export default Workers