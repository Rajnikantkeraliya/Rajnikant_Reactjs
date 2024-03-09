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

  let tital, Id, Body;
  let api = "https://jsonplaceholder.typicode.com/posts"

  let submitformdata = (event) => {

    event.preventDefault();

    fetch(api,
      {
        method: "post",
        body: JSON.stringify({ tital: tital, Id: Id, Body: Body }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        }
      })
      .then((response) => response.json())
      .then((json) => console.log(json));
  }


  return (
    <>

      <form>

        <input className='m-2' type="text" placeholder='Tital' onChange={(event) => tital = event.target.value} />
        <input className='m-2' type="text" placeholder='Id' onChange={(event) => Id = event.target.value} />
        <input className='m-2' type="text" placeholder='Body' onChange={(event) => Body = event.target.value} />
        <input className='btn btn-primary' type="button" value="Post data" onClick={submitformdata} />


      </form>



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



