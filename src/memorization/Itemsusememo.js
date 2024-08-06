import { useCallback, useMemo, useState } from "react"
import CustomButton from "../custombutton/button"

const ItemsUseMemo=()=>{
    const[sweetPrice,setSweetPrice]=useState(100)

    const[drinkPrice,setDrinkPrice]=useState(100)

    const[biriyaniPrice,setBiriyaniPrice]=useState(200) 

    const sweetPriceInShop=useMemo(()=>{
        console.log("sweet calculaton");
        
        return sweetPrice+drinkPrice
    },[sweetPrice,drinkPrice])
    

    const biriyaniPriceInHotel= useMemo(()=>{
        console.log("biriyani caluclations");
        
        return biriyaniPrice
    },[biriyaniPrice])
   

    const sweetHandler=useCallback(()=>{
        setSweetPrice(sweetPrice+20)
    },[sweetPrice])
    

    const drinkHandler=useCallback(()=>{
        setDrinkPrice(drinkPrice+15)
    },[drinkPrice])
    

    const biriyaniHandler=useCallback(()=>{
        setBiriyaniPrice(biriyaniPrice+30)
    },[biriyaniPrice])
    
    return(
        <>
        <h2>Use Memo</h2>
        <h3>1kg sweet price {sweetPrice}</h3>
        <CustomButton text={"increase SweetPrice"} onPress={sweetHandler}/>
        <h3>1liter drink {drinkPrice}</h3>
        <CustomButton text={"increase DrinkPrice"} onPress={drinkHandler}/>
        <h2>Total Amount in Sweet Shop is:{sweetPriceInShop}</h2>
        <h3>Biriyani price {biriyaniPrice}</h3>
        <CustomButton text={"increase BiriyaniPrice"} onPress={biriyaniHandler}/>
        <h2>Total Amount in Biriyani Shop is:{biriyaniPriceInHotel}</h2>
        </>
    )
}
export default ItemsUseMemo