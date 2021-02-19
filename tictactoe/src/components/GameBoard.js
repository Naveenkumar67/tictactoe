import React, { useState } from 'react';
import Square from "./Square";
const GameBoard = () => {
    const [currentPlayer,setCurrentPlayer]=useState("X");
    const [gameState,setGameState]=useState([
        {value:null},{value:null},{value:null},
        {value:null},{value:null},{value:null},
        {value:null},{value:null},{value:null}
    ]);
    const exec= index =>{
        let updateSt=gameState;
        if(updateSt[index].value===null){
            updateSt[index].value=currentPlayer;
            setGameState(updateSt);
            let nextPlayer= currentPlayer==="X"?"O":"X";
           setCurrentPlayer(nextPlayer);
        }
    }
    return (
        <>
            <div className="col-md-12 col-12 text-center">
               <h2>CurrentPlayer : {currentPlayer}</h2>
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