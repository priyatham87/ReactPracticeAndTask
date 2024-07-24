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
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQin2nGaRBvBrhXhBb70_GXuWfd8F-ckQTVfg&s",
        "https://www.wcmessenger.com/wp-content/uploads/2020/12/Willard-Ervin-Howell-obit-1.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMyFwdb_Kqpm-ME1WldFfvTba1CDsMUoAzVg&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMyFwdb_Kqpm-ME1WldFfvTba1CDsMUoAzVg&s",
        "https://live.staticflickr.com/1720/24289969059_9caac89fd7_w.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQin2nGaRBvBrhXhBb70_GXuWfd8F-ckQTVfg&s",
        "https://www.wcmessenger.com/wp-content/uploads/2020/12/Willard-Ervin-Howell-obit-1.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMyFwdb_Kqpm-ME1WldFfvTba1CDsMUoAzVg&s",
        "https://live.staticflickr.com/1720/24289969059_9caac89fd7_w.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQin2nGaRBvBrhXhBb70_GXuWfd8F-ckQTVfg&s",
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
        users[i]["image"] = this.state.photos[i];
      }

      console.log(users);
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
