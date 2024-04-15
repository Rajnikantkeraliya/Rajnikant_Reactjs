import { useState } from 'react'
import './Editmovieform.css'
import { CallApi } from '../../Util'

export default function Editmovieform({ moviedata, setCurrentState }) {
    const [title, setTitle] = useState(moviedata ? moviedata.title : "")
    const [views, setViews] = useState(moviedata ? moviedata.views : "")
    const [image, setImage] = useState(moviedata ? moviedata.image : "")
    const [taskStatus, setTaskStatus] = useState()

    const EditServerData = () => {
        if (!moviedata || !moviedata.id) {
            console.error("Movie data or ID is missing.");
            return;
        }

        const updatedData = {
            title: title,
            views: views,
            image: image,
        }

        CallApi({
            movieId: "661a261a075727fb8051f38e",
            Method: "PUT",
            requestbody: updatedData,
            callbackfunction: function (data) {
                if (data) {
                    setTaskStatus(true)
                } else {
                    setTaskStatus(false)
                }
            },
            movieId: moviedata.id
        })
    }

    return (
        <div className="div">
            <div className="container m-4 p-4 container_edit">
                <h1>Editing : {moviedata ? moviedata.title : ""}</h1>

                <div className="mb-3">
                    <label htmlFor="etxMovieTitle" className="form-label">Movie Title</label>
                    <input type="text" value={title} onChange={(e) => { setTitle(e.target.value) }} className="form-control" id="etxMovieTitle" placeholder="Enter Movie Title" />
                </div>
                <div className="mb-3">
                    <label htmlFor="etxMovieViews" className="form-label">Movie Views</label>
                    <input type="text" value={views} onChange={(e) => { setViews(e.target.value) }} className="form-control" id="etxMovieViews" placeholder="Enter Movie Views" />
                </div>
                <div className="mb-3">
                    <label htmlFor="etxMovieImage" className="form-label">Movie Image</label>
                    <input type="text" value={image} onChange={(e) => { setImage(e.target.value) }} className="form-control" id="etxMovieImage" placeholder="Enter Movie Image URL" />
                </div>

                <button className="btn btn-danger m-2" onClick={EditServerData} >Edit</button>
                <button className="btn btn-warning m-2" onClick={() => setCurrentState({ mode: "LIST" })}>Cancel</button>

                {taskStatus === true && <div className="alert alert-success" role="alert">
                    Data Updated !
                </div>}

                {taskStatus === false && <div className="alert alert-danger" role="alert">
                    Update failed !
                </div>}
            </div>
        </div>
    )
}
