
import { createContext, useState } from 'react';
import './App.css';
import NavigationStack from './navigations/navigation';
import 'bootstrap/dist/css/bootstrap.min.css'


export const DataContext=createContext();
function App() {

  const [username,setUserName]=useState("psp")
  const [darkmode,setDarkMode]=useState(true)

  const changeUserName=(newname)=>{
    setUserName(newname)
  }

  return (
    <DataContext.Provider
    value={{
      username,
      darkmode,
      changeUserName
    }}
    >
       <NavigationStack/>
    </DataContext.Provider>
    
  );
}

export default App;
