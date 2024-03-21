import EditMovieform from "../Editmovieform/EditMovieform"
import AddMovieform from "../AddMovieform/AddMovieform"
import Movielist from "../Movielist/Movielist"
import { useState } from "react"
export default function Moviemanagement() {

    const [currentstate, setcurrentstate] = useState({ mode: "LIST" })

    const componentselector = {

        "LIST": <Movielist setcurrentstate={setcurrentstate} />,
        "EDIT": <EditMovieform setcurrentstate={setcurrentstate} moviedata={currentstate.moviedata} />,
        "ADD": <AddMovieform setcurrentstate={setcurrentstate} />


    }


    return (componentselector[currentstate.mode])


}