/* 
    id: 0,
    complete: false,
    text: 'Todo text'
*/

import style from './todoblock.module.scss';
import TodoItem from './TodoItem/TodoItem';
import {useState, useContext, useEffect} from 'react';
import ListContext from '../../ListContext'

export default function TodoBlock(){
    const {list, setList} = useContext(ListContext);
    const [todoInput, setTodoInput] = useState();

    const [todo, setTodo] = useState(JSON.parse(localStorage.getItem('todo')) || []);

    useEffect(() => {
        localStorage.setItem('todo', JSON.stringify(todo));
    }, [todo])

    function setComplete(id, value) {
        const todoResult = todo;
        todoResult[id].complete = value;

        setTodo(todoResult);
        localStorage.setItem('todo', JSON.stringify(todo));
    }

    function todoKeyDown(e) {
        if(e.key === 'Enter'){
            if(todoInput != undefined && todoInput.length > 0)
            {
                setTodo((preTodo) => ([
                    ...preTodo,
                    {
                        id: todo.length, complete: false, text: todoInput
                    }
                ]))
            }
        }
    }
    
    return(
        <div className={style.todoBlock}>
            <input type="text" 
                    value={todoInput}
                    onChange={(e) => {setTodoInput(e.target.value)}}
                    placeholder="Что нужно выполнить?" 
                    onKeyDown={todoKeyDown}/>

            <div className={style.todoList}>
                {
                    todo.map((t) => {
                        if(list === 1 && t.complete === false || list === 2 && t.complete === true || list === 0){
                            return (<TodoItem key={t.id + '_' + t.text} todo={t} setComplete={setComplete}>{t.text}</TodoItem>)
                        } 
                    })
                }
            </div>
        </div>
    )
}