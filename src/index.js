import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Food_Drinks from './components/Food_Drinks';
import Fruits from './components/Food_Drinks/Fruits';
import Activities from './components/Activities';
import Needs from './components/Needs';
import Emotions from './components/Emotions';
import Vegetables from './components/Food_Drinks/Vegetables';
import Dairy from './components/Food_Drinks/Dairy';
import Meat from './components/Food_Drinks/Meat';
import Drinks from './components/Food_Drinks/Drinks';
import Fish from './components/Food_Drinks/Fish';
import About from './components/About';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';



const Routing = () => {
  return(
    <Router>
      <div>
        {/* <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="food_drinks">Food & Drinks</Link>
            </li>
          </ul>
        </nav> */}

        <Routes>
          <Route path="/" index element = {<App />} />
          <Route path="/food_drinks" element = {<Food_Drinks/>} />
          <Route path="/fruits" element = {<Fruits/>} />
          <Route path="/vegetables" element = {<Vegetables/>} />
          <Route path="/dairy" element = {<Dairy/>} />
          <Route path="/meat" element = {<Meat/>} />
          <Route path="/drinks" element = {<Drinks/>} />
          <Route path="/fish" element = {<Fish/>} />
          <Route path="/activities" element = {<Activities/>} />
          <Route path="/needs" element = {<Needs/>} />
          <Route path="/emotions" element = {<Emotions/>} />
          <Route path="/about" element = {<About />} />
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
