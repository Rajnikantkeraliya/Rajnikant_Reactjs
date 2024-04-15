import "bootstrap/dist/css/bootstrap.min.css"
import './heading.css'
import { useState } from "react"
export default function Heading({ handleonchange }) {

    const [Todoname, setTodoname] = useState()
    const [TodoDate, setTodoDate] = useState()


    const addname = (event) => {
        setTodoname(event.target.value)
    }
    const Adddate = (event) => {
        setTodoDate(event.target.value)
    }

    const handlenamechange = () => {
        handleonchange(Todoname, TodoDate);
        setTodoDate("");
        setTodoname("");
    }

    return (
        <>
            <div className="todo-container">
                <div className="heading m-3">
                    <h1>Todo App</h1>
                </div>
                <div className="container">
                    <div className="d-flex m-5">

                        <div class="col-2 m-2">
                            <input type="text" placeholder="Enter Todo Here" onChange={addname} />
                        </div>
                        <div class="col-2 m-2">
                            <input type="date" onChange={Adddate} />
                        </div>
                        <div class="col-1 m-1">
                            <button onClick={handlenamechange} type="button" class="btn btn-success">Add</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
