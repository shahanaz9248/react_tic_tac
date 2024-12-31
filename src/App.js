import './App.css';
import {useState} from 'react'
function App() {
  const[player,setPlayer]=useState('0');
  const[flag,setFlag]=useState('true');
  const[count,setCount]=useState(0)
  const winCombo=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]

  function checkWin(){
         let clicked=[]
         for(let i=0;i<=8;i++){
          clicked.push(document.getElementById(`cell${i}`).innerHTML)
         }

        for(let x of winCombo){
          if(x.every(index=>clicked[index]===player) && flag){
            document.getElementById('tr').innerHTML=player + ' is the winner'
            setFlag(false) 
            return
  
          }else if(count===8){
             document.getElementById('tr').innerHTML='It is a Tie'
             
          }
        }
  }

  function Add(clickedCell){
    if(flag){
      if(document.getElementById(clickedCell).innerHTML===""){
          if(player==='0'){
           document.getElementById(clickedCell).innerHTML=player
           setCount(count+1)
           checkWin();         
           setPlayer('X')
          }else{
            document.getElementById(clickedCell).innerHTML=player
            setCount(count+1)
            checkWin();           
            setPlayer('0')
          }
      }else{
        alert('click on empty cell');
      }

    }else{
      alert('Game is over');
    }
           
  }
  
  
  return (
    <>
      <div><h1 style={{color:"rgba(245, 245, 245, 0.575)"}}>Tic Tac Toe</h1></div>
      <div className="container">
         <div className="cell" id="cell0" onClick={()=>{Add('cell0')}}></div>
         <div className="cell" id="cell1" onClick={()=>{Add('cell1')}}></div>
         <div className="cell" id="cell2" onClick={()=>{Add('cell2')}}></div>
         <div className="cell" id="cell3" onClick={()=>{Add('cell3')}}></div>
         <div className="cell" id="cell4" onClick={()=>{Add('cell4')}}></div>
         <div className="cell" id="cell5" onClick={()=>{Add('cell5')}}></div>
         <div className="cell" id="cell6" onClick={()=>{Add('cell6')}}></div>
         <div className="cell" id="cell7" onClick={()=>{Add('cell7')}}></div>
         <div className="cell" id="cell8" onClick={()=>{Add('cell8')}}></div>   
      </div>
      <div>
        <h4 id="tr">player {player}'s turn</h4>
      </div>
      <div>
        <button onClick={()=>{window.location.reload()}} id="btn">Restart Game</button>
      </div>
    </>
  );
}

export default App;
