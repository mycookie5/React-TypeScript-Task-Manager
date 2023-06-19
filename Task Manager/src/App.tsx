import {useState} from 'react'
import InputField from '../components/InputField'
import {toDoMould} from '../components/mould'
import ToDoList from '../components/ToDoList'
import {DragDropContext, DropResult} from "react-beautiful-dnd"
import uuid from 'react-uuid'
import React from 'react'
import './App.css'


const App: React.FC = () => {
  const [task, setTask] = useState<string>("")
  const [toDoBox, setToDoBox] = useState<toDoMould[]>([])
  
  const handleAdd = (e: React.FormEvent): void =>{
    e.preventDefault()
    if (task) {
      setToDoBox([...toDoBox, {id: uuid(), myTask: task, complete: false}])
    }
    setTask('')
  }

  const dragEnd = (result: DropResult) => {
    const { destination, source } = result;

    if (destination === null) return;    

    if (
      destination?.droppableId === source.droppableId &&
      destination.index === source.index
    ) 
    return;

    let add 
    let active = toDoBox

    if (source.droppableId === 'drop'){
      add = active[source.index]
      active.splice(source.index, 1)
    }
    if (source.droppableId === 'drop'){
      active.splice(destination?.index,0,add)
    }
    
    setToDoBox(active)
  }
  
  return(
      <DragDropContext onDragEnd={(dragEnd)}>
        <div className="app">
            <header className='head'>Task Manager</header>
            <InputField task={task} setTask={setTask} handleAdd={handleAdd}/>
            <ToDoList toDoBox={toDoBox} setToDoBox={setToDoBox} />
        </div>
      </DragDropContext>
  )
}
export default App
