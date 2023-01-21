import React from 'react';
import "./plans.css";
import plansimage from "../../images/header_bg_4.jpg";
import Card from "../../component/Card";
import {plans} from "../../data";
import Header from "../../component/Header";

function Plans() {
  return (
  <>
  <Header title="Member Ship plans" image={plansimage} >
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. voluptatem quasi repellendus et nostrum minima non eum.  
    </Header>
    <section className='plnas'>
      <div className='container plans-container'>
        {
          plans.map(({id,name,desc,price,features})=>{
            return(
              <Card key={id} className="plans">
                <h3>{name}</h3>
                <small>{desc}</small>
                <h1>{`$${price}`}</h1><h2>/mo</h2>
                <h4>Features</h4>
                {
                  features.map(({feature,available},index)=>{
                    return <p key={index} className={!available? "disabled": ''}>{feature}</p>

                  })
                }
                <button className='btn lg'>Choose Plan</button>
              </Card>
            )

          })
        }
      </div>


    </section>
  </>
  )
}

export default Plans