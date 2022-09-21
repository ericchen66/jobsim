import React, {useEffect, useState} from 'react';
import './App.css';
import Status from './Status';
import Time from './Time';
import Week from './Week';
import WorkingDays from './WorkingDays';

function App() {
  const [wage, setWage] = useState(0);
  const [networth, setNetWorth] = useState(0);
  const [isWorking, setIsWorking] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [workingTime, setWorkingTime] = useState(0);

  const [day, incrementDay] = useState(0);
  const [displayWork, setDisplayWork] = useState(false);
  const [workingDays, setWorkingDays] = useState([true, true, true, true, true, false, false]);

  useEffect(() => {
      if(wage > 0 || elapsedTime > 0){
        const event = setTimeout(() => setElapsedTime(elapsedTime + 1), 1000);
        return () => clearTimeout(event);
      }
    }
  );

  useEffect(() => {
    if(wage > 0){
      const event = setTimeout(() => {setWorkingTime(workingTime + 1)}, 1000);
      return () => clearTimeout(event);
    }
  });

  useEffect(() => {
    if(isWorking && workingDays[day % 7] === true){
      const event = setTimeout(() => setNetWorth(networth + wage), 1000);
      return () => clearTimeout(event);
    }
  });

  useEffect(() => {
      if(isWorking){
        const event = setTimeout(() => setIsWorking(false), 9000);
        return () => clearTimeout(event);
      }else{
        const event = setTimeout(() => setIsWorking(true), 17000);
        return () => clearTimeout(event);
      }
  }, [isWorking]);

  return (
    <div className="App">
      <select value = {wage} onChange = {e => {setWage(parseInt(e.target.value)); setWorkingTime(0);
        if(elapsedTime === 0){
          setIsWorking(true);
        }

        if(e.target.value > 0){
          setDisplayWork(true);
        }else{
          setDisplayWork(false);
        }
      }}>
        <option value = {0}>Select Job:</option>
        <option value = {15}>Cashier</option>
        <option value = {30}>Construction Worker</option>
        <option value = {20}>Garbage Collector</option>
        <option value = {260}>Lawyer</option>
        <option value = {130}>Politician</option>
        <option value = {35}>Waiter</option>
        <option value = {100}>Web Developer</option>
      </select>
      <h1>Current Hourly Wage: ${wage}</h1>
      <h1>Current Net Worth: ${networth}</h1>
      <Status workingState={displayWork} isWorking = {isWorking && workingDays[day % 7] === true}/>
      <Time hours = {elapsedTime} isWork = {false} dayChange = {day => {incrementDay(day)}}/>
      <Time hours = {workingTime} isWork = {true}/>
      <Week day = {day}/>
      <WorkingDays working = {workingDays} onChange = {days => {setWorkingDays(days)}}/>
      <button onClick={() => {
        if(wage > 0){
          setWorkingTime(workingTime + 24);
          setElapsedTime(elapsedTime + 24);
          setNetWorth(networth + 8 * wage);
        }else{
          alert("You must get a job first.")
        }
      }}>Fast Forward 1 day</button>
    </div>
  );
}

export default App;
