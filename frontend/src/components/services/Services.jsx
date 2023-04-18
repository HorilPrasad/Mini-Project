import { useState } from 'react';
import style from '../../css/services.module.css'
import ReactSearchBox from "react-search-box";
import { FaSearch } from "react-icons/fa";
import Worker from '../card/Worker';
const Services = () => {

    const [text, setText] = useState('hello');

    const submit = (e) => {
        e.preventDefault();

        console.log('hello')
    }
    const data = [
        {
            key: "john",
            value: "John Doe",
        },
        {
            key: "jane",
            value: "Jane Doe",
        },
        {
            key: "mary",
            value: "Mary Phillips",
        },
        {
            key: "robert",
            value: "Robert",
        },
        {
            key: "karius",
            value: "Karius",
        },
    ];

    return (
        <div className={style.container}>
            <div className={style.search}>
                <h2 className={style.heading}>Top Workers</h2>
                <form onSubmit={submit}>
                    <ReactSearchBox data={data} placeholder="Search..." onChange={(record) => setText(record)} leftIcon={<FaSearch />} iconBoxSize="40px" />
                </form>
            </div>
            <div className={style.top_workers}>
                <Worker/>
                <Worker/>
                <Worker/>
                <Worker/>
            </div>
           
        </div>
    )
}

export default Services