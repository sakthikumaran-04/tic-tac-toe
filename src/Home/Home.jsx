import React, { useState } from 'react'
import './Home.css'
import logo from '../assets/logo.svg'
import icon_x_grey from '../assets/icon-x(grey).svg'
import icon_o_grey from '../assets/icon-o(grey).svg'
import icon_x_silver from '../assets/icon-x(silver).svg'
import icon_o_silver from '../assets/icon-o(silver).svg'
function Home(props) {

    function handleChange(item){
        setPlayer(item);    
    }

    const [player,setPlayer]= useState("o");
  return (
    <div className="container">
      <img src={logo} alt="logo image" />
      <div className="card">
        <p> PICK PLAYER 1'S MARK</p>
        <div className="item">
          <button className={`home_x ${player==="x"?"active":" "}`} onClick={() => handleChange("x")}><img src={player==="x"?icon_x_grey:icon_x_silver} alt="icon x" /></button>
          <button className={`home_o ${player==="o"?"active":" "}`} onClick={() => handleChange("o")}><img src={player==="o"?icon_o_grey:icon_o_silver} alt="icon o" /></button>
        </div>
        <p className='lighten'>REMEMBER: X GOES FIRST</p>
      </div>
      <button className='newgame' onClick={()=>props.onStartGame()}>NEW GAME</button>
    </div>
  )
}

export default Home