import { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Progress from "../progressbar/Prograss";
import '../card/card.css'

class FakeProducts extends Component {
  state = {
    products: [],
    loader: true,
    error: false,
  };

  Precentage = (rate, base) => {
    var percent = (rate / base) * 100;
    return percent;
  };

  dataHandler = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      // console.log(data)
      this.setState({
        products: data,
        loader: false,
      });
    } catch (err) {
      this.setState({
        error: true,
        loader: false,
      });
    }
  };

  incrementHandler = (targetProductId) => {
    const updateProduct = this.state.products.map((each) => {
      if (each.id === targetProductId) {
        return { ...each, rating : {...each.rating, rate : each.rating.rate + 1 }};
      } else {
        return { ...each };
      }
    });
    this.setState({
      products: updateProduct,
    });
  };

  decrementHandler = (targetProductId) => {
    const updateProduct = this.state.products.map((each) => {
      if (each.id === targetProductId) {
        return { ...each, rating : {...each.rating, rate : each.rating.rate - 1 }};
      } else {
        return { ...each };
      }
    });
    this.setState({
      products: updateProduct,
    });
  };

  render() {
    return (
      <>
        {this.state.loader ? (
          <>
            <button onClick={() => this.dataHandler()}>click</button>
            <h1>Please wait</h1>
          </>
        ) : (
          <div className="flex">
            {this.state.products.map((eachProduct) => {
              return (
                <div className="card">
                  <h3>{eachProduct.title}</h3>
                  <img
                    src={eachProduct.image}
                    alt=""
                    width={200}
                    height={200}
                  />
                  <p>{`Rating : ${eachProduct.rating.rate}`}</p>
                  <br />
                  <Progress
                    scale={this.Precentage(eachProduct.rating.rate, 5)}
                  />
                  <button onClick={() =>this.incrementHandler(eachProduct.id)}>
                    Rating +
                  </button>
                  <button onClick={() =>this.decrementHandler(eachProduct.id)}>
                    Rating -
                  </button>
                </div>
              );
            })}
          </div>
        )}
      </>
    );
  }
}
export default FakeProducts;
