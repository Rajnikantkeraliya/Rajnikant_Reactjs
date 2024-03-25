import { useState } from 'react'
import './App.css'
import Mycomponent from './Mycomponent'
useState
function App() {

  const [change, setChange] = useState(false)

  return (
    <>
      <Mycomponent myprops={change === true ? "maninagar" : "sg highway"} />
      <button onClick={() => { setChange(true) }}></button>
    </>

  )
}

export default App
