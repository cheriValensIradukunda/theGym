import { useState } from 'react'
import style from './style.module.css'
import './App.css'
import { Lists } from './Lists'

function App() {

  const [text,setText] = useState("")
  const lists = ["banana",'apple','orange','waterMellon']
  return (
    <div>
      <Lists list={lists}/>
    </div>
  )
}

export default App
