import React from 'react'
import SingleToDo from "./SingleToDo";
import { toDoMould } from './mould'
import  uuid from "react-uuid";
import { Droppable } from 'react-beautiful-dnd';

interface Props{
    toDoBox: toDoMould[]
    setToDoBox: React.Dispatch<React.SetStateAction<toDoMould[]>>
}

const ToDoList: React.FC<Props> = ({toDoBox, setToDoBox}) => {
    return(
            <Droppable droppableId='drop'>
                {(provided) => (
                    <div className='container' ref={provided.innerRef} {...provided.droppableProps}>
                        {toDoBox.map((item, index)=> {
                        return <SingleToDo toDoBox={toDoBox} index={index} setToDoBox={setToDoBox} item={item} key={uuid()} />
                        })}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
    )
}

export default ToDoList