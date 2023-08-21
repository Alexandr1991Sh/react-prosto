import React, {useEffect, useState} from 'react';



export const UseEffectSetInterval = () => {

    const [counter, setCounter] = useState(1)
    console.log('UseEffectSetInterval')

    useEffect(()=>{
        // debugger
        setInterval(()=>{
            console.log('setInterval ' +  counter)
          setCounter(state => state + 1)
        },2000)

    },[])


    return <>
        counter: {counter}
    </>

};
