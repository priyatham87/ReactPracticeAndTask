import React, { useState } from 'react'

export const Todo = () => {
    const [todo,setTodo]=useState([{
        id:1,
        task:"taskone",
    },{ id:2,
        task:"taskTwo",}])
    const addHandler=()=>{
        const newTodo={ id:3,
            task:"taskthree",}
        setTodo(...todo,newTodo)
    }
    const deleteHandler=()=>{

    }
  return (
    <div>
        <div>
            <input placeholder='add iteam...' style={{width:500}}></input>
            <br></br>
        <button onClick={addHandler}>Add</button>
        {
            todo.map((each)=>{
                return(
                    <div style={{display:'flex', justifyContent:'space-between', width:500}}>
                        <h2>{each.task}</h2>
                        <button onClick={()=>deleteHandler(each.id)}>Delete</button>
                        <button>Edit</button>
                        </div>
                )
            })
        }
        </div>
    </div>
  )
}
