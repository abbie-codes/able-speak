import {Container, Row, Col} from 'react-bootstrap';
import Header from '../Header';
import Footer from '../Footer';
import MainCard from '../MainCard';

function Vegetables() {
    return (
      <div className="App" >
        <Header/>

        <main className="App-main">
  
            <Container>
                <Row>
                    <Col md><MainCard className="Main-card" title="tomato" img="https://img.icons8.com/color/96/000000/tomato.png"/></Col>
                    <Col md><MainCard className="Main-card" title="potato" img="https://img.icons8.com/color/96/000000/potato.png"/></Col>
                    <Col md><MainCard className="Main-card" title="peas" img="https://img.icons8.com/color/96/000000/peas.png"/></Col>
                    <Col md><MainCard className="Main-card" title="salad" img="https://img.icons8.com/color/96/000000/greek-salad.png"/></Col>
                </Row>
                <Row >
                    <Col md><MainCard className="Main-card" title="broccoli" img="https://img.icons8.com/color/96/000000/broccoli.png"/></Col>
                    <Col md><MainCard className="Main-card" title="cauliflower" img="https://img.icons8.com/color/96/000000/cauliflower.png"/></Col>
                    <Col md><MainCard className="Main-card" title="spinach" img="https://img.icons8.com/color/96/000000/spinach.png"/></Col>
                    <Col md><MainCard className="Main-card" title="mushroom" img="https://img.icons8.com/color/96/000000/mushroom.png"/></Col>
                </Row>
            </Container>
       
        </main>
        <Footer/>
      </div>
    );
  }
  
  export default Vegetables;