import {BrowserRouter,Route,Routes} from "react-router-dom"
import HomePage from "../screens/homepage";
import AboutPage from "../screens/aboutpage";
import SettingPage from "../screens/settingspage";
import BlogPage from "../screens/blogpage";
import InvalidPage from "../screens/invalidpage";
import UserScreen from "../screens/userscreen";
import AdminScreen from "../screens/adminscreen";
import RecipePage from "../screens/recipescreen";
import RecipeDetails from "../screens/recipedetails";
import DoctorScreen, { NewDoctors, OldDoctors } from "../screens/doctorscreen";
import DropDownList from "../dropdownlist/dropdown";
import RecipeDropDownList from "../screens/recipedropdownlist";
import UseReducerTicket from "../screens/UseReducer";
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
            <Route path="recipe" element={<RecipePage/>}/>
            
            <Route path="doctors" element={<DoctorScreen/>}>
            <Route path="new" element={<NewDoctors/>}/>
            <Route path="old" element={<OldDoctors/>}/>
            </Route>

            <Route path="dropdown" element={<DropDownList/>}/>

            <Route path="recipedropdown" element={<RecipeDropDownList/>}/>

            <Route path="usereducer" element={<UseReducerTicket/>}/>

            {/* dynamic routes */}
            <Route path="recipe/:cuisine/:recipeId" element={<RecipeDetails/>} />
        </Routes>
        </BrowserRouter>
    )
}
export default NavigationStack;