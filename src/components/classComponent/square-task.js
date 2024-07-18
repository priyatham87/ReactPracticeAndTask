import { Component } from "react";
import "./square.css"

class Square extends Component{
    state={
        squareBoxes:[]
    }
    addColor=()=>{
        const newState=[...this.state.squareBoxes,1]
        this.setState(
            {
                squareBoxes:newState

            }
        )
    }
    render(){
        return(
            <>
            
            <h2>Square components</h2>
            <button onClick={this.addColor}>Add color</button>
            {
                this.state.squareBoxes.map((each,i)=>{
                    return <div className={(i+1)%2===0?"squareStyle-Even":"squareStyle-Odd"}>{i+1}</div>   
                })
            }
            </>
        )
    }
}
export default Square