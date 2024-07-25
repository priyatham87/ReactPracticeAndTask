import './App.css'; 
import RecipeList from './hooks/recipeUseState/recipe';
import Square from './hooks/square/square';
import UseStateExample from './hooks/usestate/useStateEx1';
import UseStateExample2 from './hooks/usestate/useStateEx2';
function App() {
  return (
    <div >
    <h1>23-7-24--(DAY-17 PRACTICE && TASK)</h1>
    <center><h1>PRACTICE</h1></center>
   <UseStateExample/>
   <UseStateExample2/>

   <center><h1>TASK</h1></center>
   <RecipeList/>
   <h2>Click Add Square to display the containers...</h2>
   <Square/>
  </div>
  );
}

export default App;
