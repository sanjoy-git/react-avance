import {forwardRef} from 'react'

const Content = forwardRef((props,ref)=>{
  return(
    <div ref={ref}>
      {/* <p>{props.text}</p> */}
      <p>Lorem.</p>
    </div>
  )
})

export default Content;