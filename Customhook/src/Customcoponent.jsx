import { useState, useEffect } from "react";
import MyList from "./Mylist";

export default function CustomComponent() {
    const [movieData, setMovieData] = useState(null);

    const apiUrl = "http://localhost:3000/Movie/";

    useEffect(() => {
        fetch(apiUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch movie data');
                }
                return response.json();
            })
            .then(data => {
                setMovieData(data.Data);
            })
            .catch(error => {
                console.error('Error fetching movie data:', error);
            });
    }, []);

    return (
        <div>
            {movieData === null && (
                <div className="alert alert-info" role="alert">
                    Loading...
                </div>
            )}

            {movieData && movieData.map((data, index) => (
                <MyList key={index} data={{ ...data }} />
            ))}
        </div>
    );
}

