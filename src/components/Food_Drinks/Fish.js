import { Container, Row, Col } from 'react-bootstrap';
import Header from '../Header';
import Footer from '../Footer';
import MainCard from '../MainCard';
import background from '../../img/yellow-background.jpg';
import SentenceContainer from '../SentenceContainer';

function Fish() {
  return (
    <div className="App" >
      <Header />

      <main className="App-main" style={{ backgroundImage: `url(${background})` }}>

        <SentenceContainer></SentenceContainer>

        <Container>
          <Row>
            <Col md><MainCard className="Main-card" title="cod" img="https://img.icons8.com/color/96/000000/cod.png" /></Col>
            <Col md><MainCard className="Main-card" title="octopus" img="https://img.icons8.com/color/96/000000/octopus.png" /></Col>
            <Col md><MainCard className="Main-card" title="fish & chips" img={"https://img.icons8.com/external-smashingstocks-glyph-smashing-stocks/96/000000/external-fast-food-food-smashingstocks-glyph-smashing-stocks.png"} /></Col>
            <Col md><MainCard className="Main-card" title="lobster" img="https://img.icons8.com/color/96/000000/lobster.png" /></Col>
          </Row>
          <Row >
            <Col md><MainCard className="Main-card" title="perch" img="https://img.icons8.com/color/96/000000/perch.png" /></Col>
            <Col md><MainCard className="Main-card" title="pike" img="https://img.icons8.com/color/96/000000/pike.png" /></Col>
            <Col md><MainCard className="Main-card" title="prawns" img="https://img.icons8.com/color/96/000000/prawn.png" /></Col>
            <Col md><MainCard className="Main-card" title="sushi" img="https://img.icons8.com/color/96/000000/sushi.png" /></Col>
          </Row>
        </Container>

      </main>
      <Footer />
    </div>
  );
}

export default Fish;