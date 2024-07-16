// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Customlist from '../Orderlist/ol';
import "./card.css"




function CustomCard(prop) {
    const {iteam}=prop;
    var c = iteam.id%2==0?"red":"blue";
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={iteam.image} />
      <Card.Body>
      <Card.Title className={c}>{iteam.name}</Card.Title>
        <h6 style={{color:'purple', margin:'10px'}}>Ingredients :</h6>
        <Customlist iterable={iteam.ingredients}></Customlist>
        <h6 style={{color:'purple', margin:'10px'}}>Instructions :</h6>
        <Customlist iterable={iteam.instructions}></Customlist>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
  );
}

export default CustomCard;