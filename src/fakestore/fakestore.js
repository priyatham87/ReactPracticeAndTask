import axios from "axios";
import { useEffect, useState } from "react";

const FakeStoreApi = () => {
  const [fakeData, setFakeData] = useState([]);

  const [totalPrice,setTotalPrice]=useState(0)

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(()=>{
    const TotalAmount=fakeData.reduce((acc,each)=>{
      return acc+each.price * each.quantity
    },0)
    setTotalPrice(TotalAmount)

  },[fakeData])

  const fetchData = async () => {
    const { data } = await axios.get("https://fakestoreapi.com/products");
    const newData=data.map((each)=>({...each,quantity:0}))
    setFakeData(newData);
  };

  const decrementHandler=(targetId)=>{
    const decrementData=fakeData.map(each=>{
      if(each.id===targetId && each.quantity>0)
      {
        return {...each,quantity:each.quantity-1}
      }
      else
    {
      return each;
    }
    })
    setFakeData(decrementData)
  }

  const incrementHandler=(targetId)=>{
    const incrementData=fakeData.map(each=>{
      if(each.id===targetId)
      {
        return {...each,quantity:each.quantity+1}
      }
      else
      {
        return each;
      }
    })
    setFakeData(incrementData)
  }

  const removeHandler=(targetId)=>{
    const removeData=fakeData.filter(each=>each.id!==targetId)
    setFakeData(removeData)
  }
  return (
    <>
    <center><h1>Total Price:{totalPrice}</h1></center>
      <table class="table table-dark">
        <thead>
          <tr>
            <th>ID</th>
            <th>IMAGE</th>
            <th>TITLE</th>
            <th>CATEGORY</th>
            <th>PRICE</th>
            <th>Quantity</th>
            <th>Total Price</th>
            <th>Remove Product</th>
          </tr>
        </thead>
        <tbody>
          {fakeData.map((each) => {
            return (
              <>
                <tr class="table-active">
                  <td>{each.id}</td>
                  <td>
                    <img src={each.image} alt="" width={100} height={100} />
                  </td>
                  <td>{each.title}</td>
                  <td>{each.category}</td>
                  <td>{each.price}</td>
                  <td>
                    <button onClick={()=>decrementHandler(each.id)}>-</button>
                    {each.quantity}
                    <button onClick={()=>incrementHandler(each.id)}>+</button>
                    </td>
                    <td>{each.quantity*each.price}</td>
                    <td><button onClick={()=>removeHandler(each.id)}>Remove</button></td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </>
  );
};
export default FakeStoreApi;
