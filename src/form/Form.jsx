import React,{useState} from 'react'
import './Form.css'

export default function form() {

  const [input1, setInput1] = useState(null);
  const [input2, setInput2] = useState(null);
  const [input3, setInput3] = useState(null);

  const [next, setNext] = useState(0);

  const inputs=document.querySelectorAll('input');
  const handleKey=(e)=>{
    e.preventDefault();
    if(e.keyCode==13){
      if(next<=inputs.length-1){
        setNext(next+1);
        inputs[next].focus() 
      }
      else{
        setNext(0);
      }
         
    }
  }

  return (
    <div>
      <form>
        <input type="text" name="" value={input1} onChange={(e)=>setInput1(e.target.value)} onKeyUp={handleKey} id="" />
        <input type="text" name="" value={input2} onChange={(e)=>setInput2(e.target.value)} onKeyUp={handleKey} id="" />
        <input type="text" name="" value={input3} onChange={(e)=>setInput3(e.target.value)} onKeyUp={handleKey} id="" />
        {/* <input type="text" name="" value={input1} onChange={(e)=>setInput1(e.target.value)} id="" /> */}
        {input1}
      </form>
    </div>
  )
}
