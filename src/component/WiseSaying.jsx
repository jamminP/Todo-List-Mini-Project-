import { useState, useEffect } from 'react';
import data from './wise_saying.json';

function WiseSaying(){
    const [randomId, setRandomId] = useState(0);

    useEffect(()=> {
        setRandomId(Math.floor(Math.random() * 20))
    }, []);

    return(
        <div>
            <p>{data[randomId].quote}</p>
            <p>{data[randomId].name}</p>
        </div>
    )
}

export default WiseSaying;