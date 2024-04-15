import Container from "./Container"
import Fooditem from "./Fooditem"
import Errormessage from "./Errormessage"
import Foodinput from "./Foodinput/Foodinput"
import { useState } from "react"


function App() {


  const [fooditems, setfooditems] = useState(['Dal', 'Chana', 'Green Vagitebal', 'Salad', 'Roti'])


  const onkeydown = (event) => {
    if (event.key === "Enter") {
      let newfood = event.target.value
      event.target.value = "";
      let newitem = [...fooditems, newfood]
      setfooditems(newitem)
    }
  }
  return (
    <>

      <Container>
        <h1> Healthy Food </h1>
        {/* <Heading/>
        <Slogen/>
        <Currenttime/> */}
        <Foodinput handleonkeydown={onkeydown} />
        <Fooditem itmess={fooditems} />
        <Errormessage itmess={fooditems} />
      </Container>

    </>
  )
}

export default App
