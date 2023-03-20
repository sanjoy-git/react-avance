import React,{useState,useMemo} from 'react'
import Message from "./Message";

export default function UseMemo() {

  const [count, setCount] = useState(0);


  const calculateNumber=useMemo(() => {
    
    console.log("useMemo");

    let number=0;
    for (let i = 0; i < 50000000; i++) {
      number++;
    }
    return number;
  }, [])

  return (
    <div>
      {count}<br/>
      {calculateNumber}<br />
      <Message/><br />
      <button onClick={()=>{
        setCount(count+1);
      }}>increment</button>
    </div>
  )
}
