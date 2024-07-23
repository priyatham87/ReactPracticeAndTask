import React, { Component } from 'react'
import Child from './child'

export default class Parent extends Component {
    state={
        toggle:false
    }
   toggleHandler=()=>{
    this.setState({
        toggle:!this.state.toggle
    })
   }
   componentDidMount(){
    console.log("componentDidMount parent");
   }
  render() {
    console.log("parent rendering..");
    return (
      <div>
        <Child/>
        <button onClick={this.toggleHandler}>Click Toggle</button>
      </div>
    )
  }
}
