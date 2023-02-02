import React from 'react';
import NavBar from '../NavBar/NavBar';

function Hero() {
  return (
    <div className="section_L bg-primary">
      <div className="bg-red-600">

      </div>
      <div className="container mx-auto py-16">
        <NavBar />
        <div className="flex flex-col">
          <div className="w-full md:w-9/12">
            <h1 className="MainTitle">35 years of experience</h1>
            <p className="paragraph">for dacads Yousuf refrigeration have been trusted choices for reliability and safety in Air conditioning , heating parts and serives</p>
          
            // button and details why you guys trust us
          </div>
          <div className=" md:w-1/4 bg-slate-300">
            <h1>left </h1>
            // this is left
            // there will be gradient according to picture
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
