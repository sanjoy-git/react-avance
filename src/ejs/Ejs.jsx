import React,{useEffect,useState} from 'react'
import axios from 'axios'
import htmlParser from "html-react-parser";

export default function Ejs() {

  const [html, setHtml] = useState(null);

  useEffect(() => {
    axios
      .get('http://localhost:5000')
      .then(res => setHtml(htmlParser(res.data)))
      .catch(err => console.error(err));
  }, [])

  return (
    <div>
      Ejs
      {html}
    </div>
  )
}
