const Backendserverdata = " http://localhost:8000/Movie/";

const CallApi = ({ Method, requestbody, callbackfunction, movieId }) => {


    const option = {
        method: Method
    }
    if (Method === "POST" || Method === "PUT") {
        option.body = JSON.stringify(requestbody)
    }

    fetch(Backendserverdata + (movieId ? movieId : ""), option).then(rawdata => rawdata.json()).then(json => callbackfunction(json))


}

export { CallApi };