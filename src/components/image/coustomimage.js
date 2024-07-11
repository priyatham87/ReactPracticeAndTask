



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