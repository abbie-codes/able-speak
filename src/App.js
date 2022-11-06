import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';
import Header from './components/Header';
import MainCard from './components/MainCard';
import {Container, Row, Col} from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Header/>

      <main className="App-main">

      <Container>
        <Row>
          <Col md><MainCard navigateTo="/Food_Drinks" className="Main-card" title="FOOD & DRINKS" data-testid="main-card" img="https://img.icons8.com/color/96/000000/meal.png"/></Col>
          <Col md><MainCard navigateTo="/Activities" className="Main-card" title="ACTIVITIES" data-testid="main-card" img="https://img.icons8.com/color/96/000000/jump-skin-type-2.png"/></Col>
        </Row>
        <Row >
          <Col md><MainCard navigateTo="/Needs" className="Main-card" title="NEEDS" data-testid="main-card" img="https://img.icons8.com/color/96/000000/toilet-bowl.png"/></Col>
          <Col md><MainCard navigateTo="/Emotions" className="Main-card" title="EMOTIONS" data-testid="main-card" img="https://img.icons8.com/color/96/000000/smiling-face-with-heart.png"/></Col>
        </Row>
      </Container>
    

      </main>
      
      <Footer/>
    </div>
  );
}

export default App;
