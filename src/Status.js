import React from 'react'

const Status = ({workingState, isWorking}) => {
    if(workingState === true){
        return (
            <div>
                <h3>Currently Working: {isWorking? 'Yes' : 'No'}</h3>
            </div>
        )
    }
}

export default Status