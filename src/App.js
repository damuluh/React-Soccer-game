import React from 'react';
import './App.css';
import './Components/ScoreBoard/ScoreBoard.css'
import Game from './Components/Games/Game'
import Valen from './Components/Assets/Images/200px-Valenciacf.svg.png'
import Bar from './Components/Assets/Images/bas.jpeg'
import RealM from './Components/Assets/Images/real.jpg'
import AtleticoImage from './Components/Assets/Images/Atletico.png'






function App(props) {
  const Real = {
    name: 'Real Madrid',
    logoSrc: RealM,
  };
  const Barcelona = {
    name: 'FC Barcelona',
    logoSrc: Bar,
  };
  const Atletico = {
    name: 'Atletico Madrid',
    logoSrc: AtleticoImage,
  };
  const Valencia = {
    name: 'Valencia CF',
    logoSrc: Valen,
  };

  return (
    <div className="App">
      <Game
        venue="UEFA Champions League Playing At Santiago Bernabéu Stadium"
        homeTeam={Real}
        visitingTeam={Barcelona}
      />
      <Game
        venue="La Liga Soccer Playing At Mestalla Stadium"
        homeTeam={Atletico}
        visitingTeam={Valencia}
     />
    

     
    </div>
  );
}
export default App
