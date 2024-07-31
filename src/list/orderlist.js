const OrderList=(prop)=>{
    const{list}=prop
    return(
        <>
       <ol>
        {
            list.map(each=><li>{each}</li>)
        }
       </ol>
        </>
    )
}
export default OrderList;