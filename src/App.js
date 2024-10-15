import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Search } from "./shoppers/search";
import { Categories } from "./shoppers/categories";
import { Navigations } from "./navigations/navigations";
import { Todo } from "./todo/todo";


function App() {
  return(
    <div>
      <Search/>
      <Categories/>
      <Navigations/>
      {/* <Todo/> */}
    </div>
  )
}

export default App;
