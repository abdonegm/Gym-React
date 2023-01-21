import React from 'react';
import "./trainers.css";
import Header from '../../component/Header';
import trainesimage from "../../images/header_bg_5.jpg";
import {AiFillFacebook,AiFillLinkedin,AiFillInstagram,AiFillTwitterSquare} from "react-icons/ai";
import { trainers} from "../../data";
import Trainer from "../../component/Trainer";





function Trainers() {
  return (
    <div>
       <Header title="Our Trainers" image={trainesimage}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat ratione tempora adipisci a delectus dignissimos odit ea, laborio
        </Header>
       <section className='trainers'>
        <div className='container trainers-container'>
          {
            trainers.map(({id,image,name,jop,socials})=>{
              return(
              <Trainer id={id} image={image} name={name} jop={jop} socials={
                [
                  {icon:<AiFillInstagram />,link:socials[0]},
                  {icon:<AiFillTwitterSquare />,link:socials[1]},
                  {icon:<AiFillFacebook/>,link:socials[2]},

                  {icon:<AiFillLinkedin/>,link:socials[3]},


                ]
              }>

              </Trainer>

            )})
          }

        </div>

       </section>
      
    </div>
  )
}

export default Trainers
