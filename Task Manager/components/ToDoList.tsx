import React from 'react'
import SingleToDo from "./SingleToDo";
import { toDoMould } from './mould'
import  uuid from "react-uuid";

interface Props{
    toDoBox: toDoMould[]
    setToDoBox: React.Dispatch<React.SetStateAction<toDoMould[]>>
}

const ToDoList: React.FC<Props> = ({toDoBox, setToDoBox}) => {
    return(
        <div className='container'>
            {toDoBox.map((item)=> {
                return <SingleToDo toDoBox={toDoBox} setToDoBox={setToDoBox} item={item} key={uuid()} />
            })}
        </div>
    )
}

export default ToDoList