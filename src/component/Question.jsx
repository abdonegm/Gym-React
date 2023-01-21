import React from 'react';
import Sectionhead from './Sectionhead';
import {faqs} from "../data"; 
import {AiFillQuestionCircle} from "react-icons/ai"
import FAQ from './FAQ';

function Question() {
  return (
    <section className='ques'>
        <div className='container ques-container'>
            <Sectionhead icon={<AiFillQuestionCircle />} title="FAQS" />
            <div className='ques-wrapper'>
                {
                     faqs.map(({question,answer,id}) =>{
                        return(
                            <FAQ question={question} answer={answer} key={id} />
                        )
                     
                     })
                }
            </div>
        </div>

    </section>
  )
}

export default Question
