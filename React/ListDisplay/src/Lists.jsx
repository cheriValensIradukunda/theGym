import { useState } from "react"
import style from "./style.module.css"

export const Lists = (props) => {

    const [isUl,setIsul] = useState(true)

    return <div>
            <h2>Lists</h2>
            {isUl ? <ul>{listsDisplay(props.list)}</ul>: <ol>{listsDisplay(props.list)}</ol>}
            <button onClick={()=>setIsul(!isUl)}>Toggle list</button>
        </div> 

} 
const listsDisplay = (lists) => {
    return lists && lists.map((element,index)=> <li className={style.list} key={index}>{element}</li>)
}