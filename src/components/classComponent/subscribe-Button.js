import { Component } from "react";
import MyComponent from "../bootstrap/mycomponent";

class Subscribecomponent extends Component{
    //state creation
    state={
        isSubscribe:false,
        text1:"subscribe",
        text2:"subscribed"

    }
    handleClick=()=>{
        //wrong way to mutuate state
        //this.state.isSubscribe=true;
        this.setState(
            {
                isSubscribe:!this.state.isSubscribe
            },
            ()=>{}
        )
    }
    render(){
        return(
            <>
            <button onClick={()=>this.handleClick()}>{this.state.isSubscribe?this.state.text2:this.state.text1}</button>
            {
                this.state.isSubscribe?<><h2>Thanks for subscribe</h2><MyComponent/></>:<h2>please subscribe</h2>
            }
            </>
        )
    }
}
export default Subscribecomponent