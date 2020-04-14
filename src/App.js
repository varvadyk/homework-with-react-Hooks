import React from 'react';
import Timer  from './components/Timer/Timer';
import './App.css';
function App() {
  return (
    <div className="App">
      <Timer 
    time={10}
    autostart={false}
    step={1000}
    onTick={(time) => console.log("Осталось времени: " + time)} 
    onTimeStart={() => console.log("Таймер запущен!")}
    onTimePause={() => console.log("Таймер на паузе!")}
    onTimeEnd={() => console.log("Время вышло!")} 
    />
    </div>
  );
}

export default App;
