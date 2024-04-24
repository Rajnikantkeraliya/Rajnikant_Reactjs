import { useSelector } from 'react-redux';
import styles from './Cart.module.css'
import { AiOutlineShoppingCart } from "react-icons/ai";


export default function Cart() {

    const cart = useSelector(state => state.cart)
    console.log("Called")

    return (
        <div>
            <AiOutlineShoppingCart className={styles.cartIcon} />
            <h1 className='p-4'>{cart}</h1>
        </div>
    )
}