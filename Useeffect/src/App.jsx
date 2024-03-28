import { useState, useEffect } from 'react'
import './App.css'
import Usereffunction from './useref'

function App() {
  // const [count, setCount] = useState(0)

  // const [Deliverycharge, setDeliverycharge] = useState()

  // useEffect(() => {
  //   if (count <= 0) {
  //     setDeliverycharge("")
  //   }
  //   else if (count > 100) {
  //     setDeliverycharge("Your delivery Charge Is free ")
  //   }
  //   else {
  //     setDeliverycharge("Your Delivery Charge Is 40 rs")
  //   }
  // }, [count])


  const [posts, setPosts] = useState([])


  const fetchdata = () => {

    fetch("https://jsonplaceholder.typicode.com/posts").then(rawdata => rawdata.json()).then((jasondata) => {
      if (JSON.stringify(jasondata) !== JSON.stringify(posts)) setPosts(jasondata)
    })
  }

  useEffect(() => {

    const Apirefresher = setInterval(fetchdata, 1000);

    return () => clearInterval(Apirefresher);


  }, [posts]);





  return (
    <>
      {/* <h1 >{count}</h1>
      <button onClick={() => setCount(count + 20)}>  +  </button>
      <button onClick={() => setCount(count - 20)}>  -  </button>
      <p>{Deliverycharge}</p> */}
      <Usereffunction />
      <div>{posts.length > 0 && posts.map((item) => <h1 key={item.id}> {item.title}</h1>)}</div >
    </>
  )
}

export default App
