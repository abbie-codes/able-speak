import background from './yellow-background.jpg';
import './App.css';
import './Header_Footer.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Footer';
import Header from './Header';
import MainCard from './MainCard';

function App() {
  return (
    <div className="App">
      <Header/>

      <main className="App-main" style={{ backgroundImage: `url(${background})` }}>
      <MainCard className="Main-card"/>

      </main>
      
      <Footer/>
    </div>
  );
}

export default App;
