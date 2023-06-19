import React from "react"
import { toDoMould } from "./mould"
import { Draggable } from "react-beautiful-dnd"

interface Props{
    item: toDoMould
    index: number
    toDoBox: toDoMould[] 
    setToDoBox: React.Dispatch<React.SetStateAction<toDoMould[]>>
}

const SingleToDo: React.FC<Props> = ({item, toDoBox, setToDoBox, index})=>{

    const handleStatus = (id: string) => {
        setToDoBox(toDoBox.map((item) => item.id === id? {...item, complete: !item.complete}: item))}

    const handleRemove = (id: string) => {
        setToDoBox(toDoBox.filter((item) => (item.id !== id)))
 
    }

    return(
        <Draggable draggableId={item.id.toString()} index={index} key={item.id.toString()}>   
            {(provided)=>(
                <div 
                    className={!item.complete? 'single_form' : 'single_form done_form'} 
                    ref={provided.innerRef} 
                    {...provided.draggableProps} 
                    {...provided.dragHandleProps}
                >
                    <div className="single_myTask"> {item.myTask}</div>
                    <div className="div_button">
                        <span className="delete button" onClick={() => handleRemove(item.id)}>Del</span>
                        <span className="done button" onClick={() => handleStatus(item.id)}>Done</span>
                    </div>
                </div>
                
            )}
        </Draggable>
        

    )
}

export default SingleToDo