import React from 'react'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

export default function ReactPopup() {
  return (
    <Popup trigger={<button>Trigger</button>} position="right bottom">
      <div>My name is Sanjoy</div>
    </Popup>
  )
}
