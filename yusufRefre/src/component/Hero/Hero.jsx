import React from 'react';
import NavBar from '../NavBar/NavBar';
import { heroSection, promotion } from '../../constants/info';
import rat from '../../assets/repireguy.png';

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
      <div className="md:container my-4 md:mx-auto pb-8 md:pb-10
       "
      >

        {/* navbar menu for pc  */}
        <div className="md:flex  md:justify-between hidden md:block border-b-2 border-primary2 py-6 mb-6">

          <h3 className="text-gray-900 font-medium font-title text-xl"> Yousuf refrigeration</h3>

          <NavBar />
        </div>
        {/* hero section starting here  */}
        <div className="md:flex md:justify-between py-4 md:py-16">
          {/* title and details text area and button  */}
          <div className="w-full md:w-3/5">
            {/* titile */}
            <div className="flex">
              <h1 className="MainTitle bg-clip-text  text-transparent bg-gradient-to-r from-pink-500 to-violet-700">35 years of <br />
                <span className="MainTitle mx-0 text-Title_light">
                  experience
                </span>
              </h1>
              <div className="py-16"> <img src={rat} className="h-[256px]" alt="" /></div>

            </div>
            {/* details */}
            <p className="consText text-Title_light">{heroSection.details}</p>

            <button className="btn" type="button">Contract Us</button>
            <button className="btn md:mx-4" type="button">learn More </button>

            {/* image cersalll from glider and motion js */}
          </div>
          <div className=" md:w-4/12 bg-slate-300">
            <h1>left </h1>
            {/* // this is left
            // there will be gradient according to picture */}
          </div>
        </div>
        <div className="w-full">
          <div className="flex justify-around md:px-16">

            { promotion && promotion.map((p) => (
              <h3 className="consText text-Title_light" key={p.id}>
                <span> <img className="h-[77px] mx-auto" src={p.icon} /> </span>
                {p.titile}
              </h3>
            ))}

          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
