import { Component } from "react";

class Counter extends Component{
    state={
        count:0,
    };
    incrementHandler=()=>{
        this.setState(
            {
                count: this.state.count+1
            },()=>{} 
        )
    };
    decrementHandler=()=>{
        
        if(this.state.count>0)
        {
            this.setState(
                {
                    count:this.state.count -1
                }
            )
        }
    };
    resetHandler=()=>{
        this.setState(
            {
                count:0
            },()=>{}
        )
    };
    render(){
        return(
            <>
            <h2>count is:{this.state.count}</h2>
            <button onClick={this.incrementHandler}>Increment</button>
            <button onClick={this.decrementHandler}>Decrement</button>
            <button onClick={this.resetHandler}>Reset</button>
            </>
        )
    }
}
export default Counter