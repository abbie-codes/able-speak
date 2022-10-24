import soundWaveLeft from './sound-wave-left.png';
import soundWaveRight from './sound-wave-right.png';
import background from './yellow-background.jpg';
import './App.css';

function App() {
  return (
    <div className="App">

      <header className="App-header">

        <img src={soundWaveLeft} height="64px" alt="logo"/>

        able speak

        <img src={soundWaveRight} height="64pc" alt="logo"/>

      </header>

      <main className="App-main" style={{ backgroundImage: `url(${background})` }}>

      </main>

      <footer>
        copyright 2022
      </footer>

    </div>
  );
}

export default App;
