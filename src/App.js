
import { createContext, useState } from 'react';
import './App.css';
import NavigationStack from './navigations/navigation';
import 'bootstrap/dist/css/bootstrap.min.css'



export const DataContext=createContext();
function App() {

  const [username,setUserName]=useState("psp")
  const [darkmode,setDarkMode]=useState(true)
  const [counter,setCounter]=useState(100)

  const changeUserName=(newname)=>{
    setUserName(newname)
  }

  const changeCounter=(value)=>{
    setCounter(counter+value)
  }

  return (
    <DataContext.Provider
    value={{
      username,
      darkmode,
      changeUserName,
      counter,
      changeCounter
    }}
    >
       <NavigationStack/>
    </DataContext.Provider>
    
    
  );
}

export default App;
