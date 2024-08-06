import React from "react"

const CustomButton=(prop)=>{
    const {text,onPress}=prop

    return <button onClick={onPress} >{text}</button>

}
export default  React.memo(CustomButton)