import style from './Product3.module.css'
export default function Product3() {

    const Addcombotocart = () => {

    }

    return (
        <div class="card" className={style.cart_width}>
            <img className="" src="../../../Assets/code.png" alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title p-3">Samsung Galaxy s23Ultra + Samsung Galaxy Fold</h5>
                <p className="card-text p-3">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary m-3" onClick={Addcombotocart}>Add To Cart</a>
            </div>
        </div>
    )

}