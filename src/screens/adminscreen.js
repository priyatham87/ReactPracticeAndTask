import { useAxios } from "../customHook/useAxios";
import withProfileData from "../hoc/profiledata";
import UseMemo from "../memorization/useMemo";
import NavBar from "../navbar/navbar";

const AdminScreen=(prop)=>{
    const {username}=prop.data
    const [data, error, loading] = useAxios();
    if (error) {
        return (
          <>
            <h3>Something went wrong</h3>;
          </>
        );
      }
    return(
        <>
        <NavBar/>
        <h2>welcome to AdminScreen page {username}...</h2>
        {loading ? <h3>data not found</h3> : data.map(each=><img src={each.image} alt="" width={100} height={100}/>)}
        <UseMemo/>
           
        </>
    )
}
export default withProfileData(AdminScreen);