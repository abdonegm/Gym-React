import React from 'react';
import "./gallary.css"
import Header from '../../component/Header';
import gallaryimage from "../../images/header_bg_3.jpg";

function Gallary() {

  const imageLength=15;
  const images=[];
  for(let i=1;i< imageLength;i++){
    images.push(require(`../../images/gallery${i}.jpg`))

  }
  console.log(images)
  return (
    <>
    <Header title="Our Gallary" image={gallaryimage}>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed ipsa, itaque facere eveniet consequuntur nisi, debitis laborum cum aspernatur atque accusamus voluptatum corporis voluptas odit. Esse dicta numquam est voluptatum?
    </Header>
    <section className='gallary'>
      <div className='container gallary-container'>
        {
          images.map((src,index)=>{
            return(
            
              <article key={index}>
                  <img src={src} alt="gallary" />
              </article>
            )
            
          })
        }
      </div>
    </section>
    </>
  )
}

export default Gallary