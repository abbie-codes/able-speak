import { Container, Row, Col } from 'react-bootstrap';
import Header from '../Header';
import Footer from '../Footer';
import MainCard from '../MainCard';
import background from '../../img/yellow-background.jpg';
import SentenceContainer from '../SentenceContainer';

function Drinks() {
  return (
    <div className="App" >
      <Header />

      <main className="App-main" style={{ backgroundImage: `url(${background})` }}>

        <SentenceContainer></SentenceContainer>

        <Container>
          <Row>
            <Col md><MainCard className="Main-card" title="orange juice" img="https://img.icons8.com/color/96/000000/orange-juice.png" /></Col>
            <Col md><MainCard className="Main-card" title="milkshake" img="https://img.icons8.com/color/96/000000/milkshake.png" /></Col>
            <Col md><MainCard className="Main-card" title="cola" img="https://img.icons8.com/color/96/000000/cola.png" /></Col>
            <Col md><MainCard className="Main-card" title="water" img="https://img.icons8.com/color/96/000000/bottle-of-water.png" /></Col>
          </Row>
          <Row >
            <Col md><MainCard className="Main-card" title="tea" img="https://img.icons8.com/color/96/000000/tea.png" /></Col>
            <Col md><MainCard className="Main-card" title="coffee" img="https://img.icons8.com/color/96/000000/cafe--v1.png" /></Col>
            <Col md><MainCard className="Main-card" title="milk" img="https://img.icons8.com/color/96/000000/milk.png" /></Col>
            <Col md><MainCard className="Main-card" title="lemonade" img="https://img.icons8.com/color/96/000000/lemonade.png" /></Col>
          </Row>
        </Container>

      </main>
      <Footer />
    </div>
  );
}

export default Drinks;