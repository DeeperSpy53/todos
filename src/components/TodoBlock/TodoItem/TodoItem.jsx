import style from './todoitem.module.scss';
import {useState} from 'react'
import checkImg from '../../../assets/img/check.svg'

export default function TodoItem({children, completeDefault}){
    const [complete, setComplete] = useState(completeDefault);
    let styleTodoItm = style.todoItem,
        styleCircle = style.circle;

    if(complete){
        styleTodoItm += ' ' + style.complete;   // class 'complete'
        styleCircle += ' ' + style.completeCircle;
    }

    function onClick() {
        setComplete(!complete)
    }

    return(
        <div className={styleTodoItm} onClick={onClick}>
            <div className={styleCircle}>
                {complete &&
                    <img src={checkImg} alt="" />
                }
            </div>
            <h2>{children}</h2>
        </div>
    )
}