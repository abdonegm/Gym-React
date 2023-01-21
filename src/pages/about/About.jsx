import React from 'react';
import "./about.css";
import Header from '../../component/Header';
import headerimage from "../../images/header_bg_1.jpg";
import aboutimage from "../../images/about1.jpg";
import visionimage from "../../images/about2.jpg";
import missionimage from "../../images/about3.jpg"

function About() {
  return (
   <>
   <Header title="About Us" image={headerimage}>
     Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error, totam illo?
   </Header>
   <section className='about-story'>
    <div className='container story-container'>
      <div className='about-image'>
        <img src={aboutimage} alt="about-back" />

      </div>
      <div className='about-content'>
       <h1>Our Story</h1>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero voluptas est necessitatibus. In ut repellendus veritatis eius consequatur labore, explicabo modi aliquid fuga asperiores recusandae quas excepturi. Repudiandae, natus iste.</p>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo cupiditate, amet minima molestias aliquid ullam repellat quisquam mollitia expedita ratione qui esse! Omnis</p>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem facere laborum cumque ad voluptatum laboriosam</p>
      </div>
    </div>

   </section>

   <section className='about-vision'>
    <div className='container vision-container'>
     
      <div className='about-content'>
       <h1>Our Vision</h1>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero voluptas est necessitatibus. In ut repellendus veritatis eius consequatur labore, explicabo modi aliquid fuga asperiores recusandae quas excepturi. Repudiandae, natus iste.</p>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo cupiditate, amet minima molestias aliquid ullam repellat quisquam mollitia expedita ratione qui esse! Omnis</p>
       
      </div>
      <div className='about-image'>
        <img src={visionimage} alt="about-back" />

      </div>
    </div>

   </section>


   <section className='about-mission'>
    <div className='container mission-container'>
      <div className='about-image'>
        <img src={missionimage} alt="about-back" />

      </div>
      <div className='about-content'>
       <h1>Our Mission</h1>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero voluptas est necessitatibus. In ut repellendus veritatis eius consequatur labore, explicabo modi aliquid fuga asperiores recusandae quas excepturi. Repudiandae, natus iste.</p>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo cupiditate, amet minima molestias aliquid ullam repellat quisquam mollitia expedita ratione qui esse! Omnis</p>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem facere laborum cumque ad voluptatum laboriosam</p>
      </div>
    </div>

   </section>
   
   
   </>
  )
}

export default About
