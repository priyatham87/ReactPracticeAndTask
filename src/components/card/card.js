import "./card.css"
import { Image } from "../image/image"
import { Heading3, Heading4 } from "../heading/heading"
import { Btn } from "../button/button"
import Card from 'react-bootstrap/Card';
import CustomProgressbar from "../progressbar/progressbar";

export const Cards=()=>{
    return(
        <div className="card">
            <Image source={"https://i.pinimg.com/236x/a6/40/a6/a640a6cd05dc2dfb58ce3ff3467df677.jpg"} width={300} height={220}>
            </Image>
            <Heading3 title={"RCB"}></Heading3>
            <Heading4 cups={0}></Heading4>
            <Btn text={"Show More"}></Btn>

        </div>
    )
}
export const OrderList=(prop)=>{
    const {list}=prop
    return(
       <ol>
        {
            list.map((each,i)=><li key={i}>{each}</li>)
        }
       </ol>
    )
}



function Customcard(prop) {
    const {title,image,price}=prop.data
  return (
   <div className="card">
     <Card style={{ width: '18rem' }}>
      <Image source={image} width={250} height={180}/>
      <Card.Body>
        <Heading3 title={title}></Heading3>
        <Heading4 cups={price}></Heading4>
        <Btn text={"Show More"}></Btn>
        <CustomProgressbar prices={price}></CustomProgressbar>
      </Card.Body>
    </Card>
   </div>
  );
}

export default Customcard;