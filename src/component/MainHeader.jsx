import React from 'react';
import { Link } from 'react-router-dom';
import myimage from "../images/main_header.png"

function MainHeader() {
  return (
    <header className='main_header'>
      <div className="container header_container">
        <div className="header_left">
        <h4>#100days of work out</h4>
          <h1>join the legened of the fitness world</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil sit neque porro dolore beatae labore provident quae ea est quo, quod suscipit assumenda ipsa, nesciunt magni obcaecati laudantium error id?</p>
          <Link to="/plans" className='btn lg'>Get Started</Link>
        </div>
        <div className="header_right">
           <div className="header-circle"></div>
           <div className="haeder-image">
               <img src={myimage} alt="header" />
           </div>
        </div>

      </div>
    </header>
  )
}

export default MainHeader;
