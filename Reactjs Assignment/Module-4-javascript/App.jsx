import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'




function App() {
  let [data, setdata] = useState([])
  let Clickbutton = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(Response => Response.json())
      .then(Storedata => { console.log(Storedata); setdata(Storedata) })
  }


  return (
    <>

      <button className='btn btn-success m-2' onClick={Clickbutton}>Click Here</button>
      {data.length == 0 && <p>No Data Found</p>}
      {data.length != 0 && (
        <>{
          data.map(posts => (
            <>
              <div className="par">
                <p>Id={posts.id}</p>
                <p>Title={posts.title}</p>
                <p>Body={posts.body}</p>
              </div>
            </>
          ))}</>
      )}
    </>
  )
}

export default App



