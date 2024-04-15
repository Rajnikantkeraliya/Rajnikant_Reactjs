import { useState } from 'react'
import '../Selectdrop/select.css'
import { MdArrowDropDown } from "react-icons/md";
import { ClickAwayListener } from '@mui/base/ClickAwayListener';
export default function Select(props) {

    const [isopen, setIsopen] = useState(false)
    const [selectindex, setselectindex] = useState(0)
    const [selectitem, setselectitem] = useState(props.placeholder)

    function toggleSelect() {
        setIsopen(!isopen);
        console.log("Acctive")
    }

    // Function to handle selection of an item and close the dropdown
    function handleSelect(index, item) {
        setselectindex(index);
        setIsopen(false);
        setselectitem(item)
        console.log("Open Page")
    }

    return (

        <>
            <ClickAwayListener onClickAway={() => setIsopen(false)}>
                <div className="selectdrop curser position-relative">
                    {props.icon}
                    <span className='toggleselect' onClick={toggleSelect}>{selectitem} <MdArrowDropDown className='' /></span>

                    {isopen === true &&
                        <div className="selectdropdown">
                            <div className="searchfield">
                                <input type="text" placeholder='search here...' />
                            </div>
                            <ul className='searchresult'>
                                <li onClick={() => handleSelect(0, props.placeholder)} className={`${selectindex === 0 ? "active" : ""}`}>{props.placeholder}</li>

                                {props.data.map((item, index) => {
                                    return (
                                        <li onClick={() => handleSelect(index + 1, item)} className={`${selectindex === index + 1 ? "active" : ""}`}>{item}</li>
                                    )
                                })}

                            </ul>
                        </div>
                    }
                </div>
            </ClickAwayListener>
        </>

    )
}