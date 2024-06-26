import { useState } from 'react'
import './style/style.module.scss'
import TodoBlock from './components/TodoBlock/TodoBlock'
import TodoMenu from './components/TodoMenu/TodoMenu';
import ListContext from './ListContext';

function App() {
  const [list, setList] = useState(0);

  const listCont = {
    list,
    setList
  }

  return (
    <main>
      <ListContext.Provider value={listCont}>
        <h1>todos</h1>
        <TodoMenu/>
        <TodoBlock />
      </ListContext.Provider>
    </main>
  )
}

export default App