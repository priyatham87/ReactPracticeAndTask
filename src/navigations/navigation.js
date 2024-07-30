import {BrowserRouter,Route,Routes} from "react-router-dom"
import HomePage from "../screens/homepage";
import AboutPage from "../screens/aboutpage";
import SettingPage from "../screens/settingspage";
import BlogPage from "../screens/blogpage";
import InvalidPage from "../screens/invalidpage";
import UserScreen from "../screens/userscreen";
import AdminScreen from "../screens/adminscreen";
const NavigationStack=()=>{
    return(
        <BrowserRouter>
        <Routes>
            {/* static routes */}
            <Route path="/" element={<HomePage/>}></Route>
            <Route path="/about" element={<AboutPage/>}/>
            <Route path="/settings" element={<SettingPage/>}/>
            <Route path="/blog" element={<BlogPage/>}/>
            <Route path="*" element={<InvalidPage/>}/>
            <Route path="user" element={<UserScreen/>}/>
            <Route path="user/*" element={<UserScreen/>} />
            <Route path="user/admin" element={<AdminScreen/>} />

            {/* dynamic routes */}
            <Route path="users/:userId" element={<UserScreen />} />
        </Routes>
        </BrowserRouter>
    )
}
export default NavigationStack;