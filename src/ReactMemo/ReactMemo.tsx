import React, {useState} from 'react';

export default {
    title: 'React.memo demo'
}

const NewMessagesCounter = (props: { count: number }) => {
    // console.log("Counter")
    return <div>{props.count}</div>
}

const UsersSecret = (props: { users: Array<string> }) => {
    // console.log('Users')
    return (
        <div>
            {props.users.map((u, i) => <div key={i}>{u}</div>)}
        </div>
    )
}

const Users = React.memo(UsersSecret)

export const ReactMemo = () => {
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['Alex', 'Dimych', 'Valera'])

    const addUser = () => {
        setUsers([...users, 'Sveta' + new Date().getTime()])
    }

    return <>
        <button onClick={() => {setCounter(counter + 1)}}>+</button>
        <button onClick={addUser}>Add user</button>
        <NewMessagesCounter count={counter}/>
        <Users users={users}/>
    </>
};

