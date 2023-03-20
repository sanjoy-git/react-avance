import React,{useReducer} from 'react'
import { createStore } from 'redux'

const INCREMENT="INCREMENT";
const DECREMENT="DECREMENT";
const RESET="RESET";
const INCREMENT_BY_VALUE="INCREMENT_BY_VALUE";

//state
const initialCounterState={
  count:0,
}

//action
const incrementCounter=()=>{
  return{
    type:INCREMENT
  }
}

const decrementCounter=()=>{
  return{
    type:DECREMENT 
  }
}

const reset=()=>{
  return{
    type:RESET
  }
}

const incrementByValue=(value)=>{
  return{
    type:INCREMENT_BY_VALUE,
    payload:value,
  }
}

// reducer
const counterReducer=(state=initialCounterState,action)=>{
  switch (action.type) {
    case INCREMENT:
      return{
        ...state,
        count:state.count+1,
      }
    case DECREMENT:
      return{
        ...state,
        count:state.count-1,
      }
    case RESET:
      return{
        ...state,
        count:0
      }
    case INCREMENT_BY_VALUE:
      return{
        ...state,
        count:state.count+action.payload,
      }
    default:
      state;
  }
}
export default function ReduxCounter() {

  // const [state, dispatch] = useReducer(counterReducer, initialCounterState)
  const counterStore=createStore(counterReducer);


  return (
    <div>
      {/* {state.count}<br/> */}
      {counterStore.subscribe(()=>{
        console.log(counterStore.getState())
      })}

      <button onClick={()=>{
        counterStore.dispatch(incrementCounter())
      }}>increment</button>

      <button onClick={()=>{
        counterStore.dispatch(decrementCounter())   
      }}>decrement</button>

      <button onClick={()=>{
        counterStore.dispatch(reset())   
      }}>reset</button>

      <button onClick={()=>{
        counterStore.dispatch(incrementByValue(4))   
      }}>incrementByValue</button>

    </div>

  )
}
