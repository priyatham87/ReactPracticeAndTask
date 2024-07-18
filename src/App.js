// import logo from './logo.svg';
import './App.css';
import Customcard from './components/card/card';
import 'bootstrap/dist/css/bootstrap.min.css';
import fakeData, { Nav } from './components/fakedata/fakedata';
import { Btn } from './components/button/button';
import Subscribecomponent from './components/classComponent/subscribe-Button';
import TodoComponent from './components/classComponent/todo';
import Counter from './components/classComponent/counter';
import Square from './components/classComponent/square-task';
import FakeStoreApi from './components/classComponent/fakestoreapi';



function App() {
  return (
    <div>
      <h1>16-7-24--(DAY-12 PRACTICE && TASK)</h1>
      <center><h1>PRACTICE</h1></center>
      <Subscribecomponent/>
      <TodoComponent/>
     
      

      <center><h1>TASK</h1></center>
      <Counter/>
      <Square/>
      
     

      <FakeStoreApi/>

    </div>
  );
}
export default App;

