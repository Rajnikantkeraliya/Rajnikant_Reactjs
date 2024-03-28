import { useRef } from "react"
import Ccomp from "./Ccomp"
export default function Usereffunction() {


    const ref1 = useRef(null)
    const ref2 = useRef(null)
    const ref3 = useRef(null)

    return (
        <div>
            <input type="text" ref={ref1} />
            <input type="text" ref={ref2} />
            <Ccomp ref={ref3} />
            <button onClick={() => console.log(Number(ref1.current.value) + Number(ref2.current.value) + Number(ref3.current.value))}>Click Me</button>
        </div>

    )
}