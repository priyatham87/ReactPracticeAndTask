// import logo from './logo.svg';
import './App.css';
import ControlledForms from './Hooks/Forms/controlledComponents/controlledMultiStates';
import 'bootstrap/dist/css/bootstrap.min.css';
import ControlledSingleState from './Hooks/Forms/controlledComponents/controlledSingleState';


function App() {
  return (
    <div >
      <h1>psp</h1>
      <h2>controlled Multistage</h2>
      <ControlledForms/>
      <h2>controlled Singlestage</h2>
      <ControlledSingleState/>
    
  </div>
  );
}

export default App;
