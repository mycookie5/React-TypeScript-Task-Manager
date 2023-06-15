import {useState} from 'react'
import InputField from '../components/InputField'
import {toDoMould} from '../components/mould'
import ToDoList from '../components/ToDoList'
import Calendar from "../components/Calendar";
import uuid from 'react-uuid'
import React from 'react'
import './App.css'


const App: React.FC = () => {
  const [calendar, setCalendar] = useState<boolean>(false)
  const [date, setDate] = useState<Date>()
  const [task, setTask] = useState<string | undefined>()
  const [toDoBox, setToDoBox] = useState<toDoMould[]>([])
  
  const handleAdd = (e: React.FormEvent): void =>{
    e.preventDefault()
    if (task) {
      setToDoBox([...toDoBox, {id: uuid(), myTask: task, complete: false}])
    }
    setTask('')
  }

  const handleCalendar= ():void => {
    setCalendar(!calendar)
  }

  const handleDate = (e: React.FormEvent): void =>{
    e.preventDefault
  } 
  
  return(
    <div className="app">
      <header className='head'>Task Manager</header>
      <InputField task={task} setTask={setTask} handleAdd={handleAdd}/>
      <Calendar date={date} setDate={setDate} handleDate={handleDate} calendar={calendar} handleCalendar={handleCalendar}/>
      <ToDoList toDoBox={toDoBox} setToDoBox={setToDoBox} />
    </div>

  )
}

export default App
