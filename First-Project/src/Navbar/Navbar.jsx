import logo from './logo.png'
import './navbar.css'
function Navbar() {



    return (
        <div className="container  align-items-center">
            <nav class="navbar  navbar-expand-lg navbar-light bg-light">

                <a class="navbar-brand" href="#"></a>

                <div className="d-flex padding ">
                    <div className="logo">
                        <img src={logo} alt="logo" />
                    </div>
                    <div class="collapse navbar-collapse menu" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item active">
                                <a class="nav-link" href="#">Home <span class="sr-only"></span></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Shop</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Product</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Contact us</a>
                            </li>
                        </ul>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                    </div>

                </div>
            </nav>
        </div>

    )
}
export default Navbar;