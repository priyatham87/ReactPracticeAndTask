import axios from "axios";
import { useEffect, useState } from "react";

const FakeStoreApi = () => {
  const [fakeData, setFakeData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const { data } = await axios.get("https://fakestoreapi.com/products");
    console.log(data);
    setFakeData(data);
  };
  return (
    <>
      <table class="table table-dark">
        <thead>
          <tr>
            <th>ID</th>
            <th>IMAGE</th>
            <th>TITLE</th>
            <th>CATEGORY</th>
            <th>PRICE</th>
            <th></th>
            <th>Total Price</th>
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
