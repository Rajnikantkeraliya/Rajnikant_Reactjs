import { useState, useEffect } from "react";
import Movie from "../movie/Movie";
import './Movielist.css'
import { CallApi } from "../../Util";

export default function Movielist({ setCurrentState }) {
    const [allMovies, setAllMovies] = useState(null);

    useEffect(() => {
        refreshMovieList();
    }, []);

    const refreshMovieList = () => {
        CallApi({ Method: "GET", callbackfunction: movieloadData });
    };

    const movieloadData = (movieData) => {
        if (movieData) {
            setAllMovies(movieData.Data);
        }
    };

    return (
        <>
            <button type="button" onClick={() => setCurrentState({ mode: "ADD" })} className="btn btn-primary m-3">Add New Movie</button>
            <div className="container_movie_list">
                {allMovies === null &&
                    <div className="alert alert-warning" role="alert">
                        No Movies Data Found
                    </div>
                }
                {allMovies && allMovies.map((moviedata) => (
                    <Movie key={moviedata.id} setCurrentState={setCurrentState} moviedata={moviedata} />
                ))}
            </div>
        </>
    );
}
