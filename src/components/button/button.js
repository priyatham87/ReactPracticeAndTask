
import "./button.css"

//inline styling
export const Button=(prop)=>{
    const {text,bgColor,width,height}=prop

    const myStyle={
        backgroundColor:bgColor,
        width:width,
        height:height
    }
    return(
        <button style={myStyle}>{text}</button>

    )
}
//external css styling
export const Btn=(prop)=>{
    const {text}=prop
    return(
        <button className="button">{text}</button>
    )
}