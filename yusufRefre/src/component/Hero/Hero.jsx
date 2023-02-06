import React from 'react';
import NavBar from '../NavBar/NavBar';
import { heroSection } from '../../constants/info';

function Hero() {
  return (
    <div className="section_L bg-primary">
      {/* //this div will a loader animation */}
      <div className="bg-red-600" />
      <div className="flex justify-between p-2 py-4 mb-4 md:hidden border-b-2 border-primary2">
        <h3 className="text-gray-900 font-medium font-title text-xl"> Yousuf refrigeration</h3>
        <NavBar />
      </div>
      <div className="md:container m-4  md:mx-auto py-8 md:py-16
       "
      >
        {/* <div className="md:flex md:justify-between hidden md:block border-b-2 border-primary2 py-8 mb-8">
          <h3 className="text-gray-900 font-medium font-title text-xl"> Yousuf refrigeration</h3>
          <NavBar />
        </div> */}
        <div className="md:flex">
          <div className="w-full md:w-9/12">
            <h1 className="MainTitle bg-clip-text  text-transparent bg-gradient-to-r from-pink-500 to-violet-600">{heroSection.titile}</h1>
            <p className="paragraph">{heroSection.details}</p>
            <button className="btn" type="button">Contract Us</button>
            <button className="btn" type="button">learn More</button>

            {/* button and details why you guys trust us  */}
          </div>
          <div className=" md:w-1/4 bg-slate-300">
            <h1>left </h1>
            {/* // this is left
            // there will be gradient according to picture */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
