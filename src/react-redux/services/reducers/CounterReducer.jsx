import { DECREMENT, INCREMENT, RESET } from "../constants/CounterConstant";

const initialCounterState={
  count:0,
}

export const counterReducer=(state=initialCounterState,action)=>{
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
        count:0,
      }
  
    default:
      return state;
  }
}