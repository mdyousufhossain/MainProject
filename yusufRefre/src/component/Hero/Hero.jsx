import React from 'react';
import NavBar from '../NavBar/NavBar';
import { heroSection } from '../../constants/info';

function Hero() {
  return (
    <div className="section_L bg-primary">
      {/* loding animation div */}
      <div className="bg-red-600" />
      {/* navbar for mobile  */}
      <div className="flex justify-between  py-4 mb-4 md:hidden border-b-2 border-primary2">
        {/* logo for mobile */}
        <h3 className="text-gray-900 font-medium font-title text-xl mx-2"> Yousuf refrigeration</h3>
        {/* navbar design for mobile */}
        <NavBar />
      </div>
      {/* starting the pc section of navbar and hero design */}
      <div className="md:container my-4 md:mx-auto py-8 md:py-10
       "
      >
        {/* navbar menu for pc  */}
        <div className="md:flex  md:justify-between hidden md:block border-b-2 border-primary2 py-6 mb-6">

          <h3 className="text-gray-900 font-medium font-title text-xl"> Yousuf refrigeration</h3>

          <NavBar />
        </div>
        {/* hero section starting here  */}
        <div className="md:flex md:justify-between">
          {/* title and details text area and button  */}
          <div className="w-full md:w-3/5">
            {/* titile */}
            <h1 className="MainTitle bg-clip-text  text-transparent bg-gradient-to-r from-pink-500 to-violet-600">{heroSection.titile}</h1>
            {/* details */}
            <p className="paragraph ">{heroSection.details}</p>

            <button className="btn" type="button">Contract Us</button>
            <button className="btn" type="button">learn More </button>

            {/* image cersalll from glider and motion js */}
          </div>
          <div className=" md:w-4/12 bg-slate-300">
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
