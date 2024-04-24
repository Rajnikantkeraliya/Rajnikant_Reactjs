import { createStore } from 'redux'
import Cart from '../component/Cart/cart'


export const initialstate = {

    cart: 0
}

//Action

export const Action_add_to_cart = (num) => {
    return { type: "Action_add_to_cart", Noofitems: num }
}


export const Dispatcher = (state = initialstate, Action) => {


    switch (Action.type) {
        case "Action_add_to_cart":
            state = { ...state, cart: state.cart + Action.Noofitems }
            break;

        default:
            return state
            break;
    }

}
export const store = createStore(Dispatcher)