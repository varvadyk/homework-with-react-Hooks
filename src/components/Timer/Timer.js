import React, { useState,useEffect } from 'react';
import './Timer.css';
import {TiMediaPlay}from "react-icons/ti";
import {TiMediaPause}from "react-icons/ti";
const Timer=({time,autostart,step,onTick,onTimeStart,onTimePause,onTimeEnd})=>{
   
const [ count,setCount]=useState(time);
const [activeTimer,setActive]=useState(false);

function ChangeActive(){
    setActive(!activeTimer)
    activeTimer ? onTimePause():onTimeStart();

}

useEffect(()=>{
    
    if(activeTimer ||autostart){
       
    const id=window.setInterval(()=>{
        setCount( count=>count-1);
        onTick(count);
        },step);
        if(count===0){
            onTimeEnd();
            ChangeActive()
           
        }
    return ()=>window.clearInterval(id);
}
return undefined;
},[activeTimer, autostart, step, onTick, count, onTimeStart, onTimeEnd, ChangeActive]);
return(
    <div className="buttons_content">
        <div className="timer">{count}</div>
        { activeTimer
        ? (
        <button className="button_start" onClick={() => ChangeActive(true)}><span><TiMediaPause /></span></button>
        )
        :(
            
            <button className="button_start" onClick={() => ChangeActive(false)}><span><TiMediaPlay /></span></button>
        )
        }  
    </div>
);
};
export default Timer;
