import axios from "axios";
import React, { useEffect, useState } from "react";
import "./fakesty.css";
import { tab } from "@testing-library/user-event/dist/tab";

const FakeStoreTable = () => {
  const [tableData, settableData] = useState([]);
  useEffect(() => {
    apiCalling();
  }, []);

  
  const [grandTotal, setGrandTotal] = useState(0);

  useEffect(() => {
    const grandTotalcal = tableData.reduce((acc, each) => {
      return acc + each.price * each.qty;
    }, 0);
    setGrandTotal(Math.ceil(grandTotalcal));
  }, [tableData]);

  const apiCalling = async () => {
    const response = await axios.get("https://fakestoreapi.com/products");
    const newData = response.data.map((each) => ({ ...each, qty: 0 }));
    settableData(newData);
  };

  const incrementHandler = (targetId) => {
    const modifiedData = tableData.map((each) => {
      if (each.id === targetId) {
        // console.log(each.id, targetId);
        return { ...each, qty: each.qty + 1 };
      } else {
        return each;
      }
    });
    settableData(modifiedData);
    // console.log(grandTotalcal);
  };
  const decrementHandler = (targetId) => {
    const modifiedData = tableData.map((each) => {
      if (each.id === targetId && each.qty > 0) {
        return { ...each, qty: each.qty - 1 };
      } else {
        return each;
      }
    });

    settableData(modifiedData);
  };

  const removeHandler = (targetId) => {
    const newtableData = tableData.filter((each) => each.id !== targetId);

    settableData(newtableData);
    // tableData.map((each)=>{
    //   if(each.id === targetId){

    //   }
    // })
  };

  const tbsty = {
    border: "1px solid black",
    borderCollapse: "collapse",
    width: "10%",
    textAlign: "center",
  };

  const tbsty1 = {
    border: "1px solid black",
    borderCollapse: "collapse",
    margin: "20px",
  };

  return (
    <React.Fragment>
      <h4>Grand Total : {grandTotal}</h4>
      <table style={tbsty1}>
        <tbody>
          <tr>
            <th className="headsty">Title</th>
            <th className="headsty">category</th>
            <th className="headsty">Rating</th>
            <th className="headsty">Price</th>
            <th className="headsty">Quantity</th>
            <th className="headsty">Total Price</th>
            <th className="headsty">Image</th>
            <th className="headsty">Remove Product</th>
          </tr>
          {tableData.map((each) => {
            return (
              <React.Fragment key={each.id}>
                <tr key={each.id}>
                  <td style={tbsty}>{each.title}</td>
                  <td style={tbsty}>{each.category}</td>
                  <td style={tbsty}>{each.rating.rate}</td>
                  <td style={tbsty}>{each.price}</td>
                  <td style={tbsty}>
                    <button
                      className="butsty"
                      onClick={() => decrementHandler(each.id)}
                    >
                      -
                    </button>
                    {each.qty}
                    <button
                      className="butsty"
                      onClick={() => incrementHandler(each.id)}
                    >
                      +
                    </button>
                  </td>
                  <td style={tbsty}>{each.qty * each.price}</td>
                  <td style={tbsty}>
                    <img src={each.image} width={100} height={100} alt=""/>
                  </td>
                  <td style={tbsty}>
                    <button onClick={() => removeHandler(each.id)}>
                      Remove
                    </button>
                  </td>
                </tr>
              </React.Fragment>
            );
          })}
        </tbody>
      </table>
    </React.Fragment>
  );
};

export default FakeStoreTable;