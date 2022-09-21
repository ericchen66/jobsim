import React, { useState } from 'react'

const WorkingDays = ({onChange}) => {
    const[one, setOne] = useState(true);
    const[two, setTwo] = useState(true);
    const[three, setThree] = useState(true);
    const[four, setFour] = useState(true);
    const[five, setFive] = useState(true);
    const[six, setSix] = useState(false);
    const[seven, setSeven] = useState(false);

  return (
    <div>
        <p>Check the days you work:</p>
        <label>
        <input type = "checkbox" checked = {one} onChange = {() => {
            setOne(!one);
        }}></input>
        Monday
        </label>
        <label>
        <input type = "checkbox" checked = {two} onChange = {() => {
            setTwo(!two);
        }}></input>
        Tuesday
        </label>
        <label>
        <input type = "checkbox" checked = {three} onChange = {() => {
            setThree(!three);
        }}></input>
        Wednesday
        </label>
        <label>
        <input type = "checkbox" checked = {four} onChange = {() => {
            setFour(!four);
        }}></input>
        Thursday
        </label>
        <label>
        <input type = "checkbox" checked = {five} onChange = {() => {
            setFive(!five);
        }}></input>
        Friday
        </label>
        <label>
        <input type = "checkbox" checked = {six} onChange = {() => {
            setSix(!six);
        }}></input>
        Saturday
        </label>
        <label>
        <input type = "checkbox" checked = {seven} onChange = {() => {
            setSeven(!seven);
        }}></input>
        Sunday
        </label>
        <br/>
        <button onClick = {() => {
            const days = [one, two, three, four, five, six, seven];
            onChange(days);
        }}>Set Working Days</button>
    </div>
  )
}

export default WorkingDays