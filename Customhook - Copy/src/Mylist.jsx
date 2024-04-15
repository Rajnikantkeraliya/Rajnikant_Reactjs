import usefetch from "./usefetch";

export default function Mylist() {


    const commentdata = usefetch(
        {
            endpoint: "comments",
        })



    return (

        <div>
            {commentdata == null && "Loading....."}
            {commentdata != null && commentdata.map((item) => {
                return <h1>{item.name}</h1>
            })}
        </div>



    )
}