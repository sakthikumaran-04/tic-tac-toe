import React, { useState ,useEffect } from 'react'
import './Game.css'
import logo from '../assets/logo.svg'
import icon_x_silver from '../assets/icon-x(silver).svg'
import icon_x from '../assets/icon-x.svg'
import icon_o from '../assets/icon-o.svg'
import icon_restart from '../assets/icon-restart.svg'
function Game(props) {
    const [playerxwins,setplayerxwins]=useState(0);
    const [bothties,setbothties]=useState(0);
    const [playerowins,setplayerowins]=useState(0);
    const [XPlayer,setXPlayer] = useState(true);
    const [gameBoard,setgameBoard]= useState(Array(9).fill(null));
    const [result,setresult] =useState(null);
    console.log(gameBoard);
    useEffect(() => {
        const winner = calculateWinner(gameBoard);
        const tie = isTie(gameBoard);
    
        if (winner) {
          console.log(`Winner: ${winner}`);
          if (winner === 'x') {
            setplayerxwins((x) => x + 1);
            console.log(playerxwins);
            setresult(winner)

          }
          if (winner === 'o') {
            setplayerowins((o) => o + 1);
            console.log(playerowins);
            setresult(winner)
          }
        } else if (tie) {
          setbothties((ties) => ties + 1);
          console.log(bothties);
          setresult("ties")
        } else {
          console.log(`Next player: ${XPlayer ? 'X' : 'O'}`);
        }

      }, [gameBoard, XPlayer]); 


    function insertValue(index){
        if(gameBoard[index] || calculateWinner(gameBoard)){
            return;
        }
        const newBoard=gameBoard.slice();
        newBoard[index] = XPlayer?"x":"o";
        setgameBoard(newBoard);
        setXPlayer(!XPlayer);
    }
    const calculateWinner = (squares) => {
        const lines = [
          [0, 1, 2],
          [3, 4, 5],
          [6, 7, 8],
          [0, 3, 6],
          [1, 4, 7],
          [2, 5, 8],
          [0, 4, 8],
          [2, 4, 6],
        ];
    
        for (let i = 0; i < lines.length; i++) {
          const [a, b, c] = lines[i];
          if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
          }
        }
    
        return null;
      };
      const isTie = (squares) => {
        return squares.every((cell) => cell !== null);
      };
  function reset(){
    setgameBoard(Array(9).fill(null));
    setXPlayer(true);
    setresult(null)
  }

  function changestate(){
    setTimeout(()=>{
        setresult(null);
        setgameBoard(Array(9).fill(null))
    },300);
  }
  function quit(){
    setTimeout(()=>{
        setresult(null);
        setgameBoard(Array(9).fill(null))
        props.home();
    },300);
    
  }

  return (
    <>
    <div className="maincontainer">
        <div className='top'>
            <img src={logo} alt="logo image" className='logo'/>
            <div className="turn">
                <img src={XPlayer? icon_x_silver:icon_o} alt="turn" />
                <p>Turn</p>
            </div>
            <button className='restart' onClick={reset}><img src={icon_restart} alt="restart" /></button>
        </div>
        <div className="board">
        {gameBoard.map((item, index) => (
          <button key={index} id={index} onClick={() => insertValue(index)}>
            {item && <img src={item === 'x' ? icon_x : icon_o} alt="value" />}
          </button>
        ))}
      </div>
        <div className="scores">
            <button className='playerx'>PLAYER X<br/><span className='score'>{playerxwins}</span></button>
            <button className='ties'>TIES<br/> <span className='score'>{bothties}</span></button>
            <button className='playero'>PLAYER O<br/><span className='score'>{playerowins}</span></button>
        </div>
    </div>



    <div className={`result ${result?"block":" "}`}>
  <h1>{result ==='x' ? "Congratulations!!!":(result === "o")?"Congratulations!!!":"Sorry Ties!!!"}</h1>
  <div className="final">
  <img src={result === "x" ? icon_x : (result === "ties" ? logo : (result ==="o" ? icon_o:" "))} alt="" />
  <p>TAKES THE ROUND</p>
  </div>
  <div className="buttons">
    <button onClick={quit} className='quit'>QUIT</button>
    <button onClick={changestate} className='nextround'>NEXT ROUND</button>
  </div>
  </div>
    </>
  )
}

export default Game