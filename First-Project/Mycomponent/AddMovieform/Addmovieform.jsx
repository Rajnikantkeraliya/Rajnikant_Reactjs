import { useState } from 'react'
import './Addmovie.css'
import { CallApi } from '../../Util'

export default function Addmovieform({ Moviedata, setCurrentState }) {

    const [title, settitle] = useState("")
    const [views, setviews] = useState("")
    const [image, setimage] = useState("")

    const [taskstatus, settaskstatus] = useState()


    const Addserverdata = () => {

        const Newmoviedata = {
            title: title,
            views: views,
            image: image,
        }

        CallApi({
            Method: "POST", requestbody: Newmoviedata, callbackfunction: function (data) {
                if (data) {
                    settaskstatus(true)
                    settitle("")
                    setviews("")
                    setimage("")

                } else {
                    settaskstatus(false)
                }
            }
        })
    }


    return (
        <div className="container m-4 p-4 container_add">
            <h1>Add Data :</h1>

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


            <button className="btn btn-danger m-2" onClick={Addserverdata} >Add</button>
            <button className="btn btn-warning m-2" onClick={() => setCurrentState({ mode: "LIST" })}>Cancel</button>

            {taskstatus === true && <div class="alert alert-success" role="alert">
                Data Added !
            </div>}

            {taskstatus === false && <div class="alert alert-danger" role="alert">
                Add failed !
            </div>}


        </div>
    )
}