import LoginForm from "../login/loginform";
import NavigationBar from "../Navbar/NavBar";


const Login=()=>{
    return(
        <div >
        <NavigationBar/>
        <center>
            <h2>Login Screen</h2>
            <LoginForm/>
        </center>
        
        </div>
    )
}
export default Login;