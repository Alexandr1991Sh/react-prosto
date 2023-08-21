import React, {useEffect, useState} from 'react';

export default {
    title: 'useEffect SetTimeout demo'
}

export const UseEffectSetTimeout = () => {
    const [counter, setCounter] = useState(1)
    const [fake, setFake] = useState(1)
    console.log('UseEffectSetTimeout')

    useEffect(()=>{
        // debugger
        setTimeout(()=>{
            console.log('setTimeout')
            document.title = counter.toString()
        },1000)

    },[counter])



    return <>
        Hello, {fake} {counter}
        <button onClick={() => {setFake(fake + 1)}}>fake +</button>
        <button onClick={() => {setCounter(counter + 1)}}>counter +</button>
    </>
};
