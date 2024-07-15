import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Customlist from '../Orderlist/ol';

function CustomCard(prop) {
    const {iteam}=prop;
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={iteam.image} />
      <Card.Body>
        <Card.Title>{iteam.name}</Card.Title>
        <h6 style={{color:'red', margin:'10px'}}>Ingredients :</h6>
        <Customlist iterable={iteam.ingredients}/>
        <h6 style={{color:'red', margin:'10px'}}>Instructions :</h6>
       <Customlist iterable={iteam.instructions}/>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default CustomCard;