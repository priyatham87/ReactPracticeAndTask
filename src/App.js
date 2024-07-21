// import logo from './logo.svg';
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import FetchExample from "./components/classComponent/fetchExample";
import FakeProducts from "./components/classComponent/fetchDataOnRating";
import Square from "./components/classComponent/square-task";

function App() {
  return (
    <div>
      <h1>17-7-24--(DAY-13 PRACTICE && TASK)</h1>
      <center>
        <h1>PRACTICE</h1>
      </center>

      <FetchExample />

      <center>
        <h1>TASK</h1>
      </center>
      <FakeProducts />
      <Square/>
    </div>
  );
}
export default App;
