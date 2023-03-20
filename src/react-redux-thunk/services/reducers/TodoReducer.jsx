import { GET_TODOS_FAILED, GET_TODOS_REQUEST, GET_TODOS_SUCCESS } from "../constants/TodoConstant";

const initialState={
  isLoading:false,
  todos:[],
  error:null
}

export const todoReducer=(state=initialState,action)=>{
  switch (action.type) {
    case GET_TODOS_REQUEST:
      return{
        ...state,
        isLoading:true,
        todos:[],
        error:null
      }
    case GET_TODOS_SUCCESS:
      return{
        ...state,
        isLoading:false,
        todos:action.payload,
        error:null
      }
    case GET_TODOS_FAILED:
      return{
        ...state,
        isLoading:true,
        todos:[],
        error:action.payload
      }
      
    default:
      return state;
  }
}