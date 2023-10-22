import React from 'react'
import { useTimer } from 'use-timer'

const Timer = () => {

    const { time, start, pause, reset, status } = useTimer({
        initialTime: 10,
        timerType: 'DECREMENTAL',
        endTime: 0,
        onTimeOver: () => {
            console.log('Time is over');
        },
    });

    return (
        <div>
            <p>Elapsed time: {time}</p>
            {status === 'RUNNING' && <p>Running...</p>}
            <div>
                <button onClick={start}>Start</button>
                <button onClick={pause}>Pause</button>
                <button onClick={reset}>Reset</button>
            </div>
        </div>
    );
};

export default Timer;