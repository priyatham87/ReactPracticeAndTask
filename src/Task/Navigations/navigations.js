import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../screens/mainscreen";
import Menu from "../screens/menuscreen";
import Location from "../screens/location";
import Registration from "../screens/registration";
import Login from "../screens/login";

const Navigations=()=>{
    return(
        <>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Main/>}></Route>
            <Route path="/menu" element={<Menu/>}/>
            <Route path="/location" element={<Location/>}/>
            <Route path="login" element={<Login/>}/>
            <Route path="/registration" element={<Registration/>}/>
        </Routes>
        </BrowserRouter>
        </>
    )
}
export default Navigations;