import styles from './Foodinput.module.css'
export default function Foodinput({ handleonkeydown }) {




    return (

        <>
            <div>
                <input className={styles.input} type="text" placeholder="Enter Food Item Here"
                    onKeyDown={handleonkeydown}
                />
            </div>
        </>

    )

}