import { useState } from "react";

const Alarm = () => {
    const [currDate, setCurrDate] = useState('')
    setInterval(() => setCurrDate(new Date().toISOString()), 1000)

    return (
        <div className="time-block">
            <p>
                currency date: 
                {'\n' + currDate.slice(currDate.indexOf('T')+1, currDate.indexOf('Z')-4)}
            </p>
            <h1>Alarm</h1>
            <div className="inputs">
                <div><input placeholder="h" /></div>
                <div><input placeholder="m" /></div>
                <div><input placeholder="s" /></div>
                
            </div>
            <div className="time-btns">
                <button className="time-btn">
                    start
                </button>
                <button className="time-btn">
                    stop
                </button>
                <button className="time-btn">
                    reset
                </button>
            </div>
        </div>
    )
}

export {Alarm}

