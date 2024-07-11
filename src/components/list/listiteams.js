import { biriyanis, fruits } from "./fruitdata";


export const IteamsList=()=>{
    return(
        <>
            <li>HTML</li>
            <li>CSS</li>
            <li>JS</li>
        </>
    )
}
//Array iteration
export const ListFruit=()=>{
    
    return(
        <>
            {fruits.map(eachfruit=><li >{eachfruit}</li>)}
        </>
    )
}
//object iteration
export const BiriyaniList=()=>{
    return(
        <>
        {biriyanis.map(eachbiriyani=><li key={eachbiriyani.id}>{eachbiriyani.iteam}</li>)}
        </>
    )
}