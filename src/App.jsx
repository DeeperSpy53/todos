import { useState } from 'react'
import style from './style/style.module.scss'
import TodoBlock from './components/TodoBlock/TodoBlock'
import TodoMenu from './components/TodoMenu/TodoMenu';

function App() {
  const [count, setCount] = useState(0);

  return (
    <main>
      <h1>todos</h1>
      <TodoMenu/>
      <TodoBlock />
    </main>
  )
}

export default App
