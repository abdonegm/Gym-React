import React from 'react';
import {AiOutlinePlus,AiOutlineMinus} from "react-icons/ai";
import { useState } from 'react';
function FAQ({ question,answer}) {

    const [myAnswer,setAnswer]=useState(false);


  return (
   <article className='faq' onClick={()=> setAnswer(prev => !prev)}>
    <div>
        <h4>{question}</h4>
        <button className='faq-icon' >
             {
                myAnswer?<AiOutlineMinus />:<AiOutlinePlus /> 
             }
            
        </button>
    </div>
    {
        myAnswer&& <p>{answer}</p>
    }
   </article>
  )
}

export default FAQ