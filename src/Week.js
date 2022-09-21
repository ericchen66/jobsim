import React from 'react'

const Week = ({day}) => {
    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

  return (
    <div>
        <h1>Today is {days[day % 7]}</h1>
    </div>
  )
}

export default Week