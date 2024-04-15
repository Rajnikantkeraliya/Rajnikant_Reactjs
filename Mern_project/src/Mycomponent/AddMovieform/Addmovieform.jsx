import { useState } from 'react';
import './Addmovie.css';
import { CallApi } from '../../Util';

export default function Addmovieform({ setCurrentState }) {
    const [title, setTitle] = useState('');
    const [views, setViews] = useState('');
    const [image, setImage] = useState('');
    const [taskStatus, setTaskStatus] = useState(null);

    const addServerData = () => {
        const newMovieData = {
            title: title,
            views: views,
            image: image
        };

        // Make sure all fields are filled before sending the request
        if (title && views && image) {
            CallApi({
                Method: 'POST',
                requestbody: newMovieData,
                callbackfunction: (data) => {
                    if (data) {
                        setTaskStatus(true);
                        setTitle('');
                        setViews('');
                        setImage('');
                    } else {
                        setTaskStatus(false);
                    }
                }
            });
        } else {
            // Handle case where not all fields are filled
            alert('Please fill all fields.');
        }
    };

    return (
        <div className="container m-4 p-4 container_add">
            <h1>Add Data:</h1>

            <div className="mb-3">
                <label htmlFor="etxMovieTitle" className="form-label">Movie Title</label>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="form-control" id="etxMovieTitle" placeholder="Enter Movie Title" />
            </div>
            <div className="mb-3">
                <label htmlFor="etxMovieViews" className="form-label">Movie Views</label>
                <input type="text" value={views} onChange={(e) => setViews(e.target.value)} className="form-control" id="etxMovieViews" placeholder="Enter Movie Views" />
            </div>
            <div className="mb-3">
                <label htmlFor="etxMovieImage" className="form-label">Movie Image</label>
                <input type="text" value={image} onChange={(e) => setImage(e.target.value)} className="form-control" id="etxMovieImage" placeholder="Enter Movie Image URL" />
            </div>

            <button className="btn btn-danger m-2" onClick={addServerData}>Add</button>
            <button className="btn btn-warning m-2" onClick={() => setCurrentState({ mode: "LIST" })}>Cancel</button>

            {taskStatus === true && <div className="alert alert-success" role="alert">
                Data Added Successfully!
            </div>}

            {taskStatus === false && <div className="alert alert-danger" role="alert">
                Failed to Add Data!
            </div>}
        </div>
    );
}
