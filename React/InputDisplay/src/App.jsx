import { useState } from 'react'
import style from './style.module.css'
import './App.css'

function App() {

  const [text,setText] = useState("")

  return (
    <div>
      <h1>{text.length > 0 ? text : "No text to be displayed"}</h1>
      <input className={style.input} type="text" value={text} onChange={e=>setText(e.target.value)} />
    </div>
  )
}

export default App
