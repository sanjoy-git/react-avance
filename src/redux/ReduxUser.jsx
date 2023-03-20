import React from 'react'
import {createStore} from 'redux';

const ADD_USER="ADD_USER";
const REMOVE_USER="REMOVE_USER";
const RESET_USER="RESET_USER";

const initialUserState={
  count:0,
  user:[
    {
      name:"San",
      age:25
    }
  ]
}

const addUser=(newPerson)=>{
  return{
    type:ADD_USER,
    payload:newPerson
  }
}
const removeUser=()=>{
  return{
    type:REMOVE_USER
  }
}
const resetUser=()=>{
  return{
    type:RESET_USER
  }
}

const userReducer=(state=initialUserState,action)=>{
  switch (action.type) {
    case ADD_USER:
      return{
        ...state,
        count:state.count+1,
        user:[...state.user,action.payload]
      }
    case REMOVE_USER:
      return{
        ...state,
      }
    case RESET_USER:
      return{
        ...state,
      }
  
    default:
      state;
  }
}

export default function ReduxUser() {
  
  const createUserStore=createStore(userReducer);
  
  return (
    <div>
      {createUserStore.subscribe(()=>{
        console.log(createUserStore.getState().user);
        createUserStore.getState().user.map((item)=>{
          console.log(item)
        })
      })}

      <button onClick={()=>{
        createUserStore.dispatch(addUser({
          name:"anil",
          age:33
        }));
      }}>Add User</button>
    </div>
  )
}
