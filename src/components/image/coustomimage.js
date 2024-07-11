const CoustomImage=()=>{
    return (
    <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt="bag" width={100} height={100}></img>
    );
}
export default CoustomImage;


//10-7-24
export const ImageShirt=()=>{
    return(      
        <img  className="bag" src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg" alt="shirt" width={100} height={100}></img>
    );
}

export const ImageJacket=(prop)=>{
    const {source,altText,width,height}=prop
    return(
        <img src={source} alt={altText} width={width} height={height}></img>

    );
}