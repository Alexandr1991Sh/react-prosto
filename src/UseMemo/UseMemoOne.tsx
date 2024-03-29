import React, {useMemo, useState} from 'react';

export const UseMemo = () => {

    const [a, setA] = useState<number>(3)
    const [b, setB] = useState<number>(3)

    let resultA = 1
    let resultB = 1

    resultA = useMemo(() => {
        let tempResult = 1
        for (let i = 1; i <= a; i++) {
            let fake = 0
            while (fake < 10000000) {
                fake++
                let fakeValue = Math.random()
            }
            tempResult = tempResult * i
        }
        return tempResult
    }, [a])


    for (let i = 1; i <= b; i++) {
        resultB = resultB * i
    }

    return <>

        <input value={a} onChange={(e) => {
            setA(Number(e.currentTarget.value))
        }}/>
        <input value={b} onChange={(e) => {
            setB(Number(e.currentTarget.value))
        }}/>

        <hr/>

        <div>
            Result for a: {resultA}
        </div>
        <div>
            Result for b: {resultB}
        </div>

    </>
};

const UsersSecret = (props: { users: Array<string> }) => {
    // console.log('Users Secret')
    return (
        <div>
            {props.users.map((u, i) => <div key={i}>{u}</div>)}
        </div>
    )
}

const Users = React.memo(UsersSecret)

export const HelpsToReactMemo = () => {
    // console.log('HelpsToReactMemo')
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['Alex', 'Dimych', 'Valera'])

    const newArray = useMemo(()=>{
        return users.filter(u => u.toLowerCase().indexOf('a') > -1)
    },[])

    return <>
        <button onClick={() => {setCounter(counter + 1)}}>+
        </button>
        {counter}
        <Users users={newArray}/>
    </>
};

