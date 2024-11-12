import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Search } from "./shoppers/search";
import { Navigations } from "./navigations/navigations";
import { Todo } from "./todo/todo";


function App() {
  return(
    <div>
      <Search/>
      <Navigations/>
      <Todo/>
    </div>
  )
}

export default App;
