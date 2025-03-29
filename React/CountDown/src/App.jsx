import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const handleIncreaseOrDecrease = (bool) => {
    if(bool){
      setCount(count +1)
    }else{
      if(count >0){
        setCount(count-1)
      }
    }
  }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={()=>handleIncreaseOrDecrease(true)}>Increase</button>
      <button onClick={()=>handleIncreaseOrDecrease(false)}>Decrease</button>
    </div>
  )
}

export default App
