import React from "react"
import { toDoMould } from "./mould"

interface Props{
    item: toDoMould
    toDoBox: toDoMould[] 
    setToDoBox: React.Dispatch<React.SetStateAction<toDoMould[]>>
}

const SingleToDo: React.FC<Props> = ({item, toDoBox, setToDoBox})=>{

    const handleStatus = (id: string) => {
        setToDoBox(toDoBox.map((item) => item.id === id? {...item, complete: !item.complete}: item))}

    const handleRemove = (id: string) => {
        setToDoBox(toDoBox.filter((item) => (item.id !== id)))
 
    }

    return(
        <div className={!item.complete? 'single_form' : 'single_form done_form'}>
            <div className="single_myTask"> {item.myTask}</div>
            <div className="div_button">
                <span className="delete button" onClick={() => handleRemove(item.id)}>Del</span>
                <span className="done button" onClick={() => handleStatus(item.id)}>Done</span>
            </div>
        </div>

    )
}

export default SingleToDo