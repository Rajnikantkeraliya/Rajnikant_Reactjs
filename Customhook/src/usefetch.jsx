import { useState } from "react"

export default function usefetch(parameter) {


    const [data, setData] = useState(null)

    let apiUrl = "https://jsonplaceholder.typicode.com/"

    //user End Point
    if (parameter.endpoint) {
        apiUrl = apiUrl + parameter.endpoint
    }

    //User Select ID or Query parameter
    if (parameter.Queryparameter) {
        apiUrl = apiUrl + parameter.Queryparameter
    }

    //Option For Fetch

    const fetchOption = {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: parameter.method ? parameter.method : "GET"
    }

    if (parameter.databody) {
        fetchOption.body = JSON.stringify(fetchOption.databody)
    }

    fetch(apiUrl, fetchOption)
        .then(rawdata => rawdata.json())
        .then((jsondata) => {
            if (data != jsondata)
                setData(jsondata)
        })
        .catch(e => { console.log(e) })



    return data

}