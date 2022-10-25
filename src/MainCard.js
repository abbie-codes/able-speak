import Card from 'react-bootstrap/Card';
import './MainCard.css';

function MainCard() {
  return (
    <Card className="menu" style={{ width: '15rem' }}>
      <Card.Body>
        <Card.Text className="card-text">
            FOOD & DRINKS
        </Card.Text>
        <Card.Img className="card-img" variant="top" src="https://img.icons8.com/color/96/000000/tomato.png" />
      </Card.Body>
    </Card>
  );
}

export default MainCard;