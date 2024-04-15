import { CallApi } from "../../Util"
import './Movie.css';

export default function Movie({ moviedata, setCurrentState, refreshmovielist }) {

    const Deletemovie = () => {
        CallApi({
            Method: "DELETE",
            callbackfunction: function () {
                refreshmovielist();
            },
            movieId: moviedata.id
        });
    };

    return (
        <>
            <div className="card card_movie">
                <img src={moviedata.image} className="card-img-top movie_img" alt="Movie Link" />
                <div className="card-body">
                    <h5 className="card-title">{moviedata.title}</h5>
                    <p className="card-text">{moviedata.views}</p>
                    <button onClick={() => setCurrentState({ mode: "EDIT", moviedata: moviedata })} className="btn btn-primary">Edit</button>
                    <button className="btn btn-danger margin_left" onClick={() => Deletemovie()}>Delete</button>
                </div>
            </div>
        </>
    );
}
