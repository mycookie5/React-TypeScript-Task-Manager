import React from "react"
import {BsCalendar3} from "react-icons/bs";

interface Props{
    calendar: boolean
    date: Date | undefined
    setDate: React.Dispatch<React.SetStateAction<Date | undefined>>
    handleDate: (e: React.FormEvent) => void
    handleCalendar: () => void
}


const Calendar: React.FC<Props> = ({date,setDate,handleDate,calendar,handleCalendar}) =>{

    const inputRef = React.useRef<HTMLInputElement>(null)

    return(
        <form 
            className="date_form" 
            onSubmit={handleDate}
        >
        <span 
            className="date_icon_span" 
            onClick={ () => {
                handleCalendar()
                inputRef.current?.focus()
            }}>
            <BsCalendar3/>
            {calendar && <input autoFocus={true} ref={inputRef} onClick={(e) => e.stopPropagation()} type="date"/>}
        </span>

        </form>
    )
}

export default Calendar