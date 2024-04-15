export default function Currenttime() {


    let time = new Date()
    return (
        <div className="currenttime">
            <h2>This is The Current Time : {time.toLocaleDateString()}-{""}{time.toLocaleTimeString()}</h2>
        </div>

    )


}