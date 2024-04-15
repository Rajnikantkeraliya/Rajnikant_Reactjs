import styles from './Item.module.css'
let Item = ({ Fooditem, handlebuybutton }) => {

    /*    const handlebuybuttononclick = (event) => {

           console.log(event)
           console.log(`${Fooditem} Button`)

       } */
    return (

        <li className={`${styles["kg-item"]} list-group-item`}> {Fooditem}
            <button className={`${styles.buttons} btn btn-info`} onClick={handlebuybutton}>Buy</button>
        </li >
    )

}

export default Item;