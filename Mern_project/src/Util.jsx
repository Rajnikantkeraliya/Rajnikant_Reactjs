const Backendserverdata = " http://localhost:3000/Movie/";





const CallApi = ({ Method, requestbody, callbackfunction, movieId } = {}) => {


    const option = {
        method: Method
    }
    if (Method === "POST" || Method === "PUT") {
        option.body = JSON.stringify(requestbody)
    }

    


}

export { CallApi };