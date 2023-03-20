import React,{memo} from 'react'

function Message(props) {
  {console.log("message render")} 
  return (
    <>
      <h1>messages</h1>
      <button onClick={props.onHandleIncrement}>inc message</button>
    </>
  )
}

export default memo(Message);


