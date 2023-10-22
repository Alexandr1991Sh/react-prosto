import React, {useEffect, useState} from 'react';

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

    }, [time])

    let view
    switch (mode) {
        case 'analog':
            view = <span>ANALOG</span>
            break
        case "digital":
        default:
            view = <div style={{color: 'blue'}}>time: {time}</div>
    }

    return <>
        {view}
    </>

};

