

const ConditionalRendering=()=>{
    const isLogin=false;
    if(isLogin)
    {
        return(
            <>
            <h1>welcome user</h1>
            </>
        );
    }
    else
    {
        return(
            <>
            <h1>Please Login</h1>
            </>
        )
    }
}
export default ConditionalRendering

export const TernaryOperator=()=>{
    const isLogin=true;
    return(
        <>
       {
         isLogin?(<><h1>Welcome user</h1></>):(<><h1>Please Login</h1></>)
       }
        </>
    )

}

export const ShortCircuit=()=>{
    const isLogin=true;
    const subscribe=10;
    return(
        <>
        {
            isLogin && <h1>Welcome PSP</h1> 
        }
        {
            subscribe && <h2>subscribers are {subscribe}</h2>
        }
        </>
    )
}