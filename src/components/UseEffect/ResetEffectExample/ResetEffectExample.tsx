import React, {useEffect, useState} from "react";

export const ResetEffectExample: React.FC = () => {
    const [counter, setCounter] = useState<number>(1)
    console.log('ResetEffectExample ' + counter)
    useEffect(() => {
        console.log('useEffect-ResetEffectExample ' + counter)
        return ()=>{
            console.log('Reset Effect ' + counter)
        }
    }, [counter]);
    const increase = () => setCounter(counter + 1)
    return <>
        Hellow, counter: {counter}
        <button onClick={increase}>increase</button>
    </>
}
