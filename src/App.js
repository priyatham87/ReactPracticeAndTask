// import logo from './logo.svg';
import "./App.css";
import Customcard from "./components/card/card";
import "bootstrap/dist/css/bootstrap.min.css";
import FetchData from "./components/classComponent/fetchExample2";
import RecipeList from "./components/classComponent/recipelist";
import CustomTable from "./components/Table/table";


function App() {
  return (
    <div>
      <h1>18-7-24--(DAY-14 PRACTICE && TASK)</h1>
      <center>
        <h1>PRACTICE</h1>
      </center>

      <FetchData />
      <RecipeList />

      <center>
        <h1>TASK</h1>
        </center>
        <CustomTable/>
      
    </div>
  );
}
export default App;
