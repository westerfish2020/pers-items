import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import './ItemCard.module.css';


function ItemCard(props) {
  return (
      <Card className="col-6" >
        <Card.Img className='card-img-top' variant="top" src={props.image}/>
        <Card.Body>
          <Card.Title>{props.name}</Card.Title>
          <Card.Text>
            {props.desc}
          </Card.Text>
          <ul>
            <li>Category:  {props.category}</li>
            <li>Value:  {props.value}</li>
            <li>Location:  {props.location}</li>
          </ul>
          <a href={props.image} target="_blank" className="btn btn-info" role="button">See Larger Picture</a>
        </Card.Body>
      </Card>
  );
}

export default ItemCard;