import {useState} from "react"
const UseStateExample=()=>{

    const [login, setLogin] = useState(false);

    const [count,setCount]=useState(10)
    
    const loginHandler=()=>{
        // setLogin((login)=>!login)
        setLogin(!login)
    }
    const countHandler=()=>{
        // setCount((count)=> count+ 1)
        // setCount((count)=> count+ 1)
        // setCount((count)=> count+ 1)
        setInterval(()=>{
            setCount((count)=>count+1)
        },1000)
    }
return(
    <>
    <h2>use state example</h2>
    {
        login?<h2>welcome user</h2>:<h2>please login</h2>
    }
    <button onClick={loginHandler}>click me</button>

    <button onClick={countHandler}> {count}</button>
    </>
)
}
export default UseStateExample