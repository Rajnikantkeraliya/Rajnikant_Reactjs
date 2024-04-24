import { useState } from 'react'
import './Editmovieform.css'
import { CallApi } from '../../Util'
export default function Editmovieform({ Moviedata, setCurrentState }) {


    const [title, settitle] = useState(Moviedata.title)
    const [views, setviews] = useState(Moviedata.views)
    const [image, setimage] = useState(Moviedata.image)

    const [taskstatus, settaskstatus] = useState()

    const Editserverdata = () => {

        const updateddata = {
            title: title,
            views: views,
            image: image,
        }

        CallApi({
            Method: "PUT", requestbody: updateddata, callbackfunction: function (data) {
                if (data) {
                    settaskstatus(true)
                } else {
                    settaskstatus(false)
                }
            }, movieId: Moviedata.id
        })
    }

    return (
        <div className="div">
            <div className="container m-4 p-4 container_edit">
                <h1>Editing : {Moviedata.title}</h1>

                <div class="mb-3">
                    <label for="etxMovieTitle" className="form-label">Movie Title</label>
                    <input type="text" value={title} onChange={(e) => { settitle(e.target.value) }} className="form-control" id="etxMovieTitle" placeholder="Enter Movie Title" />
                </div>
                <div class="mb-3">
                    <label for="etxMovieViews" className="form-label">Movie Views</label>
                    <input type="text" value={views} onChange={(e) => { setviews(e.target.value) }} className="form-control" id="etxMovieViews" placeholder="Enter Movie Views" />
                </div>
                <div class="mb-3">
                    <label for="etxMovieImage" className="form-label">Movie Image</label>
                    <input type="text" value={image} onChange={(e) => { setimage(e.target.value) }} className="form-control" id="etxMovieImage" placeholder="Enter Movie Image URL" />
                </div>


                <button className="btn btn-danger m-2" onClick={Editserverdata} >Edit</button>
                <button className="btn btn-warning m-2" onClick={() => setCurrentState({ mode: "LIST" })}>Cancel</button>

                {taskstatus === true && <div class="alert alert-success" role="alert">
                    Data Updated !
                </div>}

                {taskstatus === false && <div class="alert alert-danger" role="alert">
                    Update failed !
                </div>}


            </div>
        </div>
    )
}


