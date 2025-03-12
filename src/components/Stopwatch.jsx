import React, { useState } from 'react'

const Stopwatch = () => {
    const [time, setTime] = useState({ hr: 0, min: 0, sec: 0, milli: 0 });
    const [status, setStatus] = useState();
    let updateHr = time.hr;
    let updateMin = time.min;
    let updateSec = time.sec;
    let updateMilli = time.milli;
    const handleStart = () => {
        myFun();
        setStatus(setInterval(myFun, 10))

    }
    const handleStop = () => {
        clearInterval(status)
    }
    const handleReset = () => {
        clearInterval(status);
        setTime({ hr: 0, min: 0, sec: 0, milli: 0 })

    }
    const myFun = () => {
        if (updateMilli === 100) {
            updateMilli = 0;
            updateSec++;

        }
        if (updateSec === 60) {
            updateSec = 0;
            updateMin++;

        }
        if (updateMin === 60) {
            updateMin = 0;
            updateHr++;

        }
        updateMilli++;
        return setTime({ hr: updateHr, min: updateMin, sec: updateSec, milli: updateMilli })
    }

    return (
        <div className="flex items-center justify-center p-12 min-h-screen  text-white">
            <div className="bg-transparent flex-col backdrop-blur-xl h-[20rem] w-[40rem] flex items-center justify-center shadow-2xl rounded-2xl border border-gray-500">
                <h1 className="text-white text-6xl py-6 font-mono tracking-widest">
                    {time.hr + " : " + time.min + " : " + time.sec + " : " + time.milli}
                </h1>
                <div className="flex gap-8 font-bold text-xl">
                    <button
                        onClick={handleStart}
                        className="border-2 border-green-400 hover:bg-green-500/80 transition-all duration-300 ease-in-out px-6 py-3 rounded-md">
                        Start
                    </button>
                    <button onClick={handleStop} className="border-2 border-red-400 hover:bg-red-500/80 transition-all duration-300 ease-in-out px-6 py-3 rounded-md">
                        Stop
                    </button>
                    <button onClick={handleReset} className="border-2 border-yellow-400 hover:bg-yellow-500/80 transition-all duration-300 ease-in-out px-6 py-3 rounded-md">
                        Reset
                    </button>
                </div>
            </div>
        </div>




    )
}

export default Stopwatch