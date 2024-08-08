import { useContext } from "react";
import NavBar from "../navbar/navbar";
import {DataContext} from "../App"
import FakeStoreApi from "../fakestore/fakestore";




const HomePage=()=>{
    const globalData=useContext(DataContext)
    return(
        <>
        <NavBar/>
        <h2>welcome to home page {globalData.username}  {globalData.counter}</h2>
        <FakeStoreApi/>
        
    
        </>
    )
}
export default HomePage;