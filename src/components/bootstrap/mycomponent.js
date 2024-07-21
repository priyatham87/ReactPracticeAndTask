import { Cards } from "../card/card";


const MyComponent=()=>{
    return(
        <>
  <div className="container-fluid p-5 bg-primary text-white text-center">
    <h1>My First Bootstrap Page</h1>
    <p>Resize this responsive page to see the effect!</p>
  </div>
  <div className="container mt-5">
    <div className="row">
      <div className="col-sm-4">
        <Cards></Cards>
      </div>
      <div className="col-sm-4">
        <Cards></Cards>
      </div>
      <div className="col-sm-4">
        <Cards></Cards>
      </div>
    </div>
  </div>
</>

    )
}
export default MyComponent;