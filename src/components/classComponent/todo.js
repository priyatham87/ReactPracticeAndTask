import { Component } from "react";

class TodoComponent extends Component{
    state={
        todo:["hi psp","hi sai"]
    }
    addTodoHandler=()=>{
        const newState=[...this.state.todo,"Namasthe"]
        this.setState({
            todo:newState
        });
    }
    render(){
        return(
            <>
            <h2>hi todo</h2>
            {/* also we can pass customlist for best practice instead of creating here */}
           <ol>
           {
               this.state.todo.map((each)=>{
                return <li>{each}</li>
               }
               )
            }
           </ol>
           <button onClick={this.addTodoHandler}>click to add todo</button>
            </>
        )
    }
}
export default TodoComponent