import React from 'react'
import {combineReducers, createStore} from 'redux';

const ADD_PRODUCT="ADD_PRODUCT";
const ADD_CUSTOMER="ADD_CUSTOMER";

const initialProductState={
  productId:0,
  ProductName:"Mango"
}

const initialCustomerState={
  customerId:0,
  customerName:"Sanju"
}

const addProduct=()=>{
  return{
    type:ADD_PRODUCT
  }
}
const addCustomer=()=>{
  return{
    type:ADD_CUSTOMER
  }
}

const productReducer=(state=initialProductState,action)=>{
  switch (action.type) {
    case ADD_PRODUCT:
      return{
        ...state,
        productName:"Banana"
      }
    default:
      return{
        ...state
      }
  }
}
const customerReducer=(state=initialCustomerState,action)=>{
  switch (action.type) {
    case ADD_CUSTOMER:
      return{
        ...state,
        customerName:"Korim"
      }
    default:
      return{
        ...state
      }
  }
}

const rootReducer=combineReducers({
  productR:productReducer,
  customerR:customerReducer
})

export default function ReduxCombine() {
  const store=createStore(rootReducer)
  return (
    <div>
      {store.subscribe(()=>{
        console.log(store.getState())
      })}
      {/* {console.log(createProductStore.dispatch)} */}
      <button onClick={()=>{
        store.dispatch(addProduct())
      }}>click</button>
    </div>
  )
}
