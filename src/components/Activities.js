import {Container, Row, Col} from 'react-bootstrap';
import Header from './Header';
import Footer from './Footer';
import MainCard from './MainCard';
import SentenceContainer from './SentenceContainer';


function Activities() {
    return (
      <div className="App" >
        <Header/>

        <main className="App-main">

        <SentenceContainer verb="want"></SentenceContainer>
  
            <Container>
                <Row>
                    <Col md><MainCard className="Main-card" title="music" img="https://img.icons8.com/color/96/000000/piano.png"/></Col>
                    <Col md><MainCard className="Main-card" title="fishing" img="https://img.icons8.com/color/96/000000/fishing-pole.png"/></Col>
                    <Col md><MainCard className="Main-card" title="roller skating" img="https://img.icons8.com/color/96/000000/roller-skates.png"/></Col>
                    <Col md><MainCard className="Main-card" title="skiing" img="https://img.icons8.com/color/96/000000/skiing.png"/></Col>
                </Row>
                <Row >
                    <Col md><MainCard className="Main-card" title="cooking" img="https://img.icons8.com/color/96/000000/cooking.png"/></Col>
                    <Col md><MainCard className="Main-card" title="running" img="https://img.icons8.com/color/96/000000/running.png"/></Col>
                    <Col md><MainCard className="Main-card" title="swimming" img="https://img.icons8.com/color/96/000000/swimming.png"/></Col>
                    <Col md><MainCard className="Main-card" title="volleyball" img="https://img.icons8.com/color/96/000000/volleyball-player.png"/></Col>
                </Row>
            </Container>
       
        </main>
        <Footer/>
      </div>
    );
  }
  
  export default Activities;