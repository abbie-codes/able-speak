import { Container, Row, Col } from 'react-bootstrap';
import Header from '../Header';
import Footer from '../Footer';
import MainCard from '../MainCard';
import SentenceContainer from '../SentenceContainer';

function Meat() {
  return (
    <div className="App" >
      <Header />

      <main className="App-main">

        <SentenceContainer verb="want to eat"></SentenceContainer>

        <Container>
          <Row>
            <Col md><MainCard className="Main-card" title="bacon" img="https://img.icons8.com/color/96/000000/bacon.png" /></Col>
            <Col md><MainCard className="Main-card" title="beef" img="https://img.icons8.com/color/96/000000/steak-medium.png" /></Col>
            <Col md><MainCard className="Main-card" title="burger" img="https://img.icons8.com/color/96/000000/hamburger.png" /></Col>
            <Col md><MainCard className="Main-card" title="kebab" img="https://img.icons8.com/color/96/000000/kebab.png" /></Col>
          </Row>
          <Row >
            <Col md><MainCard className="Main-card" title="chicken" img="https://img.icons8.com/color/96/000000/thanksgiving.png" /></Col>
            <Col md><MainCard className="Main-card" title="steak" img="https://img.icons8.com/color/96/000000/steak.png" /></Col>
            <Col md><MainCard className="Main-card" title="salami" img="https://img.icons8.com/color/96/000000/salami.png" /></Col>
            <Col md><MainCard className="Main-card" title="lamb" img="https://img.icons8.com/color/96/000000/rack-of-lamb.png" /></Col>
          </Row>
        </Container>

      </main>
      <Footer />
    </div>
  );
}

export default Meat;