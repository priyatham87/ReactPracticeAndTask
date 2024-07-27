import React, {  useState } from "react";

function ControlledForms() {

  const [username,setUserName]=useState("")

  const [password,setPassword]=useState("")

  const [usernameError,setUserNameError]=useState(false)

  const [passwordError,setPasswordError]=useState(false)

  const [userData,setUserData]=useState({})

  const [list,setList]=useState([])
  
  const submitHandler = (event) => {
    event.preventDefault();
    if(!usernameError && !passwordError){
      console.log("sucess psp");
      sucessSubmit(username,password)
    }
  };

  const sucessSubmit = async (username, password) => {
    try {
      const response = await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          // username: username,
          // password: password,
          username,
          password,
        }),
      });
      const finalResponse = await response.json();

      if (finalResponse.message) {
        alert(finalResponse.message);
      } else {
        console.log(finalResponse, "finalresponse");
        // setUserData(finalResponse)
        const totalname=finalResponse.firstName+finalResponse.lastName
        setUserName("")
        setPassword("")

        const userExist=list.includes(totalname)
        if(userExist){
          alert("user already exist")
        }
        else{
          setList([...list,totalname])
        }
      }
    } catch (err) {}
    // alert("client validations are sucessfull")
  };
  
const usernameHandler=(event)=>{
  const userEnteredValue=event.target.value;
  setUserName(userEnteredValue)
  console.log(userEnteredValue);
  if(validate(userEnteredValue)){
    setUserNameError(true)
  }
  else{
    setUserNameError(false)
  }
}

const passwordHandler=(event)=>{
  const passwordEnteredValue=event.target.value;
  setPassword(passwordEnteredValue)
  console.log(passwordEnteredValue);
  if(validate(passwordEnteredValue)){
    setPasswordError(true)
  }
  else{
    setPasswordError(false)
  }
}

const validate=(value)=>{
  return value.length>15;
}

return (
    <>
    {
      Object.keys(userData).length>0 ?(
        <>
        <h2>Welcome {userData.firstName} {userData.lastName}</h2>
        </>
      ):<form onSubmit={submitHandler} style={{maxWidth:500}}>
      <div className="mb-3 mt-3">
        <label htmlFor="email" className="form-label">
          Email:
        </label>
        <input
          type="text"
          className="form-control"
          id="email"
          placeholder="Enter email"
          name="email"
          value={username}
          onChange={usernameHandler}
        />
        {usernameError && <span style={{ color: "red" }}>Invalid username please entered below 15 characters!!</span>}
      </div>
      <div className="mb-3">
        <label htmlFor="pwd" className="form-label">
          Password:
        </label>
        <input
          type="password"
          className="form-control"
          id="pwd"
          placeholder="Enter password"
          name="pswd"
          value={password}
          onChange={passwordHandler}
        />
        {passwordError && <span style={{ color: "red" }}>Invalid password please entered below 15 characters!!</span>}
      </div>
      
      <br></br>
      {/* <div className="form-check mb-3">
    <label className="form-check-label">
      <input className="form-check-input" type="checkbox" name="remember" />{" "}
      Remember me
    </label>
  </div> */}
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
    }
    <h2>List of Register Users..</h2>
    <ol>
    {
      list.map((each,i)=><li key={i}>{each} </li>)
    }
    </ol>
    </>
    
  );
}
export default  ControlledForms;
