const Backendserverdata = "http://localhost:8000/movies/";


const CallApi = ({ method, Requestbody, Callbackfunction, movieid }) => {

    const option = {
        method: method,
    }
    if (method === "POST" || method === "PUT") {
        option.body = JSON.stringify(Requestbody)
    }

    fetch(Backendserverdata + (movieid ? movieid : ""), option).then(rawdata => rawdata.json()).then(json => Callbackfunction(json))
}
export { CallApi }