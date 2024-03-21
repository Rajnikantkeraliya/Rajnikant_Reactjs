import './Movie.css'
export default function Movie({ moviedata, setcurrentstate }) {


    return (

        <div className="card card_container">
            <img src={moviedata.image} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{moviedata.title}</h5>
                <p className="card-text">{moviedata.views}</p>
                <button onClick={() => setcurrentstate({ mode: "EDIT", moviedata: moviedata })} className="btn btn-primary m-2">Edit</button>
                <button className="btn btn-danger m-2">Delete</button>
            </div>
        </div>
    )
}
