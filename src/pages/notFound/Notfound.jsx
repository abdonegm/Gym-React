import React from 'react';
import "./notfound.css";
import {Link} from "react-router-dom"

function Notfound() {
  return (
    <section>
      <div className='container notfound'>
        <h2>Page Not Found</h2>
        <Link to="/" className='btn'>Go Back home</Link>

      </div>
    </section>
  )
}

export default Notfound