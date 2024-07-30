import { Link } from "react-router-dom";

const InvalidPage=()=>{
    return(
        <>
        <h2>Invalid url 404 error</h2>
        <button>
            <Link to={"/"}>Go to Home</Link>
        </button>
        </>
    )
}
export default InvalidPage;