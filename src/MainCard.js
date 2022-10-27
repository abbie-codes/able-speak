import Card from 'react-bootstrap/Card';
import './MainCard.css';

function MainCard() {

  const cards = [
    {title: 'FOOD & DRINKS', img: "https://img.icons8.com/color/96/000000/tomato.png"},
    {title: 'ACTIVITIES', img: "test"},
    {title: 'NEEDS', img: "test"},
    {title: 'EMOTIONS', img: "test"}
  ]

  return (
    <div className="card-container">
      {cards.map((card) => (
      <Card className="menu" id={card.title} style={{ width: '15rem' }}>
        <Card.Body>
          {
            <Card.Text className="card-text">
              <p key={card.title}>{card.title}</p>
            </Card.Text>
          }
          <Card.Img className="card-img" variant="top" src={card.img} />
        </Card.Body>
      </Card>
      ))};
    </div>
  );
}

export default MainCard;