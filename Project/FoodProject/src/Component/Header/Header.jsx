import "../Header/Header.css"
import { IoMdGitCompare } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import logo from '../../assets/Image/logo.png'
import Select from "../Selectdrop/Select";
import { useEffect, useState } from "react";
import axios from 'axios'
import { MdLocationOn } from "react-icons/md";
import { GoGitCompare } from "react-icons/go";
import { FaRegHeart } from "react-icons/fa6";
import { TiShoppingCart } from "react-icons/ti";
import { IoPerson } from "react-icons/io5";
export default function Header() {

    const [categories, setcategories] = useState([
        "Baking material",
        "Clothing & beauty",
        "Fresh Fruit",
        "Milks and Dairies",
        "Vegetables",
        "Bread and Juice",
        "Dals of The Day",
        "Fresh Seafood",
        "Uncategorized",
        "Wines & Drinks"
    ])

    const contrylist = [];

    useEffect(() => {
        getcontry('https://countriesnow.space/api/v0.1/countries/')
    }, [])

    const getcontry = async (url) => {
        try {
            await axios.get(url).then((responce) => {
                if (responce !== null) {
                    // console.log(responce.data.data)
                    responce.data.data.map((item, index) => {
                        contrylist.push(item.country)
                    })

                }
            })
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>

            <header>
                <div className="container-fluid">
                    <div className="row align">
                        <div className="col-sm-2">
                            <img src={logo} alt="" />
                        </div>

                        <div className="col-sm-5">
                            <div className="headersearch d-flex align-items-center">
                                <Select data={categories} placeholder="All Cotegory" icon={false} />
                                <div className="search">
                                    <input type="text" placeholder="Search for Item...." />
                                    <FaSearch className="searchicon curser" />
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-5 d-flex align-items-center">
                            <div className="ml-auto d-flex  align-items-center">
                                <div className="contrywrapper">
                                    <Select data={contrylist} placeholder="Your Location" icon={<MdLocationOn style={{ margin: "5px" }} />} />
                                </div>

                                <ul className="list list-inline mb-0 headertabs d-flex">
                                    <li className="list-inlien-item curser">
                                        <span className="compare"><GoGitCompare />Compare</span>
                                    </li>
                                    <li className="list-inlien-item curser">
                                        <span className="compare"><FaRegHeart /> Wishlist</span>
                                    </li>
                                    <li className="list-inlien-item curser">
                                        <span className="compare"><TiShoppingCart /> Cart</span>
                                    </li>
                                    <li className="list-inlien-item curser">
                                        <span className="compare"><IoPerson /> Acount</span>
                                    </li>
                                </ul>
                            </div>

                        </div>

                    </div>
                </div>
            </header>
        </>
    )
}