import { useState, useEffect } from "react";

function NowTime(){
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setDate(new Date());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    return(
    <>
        <div class="mb-6">
            {date.toLocaleDateString()}
            <br/>
            {date.toLocaleTimeString()}
        </div>
    </>
    )
}

export default NowTime;