// import logo from './logo.svg';
import './App.css';
import ControlledForms from './Hooks/Forms/controlledComponents/controlledMultiStates';
import 'bootstrap/dist/css/bootstrap.min.css';
import ControlledSingleState from './Hooks/Forms/controlledComponents/controlledSingleState';
import LoginForm from './Hooks/Forms/controlledComponents/LoginForm';
import RegistrationForm from './Hooks/Forms/controlledComponents/Registration';


function App() {
  return (
    <div style={{backgroundColor:"GrayText"}}>
       <h1>26-7-24--(DAY-20 PRACTICE && TASK)</h1>
       <center><h1>PRACTICE</h1></center>
      <h2>controlled Multistage</h2>
      <ControlledForms/>
      <h2>controlled Singlestage</h2>
      <ControlledSingleState/> 

      <center><h1>TASK</h1><h2>LOGIN</h2></center>
      <LoginForm/>
      <center><h2>REGISTRATION</h2></center>
      <RegistrationForm/>
  </div>
  );
}

export default App;
