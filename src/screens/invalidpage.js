import { useNavigate } from "react-router-dom";

const InvalidPage=()=>{
    const navigate = useNavigate();

  const navigateToHome = () => {
    navigate("/");
  };
    return(
        <>
        <h2>Invalid url 404 error</h2>
        <button onClick={navigateToHome}> Go to Home </button>
        </>
    )
}
export default InvalidPage;