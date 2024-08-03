import { useState } from "react";
import './loginform.css'

const LoginForm=()=>{
    const[userName,setUserName]=useState("")

    const[password,setPassword]=useState("")

    const[userNameError,setUserNameError]=useState("")

    const[passwordError,setPasswordError]=useState("")

    const [data,setData]=useState([])



    const userNameHandler=(event)=>{
       const userEnterName=event.target.value;
        setUserName(userEnterName)
        if(userEnterName.length>15)
        {
            setUserNameError("Invalid input, please enter less than 15 characters")
        }
        else
        {
            setUserNameError("")
        }
    }

    const passwordHandler=(event)=>{
        const userEnteredPassword=event.target.value
        setPassword(userEnteredPassword)
        if(userEnteredPassword.length < 6)
        {
            setPasswordError("Password must be at least 6 characters long")
        }
        else
        {
            setPasswordError("")
        }
    }

    const submitHandler=async(event)=>{
        event.preventDefault();
        if(userNameError|| passwordError)
        {
            alert("Please fix the errors before submitting");
            return;
        }

        try{
            const response=await fetch('https://dummyjson.com/auth/login',{
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    username: userName,
                    password: password,
            }),
        });
        const finalResponse =await response.json()
        console.log(finalResponse);
        setData([...data, finalResponse]);
            setUserName("");
            setPassword("");
        }
        catch(err){
        }

    }

    return(
        <div className="form-container">
            <form style={{maxWidth:500}} onSubmit={submitHandler}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                        Email address
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                         placeholder="Enter email"
                         value={userName}
                         onChange={userNameHandler}   
                    />
                </div>
                {userNameError && <span className="error-message">{userNameError}</span>}
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">
                        Password
                    </label>
                    <input
                        type="password"
                        className="form-control"
                        id="exampleInputPassword1"
                        placeholder="Enter password"
                        value={password}
                        onChange={passwordHandler}
                    />
                    {passwordError && <span className="error-message">{passwordError}</span>}
                </div>
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </form>
            {
                data.length>0 &&(
                    <table className="table">
                        <tbody>
                            {
                                data.map(each=>{
                                    return(
                                        <tr key={each.id}>
                                            <td>{each.id}</td>
                                            <td>{each.firstName}</td>
                                            <td>
                                                <img src={each.image} alt="" width={150} height={150}></img>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                )
            }
        
        </div>
    )
}
export default LoginForm;