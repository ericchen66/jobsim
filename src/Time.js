import React, { useEffect } from 'react'

const Time = ({hours, isWork, dayChange}) => {
    let day = Math.floor(hours / 24) % 365;
    let hour = hours % 24;
    let year = Math.floor(day / 365);

    useEffect(() => {
        if(!isWork){
            dayChange(Math.floor(hours / 24));
        }
    }, [day]);

    if(isWork){
        return(
            <div>
            <h3>Time at current job: {year} Years, {day} Days, {hour} Hours</h3>
            </div>
        );
    }else{
         return (
            <div>
                <h3>Total time in JobSim: {year} Years, {day} Days, {hour} Hours</h3>
            </div>
        );
    }
}

export default Time