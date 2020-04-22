import React, { useState,useEffect } from 'react';
import './Timer.css';
import {TiMediaPlay ,TiMediaPause}from "react-icons/ti";

const Timer=({time,autostart,step,onTick,onTimeStart,onTimePause,onTimeEnd})=>{  
const [ count,setCount]=useState(time);
const [activeTimer,setActive]=useState(false);

function changeActive(){
    setActive(!activeTimer)
    activeTimer ? onTimePause():onTimeStart();

}

useEffect(()=>{
    
    if(activeTimer ||autostart){
    const id=setInterval(()=>{
        setCount( count=>count-1);
        onTick(count);
        },step);
        if(count===0){
            onTimeEnd();
            changeActive()
           
        }
    return ()=>clearInterval(id);
}
},[activeTimer, autostart, step, onTick, count, onTimeStart, onTimeEnd, changeActive]);
return(
    <div className="buttons_content">
        <div className="timer">{count}</div>
        { activeTimer
        ? (
        <button className="button_start" onClick={() => changeActive(true)}><span><TiMediaPause /></span></button>
        )
        :(
         <button className="button_start" onClick={() => changeActive(false)}><span><TiMediaPlay /></span></button>
        )
        }  
    </div>
);
};
export default Timer;

