import React from 'react'
import ReactImageZoom from 'react-image-zoom'

export default function ImageZoom() {
  const props = {
    width: 300,
    // height: 340,
    zoomPosition: "original",
    zoomWidth: 500,
    img: "http://localhost:5000/images/cosmetic-11660130363473.jpg"
  };
  return (
    <div>
      <ReactImageZoom {...props}/>
      {/* <ReactImageZoom src="http://localhost:5000/images/cosmetic-11660130363473.jpg" width="300" zoomPosition="original" zoomWidth= "500"/> */}
      hello
    </div>
  )
}
