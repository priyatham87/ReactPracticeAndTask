import { Component } from "react";
import Customcard from "../card/card";

class  FetchExample extends Component {
  state = {
    product: [],
    loader: true,
    error: false,
  };
  fetchProducts = () => {
    fetch("https://fakestoreapi.com/products")
      .then((respone) => respone.json())
      .then((data) => this.setState({ product: data, loader: false }));
  };
  render() {
    return (
      <div>
        <button onClick={this.fetchProducts}>fetch data</button>
        {this.state.loader ? (
          <h2>please wait</h2>
        ) : (
          <div className="flex">
            {this.state.product.map((each) => {
              return (
                <>
                  <Customcard data={each} />
                </>
              );
            })}
          </div>
        )}
      </div>
    );
  }
}
export default FetchExample;
