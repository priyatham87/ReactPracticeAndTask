import { useState } from "react";
import {Link} from "react-router-dom"
import Login from "./login";

const SingUp = () => {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();
  const [phno, setPhNo] = useState();
  const [profession, setProfession] = useState();

  const [loader,setLoader]=useState(true)

  const submitHandler = (event) => {
    event.preventDefault();
    const localStorage={
        "name":username,
        "pass":password,
        "em":email,
        "ph":phno,
        "prof":profession
    }
    
    const setData={...localStorage}
    console.log(setData);
    
    window.localStorage.setItem("SingupDetails",JSON.stringify(setData))
    setLoader(false)
  };

  const userHandler = (event) => {
    const userEnteredName = event.target.value;
    console.log(userEnteredName);

    if (userEnteredName.length <= 10 && userEnteredName.length > 5) {
      setUserName(userEnteredName);
    }
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
  const phnoHandler = (event) => {
    const userEnteredPhNum = event.target.value;
    console.log(userEnteredPhNum);

    if (userEnteredPhNum.length <= 10 && userEnteredPhNum.length > 5) {
      setPhNo(userEnteredPhNum);
    }
  };
  const professionHandler = (event) => {
    const userEnteredProfession = event.target.value;
    console.log(userEnteredProfession);

    if (
      userEnteredProfession.length <= 10 &&
      userEnteredProfession.length > 5
    ) {
      setProfession(userEnteredProfession);
    }
  };

  return (
    <>
      {
        loader?
        <>
        <h2>Singup page</h2>
      <form onSubmit={submitHandler}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            username
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={username}
            onChange={userHandler}
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
        </div>{" "}
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            PhNumber
          </label>
          <input
            type="number"
            className="form-control"
            id="exampleInputPassword1"
            value={phno}
            onChange={phnoHandler}
          />
        </div>{" "}
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Profession
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            value={profession}
            onChange={professionHandler}
          />
        </div>
        
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
        </>
        :
        <>
        <Login/>
        </>
      }
    </>
  );
};
export default SingUp;
