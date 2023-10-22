import React, {useEffect, useState} from 'react';
import {AnalogClockView} from "./AnalogClockView";
import {DigitalClockView} from "./DigitalClockView";

export type ClockViewPropsType = {
    time?: string
}

type PropsType = {
    mode?: 'analog' | 'digital'
}

export const ClockUseEffect: React.FC<PropsType> = ({mode}) => {

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

    }, [])

    let view
    switch (mode) {
        case 'analog':
            view = <AnalogClockView time={time}/>
            break
        case "digital":
        default:
            view = <DigitalClockView time={time}/>
    }

    return <> {view} </>
};





