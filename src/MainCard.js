import Card from 'react-bootstrap/Card';
import { Redirect } from 'react-router';
import './MainCard.css';
import "bootstrap/dist/css/bootstrap.min.css";


function MainCard(props) {

  function handleClick() {
    alert("I got clicked!")
  }

  function whenButtonPressed() {

    const msg = new SpeechSynthesisUtterance();
    msg.text = props.title;
    window.speechSynthesis.speak(msg);
  }

  return (
      <div className="card-container">

        <Card className="card" onClick={() => {whenButtonPressed(); handleClick()}} style={{ width: '16rem' }}>
          <Card.Body>
            {
              <Card.Text className="card-text">
                <p key={props.title}>{props.title}</p>
              </Card.Text>
            }
            <Card.Img className="card-img" variant="top" src={props.img} />
          </Card.Body>
        </Card>

      </div>
      );

  // const cards = [
  //   {title: 'FOOD & DRINKS', img: "https://img.icons8.com/color/96/000000/meal.png"},
  //   {title: 'ACTIVITIES', img: "https://img.icons8.com/color/96/000000/jump-skin-type-2.png"},
  //   {title: 'NEEDS', img: "https://img.icons8.com/color/96/000000/toilet-bowl.png"},
  //   {title: 'EMOTIONS', img: "https://img.icons8.com/color/96/000000/smiling-face-with-heart.png"}
  // ]

  // return (
  //   <div className="card-container">
  //     {cards.map((card) => (
  //     <Card className="menu" onClick={() => handleClick()} style={{ width: '15rem' }}>
  //       <Card.Body>
  //         {
  //           <Card.Text className="card-text">
  //             <p key={card.title}>{card.title}</p>
  //           </Card.Text>
  //         }
  //         <Card.Img className="card-img" variant="top" src={card.img} />
  //       </Card.Body>
  //     </Card>
  //     ))}
  //   </div>
  // );
}

export default MainCard;


