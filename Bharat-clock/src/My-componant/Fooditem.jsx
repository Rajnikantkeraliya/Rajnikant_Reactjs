import "bootstrap/dist/css/bootstrap.min.css";
import Item from "./Item/Item";
import Foodinput from "./Foodinput/Foodinput";
import { useState } from "react";

export default function Fooditem({ itmess }) {

    // let Fooditem = ['Dal', 'Chana', 'Green Vagitebal', 'Salad', 'Roti', 'Milk', 'Ghee']



    return (
        <>



            <ul className="list-group">
                {itmess.map((item) => (
                    <Item key={item} Fooditem={item} handlebuybutton={() => console.log(`${item}Button`)}></Item>
                ))}
            </ul>

        </>
    )
}