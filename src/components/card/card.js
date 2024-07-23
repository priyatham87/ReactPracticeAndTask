import { Component } from "react";
import axios from "axios";
import "./card.css";

class FetchData extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
      loader: true,
      error: false,
      photos: [
        "https://fakestoreapi.com/img/81fPKd-2AYL.AC_SL1500.jpg",
        "https://fakestoreapi.com/img/71-3HjGNDUL.AC_SY879._SX._UX._SY._UY.jpg",
        "https://fakestoreapi.com/img/71li-ujtlUL.AC_UX679.jpg",
        "https://fakestoreapi.com/img/71YXzeOuslL.AC_UY879.jpg",
        "https://fakestoreapi.com/img/71pWzhdJNwL.AC_UL640_QL65_ML3.jpg",
        "https://fakestoreapi.com/img/61sbMiUnoGL.AC_UL640_QL65_ML3.jpg",
        "https://fakestoreapi.com/img/71YAIFU48IL.AC_UL640_QL65_ML3.jpg",
        "https://fakestoreapi.com/img/51UDEzMJVpL.AC_UL640_QL65_ML3.jpg",
        "https://fakestoreapi.com/img/61IBBVJvSDL.AC_SY879.jpg",
        "https://fakestoreapi.com/img/61U7T1koQqL.AC_SX679.jpg",
      ],
    };
  }

  fetchProducts = async () => {
    try {
      const { status, data } = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      const users = data;
      console.log(users);
      for (var i = 0; i < users.length; i++) {
        users[i]["image"] = this.state.photos[i % this.state.photos.length];
      }

      if (status === 200) {
        this.setState({
          products: users,
          loader: false,
        });
      }
    } catch (err) {
      this.setState({
        error: true,
        loader: false,
      });
    }
  };

  

  render() {
    return (
      <>
        <button onClick={this.fetchProducts}>fetch data</button>
        {this.state.loader ? (
          <h2>please wait</h2>
        ) : (
          <>
          

          <div className="flex">
            {this.state.products.map((each) => {
               
              return (
                <div key={each.id} className="card">
                  <h1>{each.name}</h1>
                  <img
                    src={each.image}
                    alt={each.name}
                    heigth={200}
                    width={150}
                  />
                  <h2>{each.username}</h2>
                  <h3>{each.email}</h3>
                </div>
              );
            })}
          </div>
          </>
        )}
      </>
    );
  }
}
export default FetchData;
