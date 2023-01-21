import React from 'react';
import {ImQuotesLeft} from "react-icons/im";
import {IoIosArrowBack,IoIosArrowForward} from "react-icons/io";
import {testimonials} from "../data";
import Card from './Card';
import Sectionhead from './Sectionhead';
import { useState } from 'react';


function Testmonials() {
    const [index,setIndex]=useState(0);
    const {id,name,quote,avatar,job} =testimonials[index];

    const forward=()=>{
        setIndex((prev => ++prev));
         if(index >= testimonials.length-1){
            setIndex(0)
         }
    }
    const back=()=>{
      setIndex(prev => --prev);
      if(index <= 0){
        setIndex(testimonials.length-1)
      }
    }
  return (
    <section className='testmonials'>
        <div className='container test-container'>
           <Sectionhead icon={<ImQuotesLeft />} title="Testmonials" className="test-headr"/>
        </div>
        <Card className="testmonials" key={id}>
            <div className='test-avatar'>
                <img src={avatar} alt="testmonials" />
            </div>
            <p className='test-quote'>`"${quote}"`</p>
            <h5>{name}</h5>
            <small className='test-title'>{job}</small>
          

        </Card>
        <div className='btn-container'>
                <button className='test-btn' onClick={back}><IoIosArrowBack /></button>
                <button className='test-btn' onClick={forward}><IoIosArrowForward /></button>
            </div>
    </section>
  )
}

export default Testmonials