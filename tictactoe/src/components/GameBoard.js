import React, { useState } from 'react';
import Square from "./Square";
const GameBoard = () => {
    const [currentPlayer,setCurrentPlayer]=useState("X");
    const[moves,setMoves]=useState(0);
    const empty=[
        {value:null},{value:null},{value:null},
        {value:null},{value:null},{value:null},
        {value:null},{value:null},{value:null}
    ]
    const [gameState,setGameState]=useState(empty);
    const exec= index =>{
        let updateSt=gameState;
        if(updateSt[index].value===null){
            updateSt[index].value=currentPlayer;
            setGameState(updateSt);
            let nextPlayer= currentPlayer==="X"?"O":"X";
           setCurrentPlayer(nextPlayer);
           let res=check();
           if(res!==false){
           alert(`Player ${res} wins`)
           }
           setMoves(moves+1);
           if(moves==8){
               alert("draw");
           }
        }
    }

    const check=()=>{
        const winningConditions = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
          ];
          let win=false;
        for(let i=0;i<winningConditions.length;i++){
            let condition=winningConditions[i];
            let a=gameState[condition[0]].value;
            let b=gameState[condition[1]].value;
            let c=gameState[condition[2]].value;
            if(a!=null && b!=null && c!=null && a==b && b==c){
             win=a;
             break;
            }
           
        }  
        return win;
    }
    const reset=()=>{
        let game=gameState;
        game=empty;
        setGameState(game);
        let cur=currentPlayer;
        cur="X";
        setCurrentPlayer(cur);
    }




    return (
        <>
            <div className="col-md-12 col-12 text-center">
               <h2>CurrentPlayer : {currentPlayer}</h2>
               <button onClick={reset}>Reset</button>
            </div>
            
            <div className="bg-white col-md-6 
            offset-md-3 gameBoard shadow-sm row p-4">
                {gameState.map((square,key)=>(
                    <Square key={key} index={key} executor={exec}
                    gameState={gameState}/>
                ))}
                
            </div>
            
        </>
    );
};

export default GameBoard;