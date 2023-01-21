import React from 'react';
import "./navbar.css";
import {Link,NavLink } from "react-router-dom";
import logo from "../images/logo.png"
import { links} from '../data';
import {GoThreeBars} from 'react-icons/go';
import { useState } from 'react';

function Navbar() {

    const [linksShow,setlinkesShow]=useState(false);
    console.log(linksShow)
  return (
    <nav>
        <div className="container nav_container">
            <Link to="/" className='logo' onClick={()=> setlinkesShow(false)}>
                <img src={logo} alt="nav_logo" />
            </Link>
            <ul className={linksShow?"showLinks nav_links":"hideLinks  nav_links"} >
              {
                links.map(({name,path},index)=>{
                    return(
                      <li key={index} onClick={()=> setlinkesShow(!linksShow)}>
                        <NavLink to={path}  className={({isActive})=>isActive?"active_nav":""
                          
                        }>{name}</NavLink>
                      </li>
                    )

                })
              }

            </ul>
            <button className='nav-toogle' onClick={()=> setlinkesShow(!linksShow)}>
                <GoThreeBars />
            </button>

  </div>
    </nav>
   )
}

export default Navbar