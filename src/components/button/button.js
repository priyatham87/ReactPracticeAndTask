
import "./button.css"

//external css styling
export const Btn=(prop)=>{
    const {text}=prop
    return(
        <button className="button">{text}</button>
    )
}