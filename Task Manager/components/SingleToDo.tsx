import React from "react"
import { toDoMould } from "./mould"

interface Props{
    item: toDoMould
}

const SingleToDo: React.FC<Props> = ({item})=>{
    return(
        <div className="Single_myTask">{item.myTask}</div>
    )
}

export default SingleToDo