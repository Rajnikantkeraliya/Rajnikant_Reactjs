import image4 from './04.png';
import image5 from './05.png';
import image6 from './06.png';
import './product.css'

const LightboxComponent = () => {
    return (
        <div className="container">

        <div className="d-flex justify-content-center padding">
        <div className="col-lg-6 margin">
                <div className="prod1">
                    <h3>Living Room</h3>
                    <button>Shop Now</button>
                </div>
                <img
                src={image4}
                data-mdb-img="https://mdbcdn.b-cdn.net/img/Photos/Vertical/1.webp"
                alt="Dark Roast Iced Coffee"
                className="w-100 shadow-1 -strong rounded"
                />
          </div>
          <div className="col-lg-6 margin">
          <div className="prod2">
                    <h3>Bedroom</h3>
                    <button>Shop Now</button>
                </div>
            <img
              src={image5}
              data-mdb-img="https://mdbcdn.b-cdn.net/img/Photos/Slides/1.webp"
              alt="Table Full of Spices"
              className="w-100 mb-2 mb-md-4 shadow-1-strong rounded"
            />
             <div className="prod2">
                    <h3>Kitchen</h3>
                    <button>Shop Now</button>
                </div>
            <img
              src={image6}
              data-mdb-img={"https://mdbcdn.b-cdn.net/img/Photos/Square/1.webp"}
              alt="Coconut with Strawberries"
              className="w-100 shadow-1-strong rounded"
            />
          </div>
        </div>
      </div>

    );
  };

  export default LightboxComponent;