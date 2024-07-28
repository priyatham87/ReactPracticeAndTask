// import logo from './logo.svg';
import './App.css';
import UncontrolledForms from './Hooks/Forms/uncontrolledComponents/uncontrolledComponents';
// import UseEffectEx2 from './Hooks/useEffect/useEffectEx2';
import 'bootstrap/dist/css/bootstrap.min.css';
import UncontrolledTask from './Hooks/Forms/uncontrolledComponents/uncontrolledTask';
import Registration from './Hooks/Forms/uncontrolledComponents/registration';
import Samsung from './Hooks/Forms/uncontrolledComponents/samsung';


function App() {
  return (
    <div style={{backgroundColor:'gray'}}>
       <h1>24-7-24--(DAY-18 PRACTICE && TASK)</h1>
       <center><h1>PRACTICE</h1></center>

      {/* <UseEffectEx2/> */}
        <UncontrolledForms/>
  
      <center><h1>TASK</h1></center>
      <UncontrolledTask/>
      <Registration/>
      <Samsung/>
    
  </div>
  );
}

export default App;
