import React,{useState,useEffect} from 'react'

export default function StateAndEffect() {
    const [count, setCount] = useState(0)
    const [click, setClick] = useState(0)

    useEffect(() => {
        setClick(click+1);
    }, [count])


    const handleIncrement=()=>{
        setCount(count+1);
    }

    const handleDecrement=()=>{
        setCount(count-1);
    }

    return (
        <div>
            <p>click : {click-1}</p>
            <p>{count}</p>
            <button onClick={handleIncrement}>increment</button>
            <button onClick={handleDecrement}>Decrement</button>
        </div>
    )
}
