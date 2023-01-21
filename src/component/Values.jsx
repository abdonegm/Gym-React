import React from 'react';
import image from "../images/Negm1.jpg";
import Sectionhead from './Sectionhead';
import {GiCutDiamond} from  "react-icons/gi"
import {BsFillAwardFill} from "react-icons/bs";
import Card from './Card';
import {values}  from "../data"


function Values() {
    console.log(values)
  return (
    <section className='values'>
        <div className="container values-container">
            <div className="values-left">
                <div className="values-image">
                    <img src={image} alt="values" />
                </div>
            </div>
            <div className="values-right">
                <Sectionhead icon={<GiCutDiamond />} title="Values" />
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab maiores nobis nemo, facilis delectus molestiae? Eveniet nemo consequuntur blanditiis dolorem laboriosam, repudiandae corporis natus optio deserunt dolor nam quam quo?</p>
                <div className='values-wrapper'>
                   {
                    values.map(({id,title,desc})=>{
                        return(
                            <Card className="value" >
                                <span><BsFillAwardFill /></span>
                                <h4>{title}</h4>
                                <small>{desc}</small>
                            </Card>
                        )
                    })
                   }
                </div>
            </div>


        </div>

    </section>
  )
}

export default Values