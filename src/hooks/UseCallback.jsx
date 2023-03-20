import React,{useState,useCallback} from 'react'
import Message from './Message';

export default function UseCallback() {
  const [count, setCount] = useState(0)
  const [toggle, setToggle] = useState(false)

  const handleIncrementMessage=useCallback(
    () => {
      setCount((count)=>count+1)
    },
    [count]
  )
  

  // function handleIncrementMessage(e) {
  //   setCount((count)=>count+1)
  // }

  return (
    <div>
      {toggle?"on":"off"}<br/>
      <button onClick={()=>{
        setToggle(!toggle);
      }}>toggle</button><br/><br/>

      {count}
      <br />
      <button onClick={()=>{
        setCount((count)=>count+1)
      }}>increment</button><br/><br/>

      <Message onHandleIncrement={handleIncrementMessage}/>      
      
    </div>
  )
}
