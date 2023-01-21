import React from 'react';
import "./home.css";
import MainHeader from '../../component/MainHeader';
import Programs from '../../component/Programs';
import Values from '../../component/Values';
import Question from '../../component/Question';
import Testmonials from '../../component/Testmonials';


function Home() {
  return (
    <>
    <MainHeader />
    <Programs />
    <Values />
    <Question />
    <Testmonials />
   
    </>
  )
}

export default Home;