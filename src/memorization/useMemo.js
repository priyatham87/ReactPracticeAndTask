// import { useCallback, useMemo, useState } from "react"
import CustomButton from "../custombutton/button"
import { isEven, useCounter } from "../customHook/usecounter";

//above commit code is usememo example
const UseMemo=()=>{
    // const[age,setAge]=useState(20)
    // const[weight,setWeight]=useState(50)

    // const ageHandler=useCallback(()=>{
    //     setAge(age+1)
    // },[age])

    // const weightHandler=useCallback(()=>{
    //     setWeight(weight+5)
    // },[weight])
    

    // const isEven= useMemo(()=>{
    //     return age%2===0?"even":"odd"
    // },[age])
    const [age, incrementAge,decrementAge,resetAge] = useCounter(10);
    const [weight, incrementWeight,decrementWeight,resetWeight] = useCounter(60, 2);

   
    return(
        <>
        {/* <h2> Age is:{age} {isEven()}</h2>
        <h2>Weight is:{weight}</h2>
        <CustomButton text={"increase age"} onPress={ageHandler}/>
        <CustomButton text={"increase weight"} onPress={weightHandler}/> */}
         <h3>
        current age {age} {isEven(age) ? "even" : "odd"}{" "}
      </h3>
      <h3>current weight {weight}</h3>
      <CustomButton text="Increase age" onPress={incrementAge} />
      <button onClick={decrementAge}>Decrement age</button>
      <button onClick={resetAge}>Reset Age</button>
      <br></br>
      <br></br>
      <CustomButton text="Increase weight" onPress={incrementWeight} />
      <button onClick={decrementWeight}>Decrement Weight</button>
      <button onClick={resetWeight}>Reset Weight</button>
        </>
    )
}
export default UseMemo