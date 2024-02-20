import style from './todoblock.module.scss';
import TodoItem from './TodoItem/TodoItem';
import {useState} from 'react';

export default function TodoBlock(){
    const [todoInput, setTodoInput] = useState();
    const [todo, setTodo] = useState([
        {
            id: 0,
            complete: false,
            text: 'Todo text'
        }
    ]);

    function todoKeyDown(e) {
        if(e.key === 'Enter'){
            if(todoInput.lenght > 0)
            {
                setTodo((preTodo) => ([
                    ...preTodo,
                    {
                        id: todo.lenght, complete: false, text: todoInput
                    }
                ]))
                //todo.push({id: 0, complete: false, text: todoInput});
            }
            else{
                // change input background
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