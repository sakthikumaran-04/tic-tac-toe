import { useState } from 'react';
import './App.css';
import Home from './Home/Home';
import Game from './Game/Game';
function App() {

  const [CurrentSection,setCurrentSection]=useState('home');
  const [winner,setWinner]=useState(null);
  const onStartGame= ()=>{
    setTimeout(()=>{
      setCurrentSection('game')
    },300);
  };

  const home = ()=>{
    setTimeout(()=>{
      setCurrentSection('home');
    },300);
    
  }
  const winnerWho=(win)=>{
    setWinner(win)
  }
  return(
  <>
  {CurrentSection==='home' && <Home onStartGame={onStartGame} />}
  {CurrentSection==='game' && <Game home={home}/>}
  </>
  );
}

export default App
