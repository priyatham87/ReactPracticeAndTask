import { useContext } from "react";
import NavBar from "../navbar/navbar";
import { DataContext } from "../App";

const BlogPage=()=>{
    const {username,changeUserName,counter,changeCounter}=useContext(DataContext)

    const nameChanger=()=>{
        changeUserName("priyatham")
    }

    const changeCounterHandler=()=>{
        changeCounter(1)

    }
    return(
        <>
        <NavBar/>
        <h2>welcome to Blog Page {username} {counter}</h2>
        <button onClick={nameChanger}>click to change name</button>
        <button onClick={changeCounterHandler}>click to change counter</button>
        </>
    )
}
export default BlogPage;