
import withProfileData from "../hoc/profiledata";
import NavBar from "../navbar/navbar";

const AboutPage=(prop)=>{
    const {name}=prop.info
    const {username}=prop.data
    return(
        <>
        <NavBar/>
        <h2>welcome to About Page {name}</h2>
        {Object.keys(prop.data).length > 0 ? (
        <h3> Good morning {username}</h3>
      ) : (
        <h3>Good morning user</h3>
      )}
     
        </>
    )
}
export default withProfileData(AboutPage);