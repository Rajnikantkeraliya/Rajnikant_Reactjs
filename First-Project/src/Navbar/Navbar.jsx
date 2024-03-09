import logo from './logo.png'
import './navbar.css'
function Navbar(){



        return(
            <nav className='navbar'>
                <div className="container  align-items-center">
                    <div className="d-flex padding ">
                        <div className="logo">
                         <img src={logo} alt="logo" />
                        </div>
                        <div className="menu">
                            <ul>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">Shop</a></li>
                                <li><a href="#">Product</a></li>
                                <li><a href="#">Contact Us</a></li>
                            </ul>
                        </div>
                       {/*  <div className="media">
                                <ul>
                                    <li><a href="#"><i class="fa-solid fa-magnifying-glass"></i></a></li>
                                </ul>
                        </div> */}
                    </div>
                </div>
            </nav>
        )
}
export default Navbar;