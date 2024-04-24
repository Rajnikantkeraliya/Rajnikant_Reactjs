import { Provider } from 'react-redux'
import './App.css'
import Product1 from './component/Product 1/Product1'
import 'bootstrap/dist/css/bootstrap.min.css'
import Product2 from './component/Product 2/Product2'
import Product3 from './component/Product 3/Product3'
import { store } from './component/Redux'
import Cart from '../src/component/Cart/cart'

function App() {

  return (

    <Provider store={store}>
      <div className='row'>
        <Cart />
        <Product1 />
        <Product2 />
        <Product3 />

      </div>
    </Provider>

  )
}

export default App
