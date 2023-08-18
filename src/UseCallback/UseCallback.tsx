import React, {useCallback, useMemo, useState} from "react";


export const UseCallback = () => {
    console.log('UseCallback')
    const [counter, setCounter] = useState(0)
    const [books, setBooks] = useState(['React', 'JS', 'TS'])

    // const newArray = useMemo(()=>{
    //     return books.filter(u => u.toLowerCase().indexOf('a') > -1)
    // },[books])



    const memoizedAddBook = useMemo(()=>{
        return   ()=>{
            console.log(books)
            const newBook = [...books, 'Angular ' + new Date().getTime()]
            setBooks(newBook)
        }
    }, [books])

    const memoizedAddBook2 = useCallback(()=>{
            console.log(books)
            const newBook = [...books, 'Angular ' + new Date().getTime()]
            setBooks(newBook)
    }, [books])

    return <>
        <button onClick={() => {setCounter(counter + 1)}}>+</button>

        {counter}
        <Book
            // books={newArray}
            addBook={memoizedAddBook2}/>
    </>
};

type BooksSecretPropsType={
    // books: Array<string>
    addBook: ()=>void
}

const BooksSecret = (props: BooksSecretPropsType) => {
    console.log('BooksSecret')
    return (
        <div>
            <button onClick={() => {props.addBook()}}>add book</button>
            {/*{props.books.map((book, i) => <div key={i}>{book}</div>)}*/}
        </div>
    )
}

const Book = React.memo(BooksSecret)

