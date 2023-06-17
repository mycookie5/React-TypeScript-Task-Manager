import React from "react";
import{useRef} from 'react'
import '../src/style.css'

interface Props{
    task: string
    setTask: React.Dispatch<React.SetStateAction<string>>
    handleAdd: (e: React.FormEvent) => void
}


const InputField: React.FC<Props> = ({task, setTask, handleAdd}) => {
    
    const inputRef = useRef<HTMLInputElement>(null)

    return(
        <form 
            className="input__form" 
            onSubmit={(e)=> {
                handleAdd(e)
                inputRef.current?.blur()}}>
            <input
                ref={inputRef} 
                type="input"
                className="input__field" 
                placeholder="New task" 
                value={task} // empties input after submit
                onChange={(e) => setTask(e.target.value)}/>
            <button 
                className="input_go" 
                type="submit" // type submit connects button to form element
                >Go
                </button>
        </form>
    )
}

export default InputField