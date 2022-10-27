import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Food_Drinks from './Food_Drinks';
import Activities from './Activities';
import Needs from './Needs';
import Emotions from './Emotions';
import About from './About';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import DragDropTest from './DragDropTest';

const Routing = () => {
  return(
    <Router>
      <div>
        <nav>
          {/* <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="about">About</Link>
            </li>
          </ul> */}
        </nav>

        <Routes>
          <Route path="/" index element = {<App />} />
          <Route path="/food_drinks" element = {<Food_Drinks/>} />
          <Route path="/activities" element = {<Activities/>} />
          <Route path="/needs" element = {<Needs/>} />
          <Route path="/emotions" element = {<Emotions/>} />
          <Route path="/about" element = {<About />} />
          <Route path="/dragtest" element = {<DragDropTest/>} />
        </Routes>
      </div>
    </Router>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <Routing />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
