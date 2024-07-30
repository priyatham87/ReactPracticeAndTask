import { useState } from "react"

function LoginForm () {

    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")

    const [userNameError, setUserNameError] = useState(null)
    const [passwordError, setPasswordError] = useState(null)

    const userNameHandler = (event) => {
        const userEnteredUserName = event.target.value;
        if (userEnteredUserName.length>15){
            setUserNameError("Invalid input please enter less than 15 characters")
        }
        else{
            setUserNameError(null)
            setUserName(userEnteredUserName)
            console.log(userName)
        }
    }
    
    const passwordHandler = (event) => {
        const userEnteredPassword = event.target.value;
        if(userEnteredPassword.length > 15){
            setPasswordError("Invalid input please enter less than 15 characters")
        }
        else{
            setPasswordError(null)
            setPassword(userEnteredPassword)
            console.log(password)   
        }
    }

    return (
        <div >
            <form style={{maxWidth:500}}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                        Email address
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        value={userName}
                        onChange={userNameHandler}
                    />
                    {userNameError && <span>Invalid input please enter less than 15 characters</span>}
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">
                        Password
                    </label>
                    <input
                        type="password"
                        className="form-control"
                        id="exampleInputPassword1"
                        value={password}
                        onChange={passwordHandler}
                    />
                    {passwordError && <span>{passwordError}</span>}
                </div>
                <button type="submit" className="btn btn-primary" on>
                    Submit
                </button>
            </form>

        </div>
    );

}

export default LoginForm