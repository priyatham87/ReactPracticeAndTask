import { useContext } from "react";
import NavBar from "../navbar/navbar";
import {DataContext} from "../App"




const HomePage=()=>{
    const globalData=useContext(DataContext)
    return(
        <>
        <NavBar/>
        <h2>welcome to home page {globalData.username}</h2>
        
    
        </>
    )
}
export default HomePage;