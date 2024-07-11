const CustomButtom=()=>{
    return <button>Login</button>
};

export default CustomButtom;

//10-7-24
export const ButtonContent=(prop)=>{
    const {text="button",bgColor,width}=prop
    return <button style={{backgroundColor:bgColor,width:width}}>{text}</button>
}

export const GeneralButton=(props)=>{
    const {text,bgColor,width=100}=props.properties
    return <button style={{backgroundColor:bgColor,width:width}}>{text}</button>
}