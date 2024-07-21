// import logo from './logo.svg';
import "./App.css";
import MountingComponent from "./components/mounting/mounting";
import Unmounting from "./components/unmounting/unmounting";
import UpdatingComponent from "./components/updating/updating";

function App() {
  return (
    <div>
      <MountingComponent myColor={"green"} />
      <UpdatingComponent />
      <Unmounting />
    </div>
  );
}
export default App;
