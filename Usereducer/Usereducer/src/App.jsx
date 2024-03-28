import { useState } from 'react'
import './App.css'
import Mycomponent from './Mycomponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Mycomponent />
    </>
  )
}

export default App
