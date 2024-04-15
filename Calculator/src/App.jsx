import styels from './App.module.css'
import Display from './Componant/Display'
import Button from './Componant/Button'
import { useState } from 'react'

function App() {

  const [Calval, setCalval] = useState("0")

  const onButtonClick = (buttontext) => {

    if (buttontext === "AC") {
      setCalval("")
    } else if (buttontext === "CE") {
      setCalval("")
    } else if (buttontext === "=") {
      const result = eval(Calval)
      setCalval(result)
    } else {
      const Newdisplay = Calval + buttontext;
      setCalval(Newdisplay)
    }

  }


  return (
    <>
      <div className={styels.calculator}>
        <Display displayvalue={Calval} />
        <Button onButtonClick={onButtonClick} />
      </div>
    </>
  )
}

export default App
