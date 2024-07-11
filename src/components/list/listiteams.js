import { biriyanis, fruits } from "./fruitdata";

const ListIteams=()=>{
    return(
        <div>
            <li>psp</li>
            <li>priyatham</li>
            <li>sai</li>
        </div>
    )
}
export default ListIteams;

//10/7/24
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