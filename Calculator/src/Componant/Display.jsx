import styels from './Display.module.css'
export default function Display({ displayvalue }) {

    return (
        <div className={styels.display}>
            <input type="text" value={displayvalue} readOnly />
        </div>
    )



}