import React, {useEffect, useState} from "react";

export const ResetEffectExample: React.FC = () => {
    const [counter, setCounter] = useState<number>(1)
    console.log('ResetEffectExample')
    useEffect(() => {
        console.log('useEffect-ResetEffectExample')
    }, []);
    const increase = () => setCounter(counter+1)
    return <>
        Hellow, counter: {counter}
        <button onClick={increase}>increase</button>
    </>
}
