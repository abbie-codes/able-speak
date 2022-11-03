import {Container, Row, Col} from 'react-bootstrap';
import Header from './Header';
import Footer from './Footer';
import MainCard from './MainCard';
import SentenceContainer from './SentenceContainer';

function Needs() {
    return (
      <div className="App" >
        <Header/>

        <main className="App-main">

        <SentenceContainer verb="need"></SentenceContainer>
  
            <Container>
                <Row>
                    <Col md><MainCard className="Main-card" title="bath" img="https://img.icons8.com/color/96/000000/bath.png"/></Col>
                    <Col md><MainCard className="Main-card" title="my games" img="https://img.icons8.com/color/96/000000/game-controller.png"/></Col>
                    <Col md><MainCard className="Main-card" title="walk" img="https://img.icons8.com/color/96/000000/accompany-skin-type-3.png"/></Col>
                    <Col md><MainCard className="Main-card" title="quiet time" img="https://img.icons8.com/external-bearicons-flat-bearicons/96/000000/external-QUITE-TIME-capsule-hotel-bearicons-flat-bearicons.png"/></Col>
                </Row>
                <Row >
                    <Col md><MainCard className="Main-card" title="shower" img="https://img.icons8.com/color/96/000000/shower.png"/></Col>
                    <Col md><MainCard className="Main-card" title="sleep" img="https://img.icons8.com/color/96/000000/sleeping-in-bed.png"/></Col>
                    <Col md><MainCard className="Main-card" title="toilet" img="https://img.icons8.com/color/96/000000/wc.png"/></Col>
                    <Col md><MainCard className="Main-card" title="do laundry" img="https://img.icons8.com/color/96/000000/clothes-in-laundry.png"/></Col>
                </Row>
            </Container>
       
        </main>
        <Footer/>
      </div>
    );
  }
  
  export default Needs;