import {Container, Row, Col} from 'react-bootstrap';
import Header from './Header';
import Footer from './Footer';
import MainCard from './MainCard';
import background from '../img/yellow-background.jpg';

function Food_Drinks() {
    return (
      <div className="App" >
        <Header/>

        <main className="App-main" id="Food_Drinks" style={{ backgroundImage: `url(${background})` }}>
  
            <Container>
                <Row>
                    <Col md><MainCard navigateTo="/Fruits" className="Main-card" title="FRUITS" img="https://img.icons8.com/color/96/000000/group-of-fruits.png"/></Col>
                    <Col md><MainCard navigateTo="/Vegetables" className="Main-card" title="VEGETABLES" img="https://img.icons8.com/color/96/000000/group-of-vegetables.png"/></Col>
                    <Col md><MainCard navigateTo="/Dairy" className="Main-card" title="DAIRY" img="https://img.icons8.com/color/96/000000/milk-bottle.png"/></Col>
                </Row>                
                <Row>
                    <Col md><MainCard navigateTo="/Meat" className="Main-card" title="MEAT" img="https://img.icons8.com/color/96/000000/roast.png"/></Col>
                    <Col md><MainCard navigateTo="/Fish" className="Main-card" title="FISH" img="https://img.icons8.com/color/96/000000/koi-fish.png"/></Col>
                    <Col md><MainCard navigateTo="/Drinks" className="Main-card" title="DRINKS" img="https://img.icons8.com/color/96/000000/soda-cup.png"/></Col>
                </Row>
            </Container>
       
        </main>
        <Footer/>
      </div>
    );
  }
  
  export default Food_Drinks;