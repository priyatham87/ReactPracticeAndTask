// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { List } from './components/BiriyaniData/recipe';
import CustomCard from './components/cards/card';
import ConditionalRendering, { ShortCircuit, TernaryOperator } from './components/conditional-rendering/condition';
import CustomButton from './components/classcomponent/class';


function App() {
  return (
    <div className='App'>
      <h1>15-7-24--(DAY-11 PRACTICE && TASK)</h1>
      <center><h1>PRACTICE</h1></center>
       <ConditionalRendering/>
       <TernaryOperator/>
       <ShortCircuit/>
       <CustomButton/>
       <center><h1>Task</h1></center>
    <div className='flex'>
      {
        List.map((eachIteam)=>{
          return(
            <>
            <CustomCard key={eachIteam.id} iteam={eachIteam}/>
            </>
          )
        })
      }
    </div>

    <div>
        {
          List.map((eachItem) => { 
            var c = eachItem.id%2==0?"d1":"d2"; 
            var status = eachItem.id%2==0?"even":"odd"; 
            return(
              <>
              <div className={c} style={{width:'150px', height:'150px', display:"inline-block" , margin:"10px"}}>
              </div>
              <div style={{display:"inline-block"}}>This is {status}</div><br/>
              </>
            );
          })
        }
      </div>

  </div>
  );
}
export default App;
