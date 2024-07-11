
const Greeting=(prop)=>{
    return (
        <>
        <h2>Good Morning {prop.children}</h2>
        <h2>july 17 is a holiday on account of moharram</h2>
        </>
    )
}
export default Greeting;

export const Wish=(prop)=>{
    return(
        <>
        {prop.children}
        <h3>*****</h3>

        </>
    )
}

export const Info=(prop)=>{
    return (
        <>
        {prop.children}
        <h2>How Are You!!!</h2>
        </>
    )

}