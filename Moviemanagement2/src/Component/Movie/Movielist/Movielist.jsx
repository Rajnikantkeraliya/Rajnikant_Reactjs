import { useState } from "react"
import { CallApi } from "../../../Util"
import './Movielist.css';
import Movie from "../Movie/Movie";

export default function Movielist({ setcurrentstate }) {

    const [AllMovie, setAllMovie] = useState([])

    const Loaddata = (moviedata) => {
        if (moviedata) {
            setAllMovie(moviedata)
        }
    }

    if (AllMovie.length === 0) {
        CallApi({ method: "GET", Callbackfunction: Loaddata })
    }


    return (

        <div className="Card_container">
            {AllMovie.length === 0 && <div className="alert alert-danger" role="alert">
                Data not Found!
            </div>}
            {AllMovie.length > 0 && AllMovie.map((moviedata) => {
                return <Movie key={moviedata.id} moviedata={moviedata} setcurrentstate={setcurrentstate} />

            })}
        </div>

    )
}