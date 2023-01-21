import React from 'react';
import Card from './Card';

function Trainers( {id,image,name,jop,socials}) {
  return (
   <Card className="trainer">
    <div className='trainer-image'>
        <img src={image} alt="trainer" />
    </div>
   <h3>{name}</h3>
   <p>{jop}</p>
   <div className='trainer-socials'>
     {
        socials.map(({icon,link},index)=>{
            return <a href={link} key={index}>{icon}</a>
        })
     }
   </div>
   </Card>
  )
}

export default Trainers
