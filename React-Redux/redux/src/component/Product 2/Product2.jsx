import style from './Product2.module.css'
export default function Product2() {

    const AddS23ultraMobile = () => {

    }

    return (
        <div class="card" className={style.cart_width}>
            <img className="" src="../../../Assets/images.jpg" alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title p-3">Samsung Galaxy s23Ultra</h5>
                <p className="card-text p-3">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary m-3" onClick={AddS23ultraMobile}>Add To Cart</a>
            </div>
        </div>
    )

}