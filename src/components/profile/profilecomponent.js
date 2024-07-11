


export const UserProfile=()=>{
    const userDetails={
        name:"psp",
        age:24,
        city:"HYD"
    };
    const {name,age,city}=userDetails;
    return(
        <div>
            <h1>Name of the user is {name}</h1>
            <h1>age of the user is {age}</h1>
            <h1>City of the user is {city}</h1>
        </div>
    )
}