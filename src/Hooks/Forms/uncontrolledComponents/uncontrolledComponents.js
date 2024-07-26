import React, { useRef, useState } from 'react'

 function UncontrolledForms() {
    const emailRef=useRef();
    const passwordRef=useRef();

    const [error,setError]=useState("")

    const submitHandler=(event)=>{
        event.preventDefault();
        const emailEntered=emailRef.current.value;
        const passwordEntered=passwordRef.current.value;
        console.log("user entered data",emailEntered,passwordEntered);

        if(emailEntered.length<15 && passwordEntered.length<15)
        {
            //allow user to submit
            sucessSubmit(emailEntered, passwordEntered);
            setError("")
        }
        else
        {
            //throw error
            setError("please enter below 15 characters for email and password")
        }
    }

    const sucessSubmit=(username, password)=>{
        fetch("https://dummyjson.com/auth/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              username: "emilys",
              password: "emilyspass",
            }),
          })
            .then((res) => res.json())
            .then(data =>console.log(data));
        alert("client validations are sucessfull")
    }
  return (
    <form onSubmit={submitHandler}>
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
      ref={emailRef}
    />
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
      ref={passwordRef}
    />
  </div>
  {
    error &&<span style={{color:"red"}}>{error}</span>
  }
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

  )
}
export default UncontrolledForms
