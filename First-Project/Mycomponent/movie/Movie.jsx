import { CallApi } from '../../Util';
import './Movie.css';

export default function Movie({ Moviedata, setCurrentState, refreshmovielist }) {


    const Deletemovie = () => {

        CallApi({
            Method: "DELETE", callbackfunction: function () {
                refreshmovielist()
            }, movieId: Moviedata.id
        })

    }


    return (
        <>


            <div className="card container_list2">
                <img src={Moviedata.image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{Moviedata.title}</h5>
                    <p className="card-text">{Moviedata.views}</p>
                    <button onClick={() => setCurrentState({ mode: "EDIT", Moviedata: Moviedata })} className="btn btn-primary">Edit</button>
                    <button className="btn btn-danger m-2" onClick={Deletemovie}>Delete</button>
                </div>
            </div>
        </>
    );
}
