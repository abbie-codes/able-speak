import Card from 'react-bootstrap/Card';
import './MainCard.css';

function MainCard() {

  function handleClick() {
    alert("I got clicked!")
  }

  return (
    <Card className="menu" onClick={() => handleClick()} style={{ width: '15rem' }}>
      <Card.Body>
        <Card.Text className="card-text">
            FOOD & DRINKS
        </Card.Text>
        <Card.Img className="card-img" variant="top" src="https://img.icons8.com/color/96/000000/meal--v1.png" />
      </Card.Body>
    </Card>
  );
}

export default MainCard;


