import Todoitem from "./Item"
export default function Todoitems({ todoitems }) {

    return (

        <>
            {todoitems.map((item) => (<Todoitem Todoname={item.Todoname} TodoDate={item.TodoDate} />))}

        </>

    )

}
