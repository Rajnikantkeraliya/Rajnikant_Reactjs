import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Heading from '../Heading/Heading';
import Movielist from '../Movie/Movielist/Movielist';
import Moviemanagement from '../Movie/Moviemanagement/Moviemanagement';



function App() {


  return (
    <>
      <Heading />
      <Moviemanagement />
    </>
  )
}

export default App
