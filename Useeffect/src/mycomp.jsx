import { useEffect, useState } from "react"
export default function mycomp() {

    const [count, setCount] = useState(0)

    const [Deliverycharge, setDeliverycharge] = useState()

    useEffect(() => {
        if (count <= 0) {
            setDeliverycharge("")
        }
        else if (count > 100) {
            setDeliverycharge("Your delivery Charge Is free ")
        }
        else {
            setDeliverycharge("Your Delivery Charge Is 40 rs")
        }
    }, [count])

    return (
        <>
            <h1 >{count}</h1>
            <button onClick={() => setCount(count + 20)}>  +  </button>
            <button onClick={() => setCount(count - 20)}>  -  </button>
            <p>{Deliverycharge}</p>

        </>
    )

}