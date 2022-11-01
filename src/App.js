import background from './img/yellow-background.jpg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';
import Header from './components/Header';
import MainCard from './components/MainCard';
import SentenceContainer from './components/SentenceContainer';

function App() {
  return (
    <div className="App">
      <Header/>

      <main className="App-main" style={{ backgroundImage: `url(${background})` }}>
      {/* <MainCard className="Main-card"/> */}
      <SentenceContainer/>

      </main>
      
      <Footer/>
    </div>
  );
}

export default App;
