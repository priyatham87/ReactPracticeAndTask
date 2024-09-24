import { useState } from "react"

export const Toggle=()=>{
    const [toggle,setToggle]= useState(false)
    const [num,setNum]=useState()
    const toggleHandler=()=>{
        setToggle(!toggle)
    }
    const numHandler=(event)=>{
        const enter=event.target.value
        setNum(enter)
        
    }
    const submitHandler=(event)=>{
        event.preventDefault()
    }
    return(
        <>
        {
            toggle?<h2>selected</h2>:<h2>no selected</h2>
        }
        
           <button onClick={toggleHandler}>chanege</button>
           

          {/* <form>
          <input value={num} onChange={numHandler}>num</input>
          <button type="submit">submit</button>
          </form> */}
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
            value={num}
            onChange={numHandler}
          />
        </div>
       
       
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>

        </>
    )
}