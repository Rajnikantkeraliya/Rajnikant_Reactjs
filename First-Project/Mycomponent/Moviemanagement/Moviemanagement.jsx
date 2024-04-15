import Movielist from "../Movielist/Movielist"
import Editmovieform from "../Editmovieform/Editmovieform"
import Addmovieform from "../AddMovieform/Addmovieform"
import { useState } from "react"
export default function Moviemanagement() {


    const [CurrentState, setCurrentState] = useState({ mode: "LIST" })

    const componentselector = {
        "LIST": <Movielist setCurrentState={setCurrentState} />,
        "EDIT": <Editmovieform setCurrentState={setCurrentState} Moviedata={CurrentState.Moviedata} />,
        "ADD": <Addmovieform setCurrentState={setCurrentState} />

    }

    return (componentselector[CurrentState.mode]);


}