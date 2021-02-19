import React from 'react';

const Square = ({index,executor,gameState}) => {
    const line=(index)=>{
        let ans="";
        if(index<=2){
            ans+=" borbot";
        }
        if(index>=6){
            ans+=" bortop";
        }
        if(index===1 || index===4 || index===7){
            ans+=" borlr";
        }
        return ans;
    }
    const ch=(index,curPl)=>{
        document.getElementById(index).innerHTML=curPl;
    }
    return (
        <div className={`fs text-center gameSq ${line(index)} `} onClick={e=>executor(index)}>
            {gameState[index].value}
        </div>
    );
};

export default Square;