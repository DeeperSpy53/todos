import style from './todomenu.module.scss'
import {useContext, useState} from 'react';
import ListContext from '../../ListContext'

export default function TodoMenu(){
    //const [list, setList] = useState(0);
    const {list, setList} = useContext(ListContext);

    return(
        <div className={style.menu}>
            <ul>
                <li className={list===0?style.choose:''} onClick={() => setList(0)}>All</li>
                <li className={list===1?style.choose:''} onClick={() => setList(1)}>Active</li>
                <li className={list===2?style.choose:''} onClick={() => setList(2)}>Completed</li>
            </ul>
        </div>
    )
}