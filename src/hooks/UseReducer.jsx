import React,{useEffect,useReducer} from 'react'


const reducer=(state,action)=>{
  switch (action.type) {
    case "ADD":
      return{
        isLoding:action.payload.loding,
        result:action.payload.data,
        message:"hello"
      }
    case "REMOVE":
      return state;
    default:
      return state;
  }
}

const initialState={
  isLoding:false,
  result:{},
  message:""
};

export default function UseReducer() {
  const [bookState, dispatch] = useReducer(reducer, initialState);

  const handleClick = ()=>{

  }

  useEffect(() => {
    dispatch({type:"ADD",payload:{loding:true,data:0}})
    
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json =>{for(let i=0;i<10000;i++){
      dispatch({type:"ADD",payload:{loding:false,data:json}})
    }}
    )
  }, [])

  return (
    <>
      {
        (bookState.isLoding)?<h3>loading...</h3>:<h3>{bookState.result.title}</h3>
      }
      {/* <h2>{bookState.data.title}</h2> */}
      <button onClick={handleClick}>Click</button>
    </>
  )
}
