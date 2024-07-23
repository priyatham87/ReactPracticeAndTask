import React, {  PureComponent } from 'react'

export default class Child extends PureComponent {
    componentDidMount(){
        console.log("componentDidMount child");
    }
  render() {
    console.log("child rendering...");
    return (
      <div>child Component</div>
    )
  }
}
