import { useState } from 'react';
import './App.css'
import Heading from './My Componant/Heading'
import Todoitems from './My Componant/Todoitems';



function App() {

  let initialtodoitems = [{
    Todoname: "Buy Milk",
    TodoDate: "04/10/2023",
  },
  {
    Todoname: "Go To Collage",
    TodoDate: "04/10/2023",
  },
  ];

  const [todoitems, setsettodoitems] = useState(initialtodoitems)

  const handleonchange = (Todoname, TodoDate) => {
    console.log(`New Item ${Todoname} Date: ${TodoDate}`)
    const newadditem = [...todoitems, { Todoname: Todoname, TodoDate: TodoDate }];
    setsettodoitems(newadditem)

  }

  return (
    <>
      <Heading handleonchange={handleonchange} />
      <Todoitems todoitems={todoitems} />

    </>
  )
}

export default App
