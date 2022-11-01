import React from "react";
import soundWaveLeft from './sound-wave-left.png';
import soundWaveRight from './sound-wave-right.png';

function Header() {
  return (
    <header className="App-header">

        <img src={soundWaveLeft} height="64px" alt="logo"/>

        <p>able speak</p>

        <img src={soundWaveRight} height="64px" alt="logo"/>

    </header>
  );
}

export default Header;