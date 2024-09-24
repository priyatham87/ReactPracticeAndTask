import { useState } from "react";

const Login = () => {
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();
  

  const submitHandler = (event) => {
    event.preventDefault();
    const emailInStore=window.localStorage.getItem("SingupDetails")
    console.log(emailInStore);
    console.log(email);
    
    
   
  };

 
  const passwordHandler = (event) => {
    const userEnteredPassword = event.target.value;
    console.log(userEnteredPassword);

    if (userEnteredPassword.length <= 20 && userEnteredPassword.length > 15) {
      setPassword(userEnteredPassword);
    }
  };
  const emailHandler = (event) => {
    const userEnteredEmail = event.target.value;
    console.log(userEnteredEmail);

    if (userEnteredEmail.length <= 10 && userEnteredEmail.length > 5) {
      setEmail(userEnteredEmail);
    }
  };
  

  
  return (
    <>
      <h2>Login page</h2>
      <form onSubmit={submitHandler}>
    
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputPassword1"
            value={email}
            onChange={emailHandler}
          />
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
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};
export default Login;
