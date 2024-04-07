import React, { useEffect, useState } from "react";
import './Timer.css'
import New1 from "./New1";
import Contact from "./Contact";
const Timer = () => {
    const [days, setdy] = useState(0)
    const [hours, sethr] = useState(0)
    const [minutes, setmin] = useState(0)
    const [seconds, setsec] = useState(0)
    const deadline = "April,30,2024"
    const getTime = () => {
        const time = Date.parse(deadline) - Date.now()
        setdy(Math.floor(time / (1000 * 60 * 60 * 24)))
        sethr(Math.floor(time / (1000 * 60 * 60) % 24))
        setmin(Math.floor((time / 1000 / 60) % 60))
        setsec(Math.floor((time / 1000) % 60))

    }
    useEffect(() => {
        const interval = setInterval(() => getTime(deadline), 1000)
        return () => clearInterval(interval)
    }, [])
    return (
        <>

            <div className="v2"></div>
            <div className="l1">Today's</div>
            <div className="days1">

                <div className="time">
                    <div className="days">Days </div>
                    <h1 className="time"> {days < 10 ? "0" + days : days}</h1>
                </div>
                <h1 className="colon">:</h1>

                <div className="time">
                    <div className="days">Hours</div>
                    <h1 className="time" >{hours < 10 ? "0" + hours : hours}</h1>
                </div>
                <h1 className="colon">:</h1>
                <div className="time">
                    <div className="days" >Minutes</div>
                    <h1 className="time">{minutes < 10 ? "0" + minutes : minutes}</h1>
                </div>
                <h1 className="colon">:</h1>
                <div className="time">
                    <div className="days" >Seconds</div>
                    <h1 className="time">{seconds < 10 ? "0" + seconds : seconds}</h1>
                </div>
            </div>
            <p className="fs">Flash Sales</p>

            <div>
                <section>
                    <New1 />
                </section>
            </div>
        </>
    )
}
export default Timer