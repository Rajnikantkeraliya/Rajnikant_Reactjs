import { useState } from "react";
import Movie from "../movie/Movie";
import './Movielist.css'
import { CallApi } from "../../Util";
export default function Movielist({ setCurrentState }) {

    const [AllMovies, setAllMovies] = useState([])

    const Movieloaddata = (Moviedata) => {
        if (Moviedata) {
            setAllMovies(Moviedata)
        }
    }

    const refreshmovielist = () => {
        CallApi({ Method: "GET", callbackfunction: Movieloaddata })

    }

    // setInterval(refreshmovielist, 1000);


    if (AllMovies.length === 0) {
        refreshmovielist()
    }

    return (
        <>
            <div className="container">
                <button onClick={() => setCurrentState({ mode: "ADD" })} type="button" class="btn btn-primary mt-5">Add Movie</button>
            </div>
            <div className="container container_list2">
                {AllMovies.length === 0 && <div class="alert alert-danger" role="alert">
                    A simple danger alert—check it out!
                </div>}

                {AllMovies.length > 0 && AllMovies.map((Moviedata) => {
                    return <Movie key={Moviedata.id} Moviedata={Moviedata} setCurrentState={setCurrentState} refreshmovielist={refreshmovielist} />
                })}
            </div>
        </>
    )


}