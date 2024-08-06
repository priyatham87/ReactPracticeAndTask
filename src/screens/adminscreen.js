import withProfileData from "../hoc/profiledata";
import NavBar from "../navbar/navbar";

const AdminScreen=(prop)=>{
    const {username}=prop.data
    return(
        <>
        <NavBar/>
        <h2>welcome to AdminScreen page {username}...</h2>
        </>
    )
}
export default withProfileData(AdminScreen);