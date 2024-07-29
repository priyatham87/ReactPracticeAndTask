import React, {  useState } from "react";

function ControlledSingleState() {

  const [formData,setFormData]=useState({
    username:"",
    password:""
  });

  const [usernameError,setUserNameError]=useState(false)

  const [passwordError,setPasswordError]=useState(false)

  const [userData,setUserData]=useState({})

  const submitHandler = (event) => {
    event.preventDefault();
    if(!usernameError && !passwordError){
      console.log("sucess psp");
      sucessSubmit(formData.username,formData.password)
    }
  };

  const sucessSubmit = async (username, password) => {
    try {
      const response = await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username,
          password,
        }),
      });
      const finalResponse = await response.json();

      if (finalResponse.message) {
        alert(finalResponse.message);
      } else {
        console.log(finalResponse, "finalresponse");
        setUserData(finalResponse) 
      }
    } catch (err) {}
  };
  
const formHandler=(event)=>{
    const{value,name}=event.target
    const updateFormData={...formData,[name]:value}
    setFormData(updateFormData)
    if(validate(updateFormData))
    {
        setUserNameError(true)
        setUserNameError(true)
    }
    else
    {
        setUserNameError(false)
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
          name="username"
          value={formData.username}
          onChange={formHandler}
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
          name="password"
          value={formData.password}
          onChange={formHandler}
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
    </>
  );
}
export default  ControlledSingleState;
