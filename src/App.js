import background from './img/yellow-background.jpg';
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

      <main className="App-main" style={{ backgroundImage: `url(${background})` }}>

      <Container>
        <Row>
          <Col md><MainCard className="Main-card" title="FOOD & DRINKS" img="https://img.icons8.com/color/96/000000/meal.png"/></Col>
          <Col md><MainCard className="Main-card" title="ACTIVITIES" img="https://img.icons8.com/color/96/000000/jump-skin-type-2.png"/></Col>
        </Row>
        <Row >
          <Col md><MainCard className="Main-card" title="NEEDS" img="https://img.icons8.com/color/96/000000/toilet-bowl.png"/></Col>
          <Col md><MainCard className="Main-card" title="EMOTIONS" img="https://img.icons8.com/color/96/000000/smiling-face-with-heart.png"/></Col>
        </Row>
      </Container>
     



      
      
      
      
      </main>
      
      <Footer/>
    </div>
  );
}

export default App;
