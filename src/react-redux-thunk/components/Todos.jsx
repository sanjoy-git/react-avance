import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllTodos } from '../services/actions/TodoAction';

export default function Todos() {
  const {isLoading,todos,error}=useSelector((state)=>state)
  const dispatch=useDispatch();

  useEffect(() => {
    dispatch(getAllTodos())
  }, [])
  

  return (
    <div>
      {isLoading && <h3>loadin...</h3>}
      {todos && todos.map((todo)=>{
        const{id,title}=todo;
        return(
          <article key={id}>
            <span>{id}</span>
            <h4>{title}</h4>
          </article>
        )
      })}
      {error && <h4>{error.message}</h4>}
    </div>
  )
}
