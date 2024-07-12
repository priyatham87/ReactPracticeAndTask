// import logo from './logo.svg';
import './App.css';
import Greeting, { Info, Wish } from './components/greeting/greeting';
import { Btn, Button } from './components/button/button';
import IplData, { Nav } from './components/ipldata/ipldata';
import { Customcard } from './components/card/card';
const names=["sai","kanaka","venkat"]
function App() {
  return (
    <div>
      <h1>11-7-24--(DAY-8 PRACTICE && TASK)</h1>
      <center><h1>PRACTICE</h1></center>

      {/* Types of children prop  */}
      <h2>we can pass child prop in three ways</h2>
      <h1>1.text content</h1>
      {
        names.map((eachName,i)=>
        <Greeting key={i}>
          {eachName}
        </Greeting>)
      }

      <h1>2.jsx</h1>
      {
        names.map((eachName,i)=>
          <Wish key={i}>
            <h2>Re-open july 18 {eachName} don't miss the class</h2>
          </Wish>
        )
      }

      <h1>3.nested component</h1>
      {
        names.map((eachName,i)=>
          <Info key={i}>
            <Card name={eachName}> 
              {/* {eachName} */}
            </Card>
          </Info>
        )
      }
      {/* Types of styling in react */}
      <h1>Types Of Styling in React App</h1>
      <h1>1.Inline Style</h1>
      <Button text="Inline Styling" bgColor={"orange"} width={300} height={50}></Button>

      <h1>2.External CSS Styling</h1>
      <Btn text="External CSS Styling"></Btn>
{/* ********************************************************************************************************* */}
      {/* ipl cards task */}
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
        IplData.map(eachdata=>{
          return (
          <Customcard data={eachdata}></Customcard>   
          )
        })
      }
      </div>

      <div className="footer">
        <h2>Powerded By PSP</h2>

      </div>

    </div>
  );
}
export default App;

//nested component of Info component
const Card=(prop)=>{
  return(
    <>
    <h2>hi {prop.name}</h2>
    {/* <h2> {prop.children}</h2> */}
    <h2>Good morning</h2>
    </>
  )
}
