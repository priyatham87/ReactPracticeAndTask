// import logo from './logo.svg';
import './App.css';

import CustomButtom from './components/button/button';
import MainHeading , { Heading2 as SecondaryHeading } from './components/headings/heading';
import OrderList from './components/list/orderlist';
import UnOrderList from './components/list/unorderlist';
import ProfileComponent from './components/profile/profilecomponent';

function App() {
  return (
    <div>
      <h1>9-7-24--(DAY-6 PRACTICE && TASK)</h1>
      <CustomButtom/>
      <h1>hi react</h1>
      <CustomButtom/>
      <CustomButtom/>
      <MainHeading/>
      <SecondaryHeading />
      <OrderList/>
      <UnOrderList/>
      <ProfileComponent></ProfileComponent>
    </div>
  );
}
export default App;
