import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { decrementCounter, incrementCounter, resetCounter } from '../services/actions/CounterAction'

export default function Counter() {
  const count=useSelector(state=>state.count);
  const dispatch = useDispatch();
  const handleIncrement=()=>{
    dispatch(incrementCounter())
  }
  const handleDecrement=()=>{
    dispatch(decrementCounter())
  }
  const handleReset=()=>{
    dispatch(resetCounter())
  }

  return (
    <div>
      {count}<br/>
      <button onClick={handleIncrement}>increment</button>
      <button onClick={handleDecrement}>decrement</button>
      <button onClick={handleReset}>reset</button>
    </div>
  )
}
