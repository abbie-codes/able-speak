import {Container, Row, Col} from 'react-bootstrap';
import Header from './Header';
import Footer from './Footer';
import MainCard from './MainCard';

function Food_Drinks() {
    return (
      <div className="App" >
        <Header/>

        <main className="App-main" id="Food_Drinks">
  
            <Container>
                <Row>
                    <Col md><MainCard className="Main-card" title="FRUITS" img="https://img.icons8.com/color/96/000000/group-of-fruits.png"/></Col>
                    <Col md><MainCard className="Main-card" title="VEGETABLES" img="https://img.icons8.com/color/96/000000/group-of-vegetables.png"/></Col>
                    <Col md><MainCard className="Main-card" title="DAIRY" img="https://img.icons8.com/color/96/000000/milk-bottle.png"/></Col>
                </Row>                
                <Row>
                    <Col md><MainCard className="Main-card" title="MEAT" img="https://img.icons8.com/color/96/000000/roast.png"/></Col>
                    <Col md><MainCard className="Main-card" title="FISH" img="https://img.icons8.com/color/96/000000/koi-fish.png"/></Col>
                    <Col md><MainCard className="Main-card" title="DRINKS" img="https://img.icons8.com/color/96/000000/soda-cup.png"/></Col>
                </Row>
            </Container>
       
        </main>
        <Footer/>
      </div>
    );
  }
  
  export default Food_Drinks;