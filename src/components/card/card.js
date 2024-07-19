import "./card.css"
import { Image } from "../image/image"
import { Heading3, Heading4 } from "../heading/heading"
import { Btn } from "../button/button"
import Card from 'react-bootstrap/Card';
import CustomProgressbar from "../progressbar/progressbar";


function Customcard(prop) {
    const {title,image,price}=prop.data
  return (
   <div className="card">
     <Card style={{ width: '18rem' }}>
      <Image source={image} width={250} height={180}/>
      <Card.Body>
        <Heading3 title={title}></Heading3>
        <Heading4 cups={price}></Heading4>
        <CustomProgressbar prices={price}></CustomProgressbar>
        <br></br>
        <Btn text={"Show More"}></Btn>
      </Card.Body>
    </Card>
   </div>
  );
}

export default Customcard;