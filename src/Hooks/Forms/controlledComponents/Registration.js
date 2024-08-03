import { useState } from 'react'
import './loginform.css'

const RegistrationForm=()=>{
    const [userEmail,setUserEmail]=useState("")

    const [userName,setUserName]=useState("")

    const [phoneNum,setPhoneNum]=useState("")

    const [password,setPassword]=useState("")

    const [emailError, setEmailError] = useState(null);

    const [nameError, setNameError] = useState(null);

    const [phoneError, setPhoneError] = useState(null);

    const [passwordError, setPasswordError] = useState(null);

    const [users, setUsers] = useState([]);

    const emailHandler=(event)=>{
        const userEnteredEmail=event.target.value
        setUserEmail(userEnteredEmail)
        if(userEnteredEmail.length>20)
        {
            setEmailError("enter email below 20 characters")  
        }
        else
        {
            setEmailError("")
        }
    }

    const nameHandler=(event)=>{
        const userEnteredName=event.target.value
        setUserName(userEnteredName)
        if(userEnteredName.length>0 && userEnteredName.length<10)
        {
            setNameError("Invalid Name, enter less than 15 characters")
        }
        else
        {
            setNameError("")
        }
    }

    const phoneHandler=(event)=>{
        const userEnteredPhoneNum=event.target.value
        setPhoneNum(userEnteredPhoneNum)
        if(userEnteredPhoneNum===10)
        {
            setPhoneError("enter only 10 digits ")
        }
        else
        {
            setPhoneError("")
        }
    }

    const passwordHandler=(event)=>{
        const userEnteredPassword=event.target.value
        setPassword(userEnteredPassword)
        if(userEnteredPassword<5)
        {
            setPasswordError("Invalid Password, enter password greater than 5 characters")
        }
        else
        {
            setPasswordError("")
        }
    }

    const submitHandler=(event)=>{
        event.preventDefault();

        if(!userEmail || !userName || !phoneNum || !password)
        {
            alert("Please fill in all fields");
            return;
        }

          const newUser = {
            email: userEmail,
            name: userName,
            phone: phoneNum,
            password: password,
          };

          setUsers([...users, newUser]);

          window.localStorage.setItem("users", JSON.stringify([...users, newUser]));

          setUserEmail("");
          setUserName("");
          setPhoneNum("");
          setPassword("");

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
            value={userEmail}
            onChange={emailHandler} 
          />
        </div>
        {emailError && <span>{emailError}</span>}
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            value={userName}
            onChange={nameHandler}
          />
        </div>
        {nameError && <span>{nameError}</span>}
        <div className="mb-3">
          <label htmlFor="exampleInputEmail3" className="form-label">
            Phone number
          </label>
          <input
            type="tel"
            className="form-control"
            id="exampleInputEmail3"
            aria-describedby="emailHelp"
            value={phoneNum}
            onChange={phoneHandler} 
          />
        </div>
        {phoneError && <span>{phoneError}</span>}
        <div className="mb-3">
          <label htmlFor="exampleInputEmail4" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputEmail4"
            aria-describedby="emailHelp"
            value={password}
            onChange={passwordHandler}
          /> 
        </div>
        {passwordError && <span>{passwordError}</span>}
        <input type="submit" className="btn btn-primary" value="Submit" />
      </form> 
        </div>
    )
}
export default RegistrationForm