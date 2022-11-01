import {Container, Row, Col} from 'react-bootstrap';
import Header from './Header';
import Footer from './Footer';
import MainCard from './MainCard';

function Emotions() {
    return (
      <div className="App" >
        <Header/>

        <main className="App-main">
  
            <Container>
                <Row>
                    <Col md><MainCard className="Main-card" title="happy" img="https://img.icons8.com/emoji/96/000000/grinning-face-with-big-eyes--v2.png"/></Col>
                    <Col md><MainCard className="Main-card" title="cheerful" img="https://img.icons8.com/emoji/96/000000/partying-face.png"/></Col>
                    <Col md><MainCard className="Main-card" title="naughty" img="https://img.icons8.com/emoji/96/000000/face-with-hand-over-mouth.png"/></Col>
                    <Col md><MainCard className="Main-card" title="silly" img="https://img.icons8.com/emoji/96/000000/face-with-tongue.png"/></Col>
                </Row>
                <Row >
                    <Col md><MainCard className="Main-card" title="surprised" img="https://img.icons8.com/emoji/96/000000/hushed-face.png"/></Col>
                    <Col md><MainCard className="Main-card" title="shy" img="https://img.icons8.com/emoji/96/000000/flushed-face.png"/></Col>
                    <Col md><MainCard className="Main-card" title="sad" img="https://img.icons8.com/emoji/96/000000/pensive-face.png"/></Col>
                    <Col md><MainCard className="Main-card" title="angry" img="https://img.icons8.com/emoji/96/000000/angry-face-emoji--v2.png"/></Col>
                </Row>
            </Container>
       
        </main>
        <Footer/>
      </div>
    );
  }
  
  export default Emotions;