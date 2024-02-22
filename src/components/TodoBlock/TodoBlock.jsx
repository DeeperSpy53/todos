import style from './todoblock.module.scss';
import TodoItem from './TodoItem/TodoItem';
import {useState} from 'react';

export default function TodoBlock(){
    const [inputStyle, setInputStyle] = useState({})
    const [todoInput, setTodoInput] = useState();
    const [todo, setTodo] = useState([
        {
            id: 0,
            complete: false,
            text: 'Todo text'
        }
    ]);

    console.log(inputStyle);
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
                //todo.push({id: 0, complete: false, text: todoInput});
            }
            else{
                // change input background
                setInputStyle({background: '#red'});
                setTimeout(() => {
                    
                }, 1.0);
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
                {todo.map((t) => (
                    <TodoItem key={t.id} completeDefault={t.complete}>{t.text}</TodoItem>
                ))}
            </div>
        </div>
    )
}