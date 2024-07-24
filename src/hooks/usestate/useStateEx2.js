import { useState } from "react";

const UseStateExample2 = () => {
  const [todos, setTodos] = useState([
    {
      period: "morning",
      todo: "woke up at 8am",
    },
    {
      period: "AfterNoon",
      todo: "Lunch at at 1pm",
    },
  ]);
  const todoHandler = () => {
    const newTodo = {
      period: "evening",
      todo: "break at 4pm",
    };
    const newTodoState = [...todos, newTodo];
    setTodos(newTodoState);
  };

  const deleteHandler=(index)=>{
    const finalState=todos.filter((eachTodo,ind)=> ind !==index)
    setTodos(finalState)

  }

  
  return (
    <>
      <h2>UseStateExample2</h2>
      <button onClick={todoHandler}>add todo</button>
      {todos.map((eachTodo, index) => {
        return (
          <div key={index}>
            <h2>current period :{eachTodo.period}</h2>
            <h3>Time :{eachTodo.todo}</h3>
            <button onClick={()=>deleteHandler(index)}>Delete Todo</button>
           
          </div>
        );
      })}
    </>
  );
};
export default UseStateExample2;
