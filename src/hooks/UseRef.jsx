import React,{useRef} from 'react'

export default function UseRef() {

    const userNameRef=useRef();
    const userAgeRef=useRef();

    const handleSubmit = (event)=> {
        event.preventDefault();
        const name=userNameRef.current.value;
        const age=userAgeRef.current.value;
        userNameRef.current.style.color='red';
        console.log({name,age});
    }

  return (
    <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name : </label>
        <input type="text" name="name" id="" ref={userNameRef} /> 
        <label htmlFor="age">Age : </label>
        <input type="text" name="age" id="" ref={userAgeRef}/>
        <button type='submit'>Submit</button>
    </form>
  )
}
