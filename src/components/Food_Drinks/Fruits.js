import { Container, Row, Col } from 'react-bootstrap';
import Header from '../Header';
import Footer from '../Footer';
import MainCard from '../MainCard';
import SentenceContainer from '../SentenceContainer';

function Fruits() {
  return (
    <div className="App" >
      <Header />

      <main className="App-main">

        <SentenceContainer></SentenceContainer>

        <Container>
          <Row>
            <Col md><MainCard className="Main-card" title="orange" img="https://img.icons8.com/color/96/000000/orange.png" /></Col>
            <Col md><MainCard className="Main-card" title="banana" img="https://img.icons8.com/color/96/000000/peeled-banana.png" /></Col>
            <Col md><MainCard className="Main-card" title="apple" img="https://img.icons8.com/color/96/000000/whole-apple.png" /></Col>
            <Col md><MainCard className="Main-card" title="strawberry" img="https://img.icons8.com/color/96/000000/strawberry.png" /></Col>
          </Row>
          <Row >
            <Col md><MainCard className="Main-card" title="berries" img="https://img.icons8.com/color/96/000000/raspberry.png" /></Col>
            <Col md><MainCard className="Main-card" title="pineapple" img="https://img.icons8.com/color/96/000000/pineapple.png" /></Col>
            <Col md><MainCard className="Main-card" title="mango" img="https://img.icons8.com/color/96/000000/mango.png" /></Col>
            <Col md><MainCard className="Main-card" title="avocado" img="https://img.icons8.com/color/96/000000/avocado.png" /></Col>
          </Row>
        </Container>

      </main>
      <Footer />
    </div>
  );
}

export default Fruits;