import { useState } from 'react'
import './App.css'
import Navbar from './Mycomponant/Navbar/Navbar'
import Datalist from './Mycomponant/Datalist/Datalist'
import Dataform from './Mycomponant/Dataform/Dataform'

function App() {

  let [currentposition, setcurrentposition] = useState(0)

  return (
    <>
      <Navbar setcurrentposition={setcurrentposition} />
      {currentposition == 0 ? <Datalist /> : <Dataform />}

    </>
  )
}

export default App
