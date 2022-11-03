import React from "react";
import soundWaveLeft from '../img/sound-wave-left.png';
import soundWaveRight from '../img/sound-wave-right.png';
import './Header_Footer.css';

function Header() {
  return (
    <header className="App-header">

        <img src={soundWaveLeft} height="64px" alt="logo"/>

        <a href="/"><p>able speak</p></a>

        <img src={soundWaveRight} height="64px" alt="logo"/>

    </header>
  );
}

export default Header;