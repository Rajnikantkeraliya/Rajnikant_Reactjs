class Apimanager {

    isprogress = true;
    data = null;

    dofetch = async function () {
        const rawdata = await fetch("https://jjsonplaceholder.typicode.com/posts");
        const jsondata = await rawdata.json()
        return jsondata;
    }
    start = function () {
        if (this.isprogress) {
            throw this.dofetch()
                .then((result) => {
                    this.isprogress = false
                    this.data = result
                },
                    (error) => {
                        this.isprogress = false
                        this.data = error
                    })
        }
        else {
            if (this.data instanceof Error) {
                throw this.data
            }
            else {
                return this.data
            }
        }
    }

}

const x = new Apimanager()

export default function Lasycomponent() {
    const result = JSON.stringify(x.start())
    return (
        <h1>{result}</h1>
    )
}