import React, {useEffect, useState} from 'react';

export default {
    title: 'useEffect demo'
}

export const UseEffect = () => {
    const [counter, setCounter] = useState(1)
    const [fake, setFake] = useState(1)
    console.log('UseEffectComponent')

    useEffect(()=>{
        // debugger
        console.log('UseEffect every render')
        document.title = counter.toString()
    })

    useEffect(()=>{
        // debugger
        console.log('UseEffect only first render (componentDidMount)')
        document.title = counter.toString()
    }, [])

    useEffect(()=>{
        // debugger
        console.log('UseEffect first render and every counter change')
        document.title = counter.toString()
    }, [counter])

    return <>
        Hello, {fake} {counter}
        <button onClick={() => {setFake(fake + 1)}}>fake +</button>
        <button onClick={() => {setCounter(counter + 1)}}>counter +</button>
    </>
};
