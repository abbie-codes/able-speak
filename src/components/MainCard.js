import Card from 'react-bootstrap/Card';
import { Redirect } from 'react-router';
import './MainCard.css';
import "bootstrap/dist/css/bootstrap.min.css";


function MainCard(props) {

  function whenButtonPressed() {

    const msg = new SpeechSynthesisUtterance();
    msg.text = props.title;
    window.speechSynthesis.speak(msg);
  }

  const dragStart = (e) => {
    const target = e.target;
    e.dataTransfer.setData("div_id", target.id);
  };

  const dragOver = (e) => {
    e.stopPropagation();
  };

  return (
    <div className="card-container">
      <a href={props.navigateTo} >
        <Card className="card" data-testid="card-button" id={props.title} onClick={() => { whenButtonPressed() }} style={{ width: '16rem' }} draggable onDragStart={dragStart} onDragOver={dragOver}>
          <Card.Body>
            {
              <Card.Text className="card-text">
                <p key={props.title}>{props.title}</p>
              </Card.Text>
            }
            <Card.Img className="card-img" variant="top" src={props.img} draggable="false"/>
          </Card.Body>
        </Card>
      </a>

    </div>
  );
}

export default MainCard;


