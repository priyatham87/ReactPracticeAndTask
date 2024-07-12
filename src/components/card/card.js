import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Image } from "../image/image"

function Customcard(prop) {
    const {jerseyimg}=prop.data
  return (
    <Card style={{ width: '18rem' }}>
      <Image source={jerseyimg} 
            altText="ipldata"
            width={300} 
            height={250}>
         </Image>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default Customcard;







// import { Heading3, Heading4 } from "../heading/heading"

// import "./card.css"


// export const Customcard=(prop)=>{
//     const {team,cups,jerseyimg}=prop.data
//     return(
//        <div className='card'>
//         <Heading3 title={team}></Heading3>
//         <Image source={jerseyimg} 
//             altText="ipldata"
//             width={300} 
//             height={250}>
//         </Image>
//         <Heading4 cups={cups}></Heading4>
//        </div>
//     )
// }