import React, {useEffect, useState} from 'react';


export const ClockUseEffect = () => {

    const [time, setTime] = useState(new Date().toString())

    console.log('ClockUseEffect component')

    useEffect(() => {
        const interval = setInterval(() => {
            const date = new Date()
            const hours = date.getHours()
            const minutes = date.getMinutes()
            const seconds = date.getSeconds()
            console.log('ClockUseEffect setInterval')

            setTime(`${hours} : ${minutes} : ${seconds}`);
        }, 1000)

        return () => {
            clearInterval(interval)
        }

    }, [time])

    return <>
        <div style={{color: 'blue'}}>time: {time}</div>
    </>

};

