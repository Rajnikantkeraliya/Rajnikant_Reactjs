import { useDispatch } from 'react-redux'
import style from './Product1.module.css'
import { Action_add_to_cart } from '../Redux'
export default function Product1() {

    const dispatch = useDispatch()

    const AddFoldMobile = () => {

        dispatch(Action_add_to_cart(1))

    }


    return (
        <div class="card" className={style.cart_width}>
            <img className="" src="../../../Assets/images (1).jpg" alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title p-3">Samsung Galaxy Fold</h5>
                <p className="card-text p-3">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary m-3" onClick={AddFoldMobile}>Add To Cart</a>
            </div>
        </div>
    )

}