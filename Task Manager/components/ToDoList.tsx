import React from 'react'
import SingleToDo from "./SingleToDo";
import { toDoMould } from './mould'

interface Props{
    toDoBox: toDoMould[]
    setToDoBox: React.Dispatch<React.SetStateAction<toDoMould[]>>
}

const ToDoList: React.FC<Props> = ({toDoBox}) => {
    return(
        <div>
            {toDoBox.map((item)=> (
                <SingleToDo  item={item} />))}
        </div>
    )
}

export default ToDoList