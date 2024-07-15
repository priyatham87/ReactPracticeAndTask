// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { List } from './components/BiriyaniData/recipe';
import CustomCard from './components/cards/card';


function App() {
  return (
    <div className='App'>
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
  </div>
  );
}

export default App;
