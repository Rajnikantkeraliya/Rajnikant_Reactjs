export default function Todoitem({ Todoname, TodoDate }) {

    return (
        <>
            <div className="todo-container">

                <div className="container">
                    <div className="d-flex m-5">

                        <div class="col-2 m-2">
                            {Todoname}
                        </div>
                        <div class="col-2 m-2">
                            {TodoDate}
                        </div>
                        <div class="col-1 m-1">
                            <button type="button" class="btn btn-danger">Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )


}