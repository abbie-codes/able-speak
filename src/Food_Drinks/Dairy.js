import {Container, Row, Col} from 'react-bootstrap';
import Header from '../Header';
import Footer from '../Footer';
import MainCard from '../MainCard';

function Dairy() {
    return (
      <div className="App" >
        <Header/>

        <main className="App-main">
  
            <Container>
                <Row>
                    <Col md><MainCard className="Main-card" title="cheese" img="https://img.icons8.com/color/96/000000/cheese.png"/></Col>
                    <Col md><MainCard className="Main-card" title="butter" img="https://img.icons8.com/color/96/000000/butter.png"/></Col>
                    <Col md><MainCard className="Main-card" title="pancakes" img="https://img.icons8.com/color/96/000000/pancake.png"/></Col>
                    <Col md><MainCard className="Main-card" title="ice cream" img="https://img.icons8.com/color/96/000000/ice-cream-cone.png"/></Col>
                </Row>
                <Row >
                    <Col md><MainCard className="Main-card" title="yogurt" img="https://img.icons8.com/color/96/000000/yogurt.png"/></Col>
                    <Col md><MainCard className="Main-card" title="mozzarella" img="https://img.icons8.com/color/96/000000/mozzarella.png"/></Col>
                    <Col md><MainCard className="Main-card" title="croissant" img="https://img.icons8.com/color/96/000000/croissant.png"/></Col>
                    <Col md><MainCard className="Main-card" title="sundae" img="https://img.icons8.com/color/96/000000/ice-cream-bowl.png"/></Col>
                </Row>
            </Container>
       
        </main>
        <Footer/>
      </div>
    );
  }
  
  export default Dairy;