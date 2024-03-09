import { useState } from "react"
import { requestapiserver } from "../Fetch"
import styles from './Datalist.module.css'
export default function Datalist() {


    let [postdata, setPostdata] = useState([])

    let refrashdata = (data) => {

        setPostdata(data);

    }

    requestapiserver("photos", refrashdata)


    return (
        <div>

            {postdata.length == 0 && <h2>Data Not Available</h2>}
            {postdata.length != 0 && postdata.map((Data) => {
                return <div className={styles.item}> {Data.userId} {Data.id} {Data.title} {Data.body} </div>
            })}

        </div>
    )

}