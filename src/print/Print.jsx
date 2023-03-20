import React, { useRef } from 'react';
import ReactToPrint from 'react-to-print';
import Content from './Content'

const Print = () => {
  const componentRef = useRef();

  return (
    <div>
      <ReactToPrint
        trigger={() => <button style={{cursor:'pointer'}}>Print this out!</button>}
        content={() => componentRef.current}
      />
      <p>main</p>
      <Content ref={componentRef} />
    </div>
  );
};

export default Print;