import ListIteams, { IteamsList } from "./listiteams";
const OrderList=()=>{
    return(
        <ol>
            <ListIteams></ListIteams>
            <IteamsList></IteamsList>
        </ol>
    );
};

export default OrderList;