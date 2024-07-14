// import logo from './logo.svg';
import './App.css';
import Customcard,{  Cards, OrderList } from './components/card/card';
import 'bootstrap/dist/css/bootstrap.min.css';
import fakeData, { Nav } from './components/fakedata/fakedata';
import { Btn } from './components/button/button';
import MyComponent from './components/bootstrap/mycomponent';
import Spinner from './components/spinner/CustomSpinner';
import { Audio } from 'react-loader-spinner';


function App() {
  return (
    <div>
      <h1>12-7-24--(DAY-9 PRACTICE && TASK)</h1>
      <center><h1>PRACTICE</h1></center>
      
      {/* 13-7-24 */}
      <OrderList list={["Apple","Banana","Watermelon","Graps"]}></OrderList>
      <Cards></Cards>
      <Spinner></Spinner>
      <Audio color={"blue"}></Audio>
      <MyComponent></MyComponent>
      

      <center><h1>TASK</h1></center>
      
      <div className='header'>
        {
          Nav.map( (eachdata)=> {
            return <Btn text={eachdata}></Btn>
          })
        }
      </div>

      <div className='flex'>
      {
        fakeData.map((eachIteam,i)=> <Customcard data={eachIteam}></Customcard>)
      }
      </div>
      
      <div className="footer">
        <h2>Powerded By PSP</h2> 
      </div>

    </div>
  );
}
export default App;

