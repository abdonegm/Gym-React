import React from 'react';
import logo from "../images/logo.png";
import { Link } from 'react-router-dom';
import {FaFacebook,FaLinkedin} from "react-icons/fa";
import {AiFillInstagram,AiFillLinkedin,AiOutlineTwitter} from "react-icons/ai";


function Footer() {
  return (
    <footer>
        <div className='container foot-container'>
            <article>
                <Link to="/" className='logo'>
                    <img src={logo} alt="footer" />
                </Link>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab repellat placeat eum consequuntur ipsam at? Facere rem eveniet dignissimos nesciunt ea! Animi nam tenetur at asperiores praesentium laudantium ab. Obcaecati!

                    </p>
               <div className='social'>
                <a href="https://www.linkedin.com/home?originalSubdomain=eg" target="_blank" rel="noreferrer noopener" ><AiFillLinkedin /></a>
                <a href="https://web.facebook.com/login/?_rdc=1&_rdr" target="_blank" rel="noreferrer noopener" ><FaFacebook /></a>
                <a href="https://twitter.com/login" target="_blank" rel="noreferrer noopener" ><AiOutlineTwitter/></a>
                <a href="https://www.instagram.com/" target="_blank" rel="noreferrer noopener" ><AiFillInstagram/></a>
          
                </div>     
            </article>
            <article>
                <h4>PermaLinks</h4>
                <Link to="/about" >About</Link>
                <Link to="/plans" >Plans</Link>
                <Link to="/trainers" >Trainers</Link>
                <Link to="/gallary" >Gallary</Link>
                <Link to="/contact" >Contact</Link>

            </article>
            <article>
                <h4>Insights</h4>
                <Link to="/s" >Blog</Link>
                <Link to="/s" >Case studies</Link>
                <Link to="/s" >Events</Link>
                <Link to="/s" >Communites</Link>
                <Link to="/s" >FAQs</Link>

            </article>
            <article>
                <h4>Get In Touch With</h4>
                <Link to="/contact">Contact Us</Link>
                <Link to="/s" >Supports</Link>
            </article>
        </div>
    </footer>
  )
}

export default Footer
