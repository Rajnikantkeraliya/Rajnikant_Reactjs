import { forwardRef } from "react"

// eslint-disable-next-line react/display-name
const Ccomp = forwardRef(({ value, onchage }, ref) => {
    return (
        <input type="text" ref={ref} />
    )
})
export default Ccomp

