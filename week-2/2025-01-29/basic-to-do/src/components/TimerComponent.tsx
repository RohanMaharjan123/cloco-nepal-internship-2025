import { useState, useEffect } from "react";

const TimerComponent = () => {
    const [time, setTime] = useState(0);

    useEffect(() => {
        const timerId = setInterval(() => {
            setTime((prevTime) => prevTime + 1);
        }, 1000);

        return () => {
            clearInterval(timerId);
        };
    }, []);

    useEffect(() => {
        if (time > 10) {
            setTime(0);
        }
    }, [time]);

    return (
        <div>
            <p>Timer: {time} seconds</p>
        </div>
    );
};

export default TimerComponent;
