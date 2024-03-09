import './Header.css';
function Header(){

        return(
            <header className='header padding'>
                <div className="container">
                    <div className="d-flex align-items-center">
                        <div className="text">
                            <h6>30% off storewide — Limited time! </h6>
                        </div>
                        <div className="link">
                            <ul>
                                <li><a href="#">Shop Now</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>

        )
}
export default Header;