import { useContext } from "react";
import NavBar from "../navbar/navbar";
import { DataContext } from "../App";

const BlogPage=()=>{
    const {username,changeUserName}=useContext(DataContext)

    const nameChanger=()=>{
        changeUserName("priyatham")
    }
    return(
        <>
        <NavBar/>
        <h2>welcome to Blog Page {username}</h2>
        <button onClick={nameChanger}>click to change name</button>
        </>
    )
}
export default BlogPage;