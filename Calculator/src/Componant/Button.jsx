import styels from './Button.module.css'
export default function Button({ onButtonClick }) {

    const buttoNames = ['AC', 'CE', '%', '/', '7', '8', '9', '*', '4', '5', '6', '-', '1', '2', '3', '+', '0', '00', '.', '=']

    return (
        <>
            <div className={styels.buttoncontainer}>
                {buttoNames.map((buttoNames) => (<button className={styels.button} onClick={() => onButtonClick(buttoNames)}>{buttoNames}</button>))}
            </div>
        </>
    )


}