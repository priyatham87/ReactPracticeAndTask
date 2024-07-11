// import logo from './logo.svg';
import './App.css';

import  { ButtonContent, GeneralButton } from './components/button/button';
import  {  Heading3, Heading4 } from './components/headings/heading';
import OrderList from './components/list/orderlist';
import  { UserProfile } from './components/profile/profilecomponent';
import {  ImageJacket, ImageShirt } from './components/image/coustomimage';
import { BiriyaniList, ListFruit } from './components/list/listiteams';
import { iplData, jacketData } from './components/list/fruitdata';
function App() {
  return (
    <div>
      

      <h1>10-7-24--(DAY-7 PRACTICE && TASK)</h1>
      <center><h1>PRACTICE</h1></center>
      <h2>jsx rule-1</h2>
      <OrderList></OrderList>
      <h2>jsx rule-2</h2>
      <ImageShirt></ImageShirt>
      <h2>jsx rule-3</h2>
      <UserProfile></UserProfile>

      <ListFruit></ListFruit>

      <BiriyaniList></BiriyaniList>

      <ButtonContent bgColor="blue" width={100}></ButtonContent>
      <ButtonContent text="Login" bgColor="orange" width={100}></ButtonContent>
      <ButtonContent text="Submit" bgColor="green" width={100}></ButtonContent>
      
      <br></br>
      <GeneralButton properties={{text: "Login",bgColor:"red"}}></GeneralButton>
      <GeneralButton properties={{text: "Login",bgColor:"grey"}}></GeneralButton>
      <GeneralButton properties={{text: "Login",bgColor:"violet"}}></GeneralButton>
      

      <br></br>


      <ImageJacket source="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg" altText="jacket" width={100} height={100}></ImageJacket>


      {
        jacketData.map(eachdata=>{
          return (
            <div>
              <ImageJacket source={eachdata.source} 
              altText="jacket"
               width={100} 
               height={100}/>
               <Heading3 title={eachdata.name}></Heading3>
            </div>
          )
        })
      }

      <center><h1>TASK</h1></center>
      {
        iplData.map(eachdata=>{
          return (
            <div>
              <center>
                  
              <Heading3 title={eachdata.team}></Heading3>
              <ImageJacket source={eachdata.source} 
              altText="jacket"
               width={300} 
               height={200}/>
               <Heading4 trophy={eachdata.cups}></Heading4>
               
              </center>
            </div>
          )
        })
      }












    </div>
  );
}
export default App;
