import './Mylist.css'
import "bootstrap/dist/css/bootstrap.min.css"
export default function MyList({ data }) {

    console.log(data)

    if (!data) {
        return <div>No data available</div>;
    }

    return (

        <div className="card card_container">
            <img className="card-img-top" src={data.image} alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">Title: {data.title}</h5>
                <p className="card-text">Views: {data.views}</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>

    );
}
