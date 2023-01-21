import React from 'react';
import Sectionhead from './Sectionhead';
import { FaCrown ,FaFantasyFlightGames} from 'react-icons/fa';
import {AiFillCaretRight} from "react-icons/ai";
import { programs } from '../data';
import Card from './Card';
import { Link } from 'react-router-dom';



function Programs() {
    console.log(programs)
  return (
   <section className="programs container ">
    <div className=" program-container">
    <Sectionhead icon={<FaCrown />} title="programs" />
    </div>
    <div className='programs-wrapper'>
        {
            programs.map(({id,title,info,path})=>{
                return( 
                  <Card className="program">
                   <span><FaFantasyFlightGames /></span>
                   <h4>{title}</h4>
                   <small>{info}</small>
                   <Link to={path} className="btn sm">Learn More  <AiFillCaretRight />  </Link>
                    </Card>
                )
              

            })
        }

    </div>
   </section>
  )
}

export default Programs