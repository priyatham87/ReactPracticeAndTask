import { Link, Outlet } from "react-router-dom";

function DoctorScreen(){
    return(
        <>
        <h2>list of doctors</h2>
        <Link to={"new"}>New Doctor</Link>
        <Link to={"old"}>old Doctor</Link>
        <Outlet/>
        </>
    )
}
export default DoctorScreen;

export const NewDoctors = () => {
    return (
      <>
        <h3>List of new doctors</h3>
      </>
    );
  };
  
  export const OldDoctors = () => {
    return (
      <>
        <h3>List of Old doctors</h3>
      </>
    );
  };