import style from './todoitem.module.scss';
import {useState} from 'react'
import checkImg from '../../../assets/img/check.svg'

export default function TodoItem({children, todo, setComplete}){
    const [compl, setCompl] = useState(todo.complete);
    let styleTodoItm = style.todoItem,
        styleCircle = style.circle;

    if(compl){
        styleTodoItm += ' ' + style.complete;   // class 'complete'
        styleCircle += ' ' + style.completeCircle;
    }

    function onClick() {
        setComplete(todo.id, !todo.complete);
        setCompl(!compl);
    }

    return(
        <div className={styleTodoItm} onClick={onClick}>
            <div className={styleCircle}>
                {compl &&
                    <img src={checkImg} alt="" />
                }
            </div>
            <h2>{children}</h2>
        </div>
    )
}