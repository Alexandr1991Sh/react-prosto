import React, {useMemo, useState} from 'react';

export default {
    title: 'useState demo'
}


const generateDate = () => {
    console.log('generateDate')
    return 1
}

export const UseState = () => {
    console.log("UseState")

// const initialState = useMemo(generateDate, [])

    const [counter, setCounter] = useState(() => {
        return generateDate()
    })

    const changer = (state: number) => ++state

    return <>
        <button onClick={() => {setCounter(changer)}}>+</button>
        {counter}
    </>
};