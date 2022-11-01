import './App.css';
import './Header_Footer.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Footer';
import Header from './Header';
import MainCard from './MainCard';
import {Container, Row, Col} from 'react-bootstrap';


function App() {
  return (
    <div className="App">
      <Header/>

      <main className="App-main">

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
