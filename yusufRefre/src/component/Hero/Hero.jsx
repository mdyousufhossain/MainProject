import React, { Suspense } from 'react';
import { motion, useScroll } from 'framer-motion';
import NavBar from '../NavBar/NavBar';
import { heroSection } from '../../constants/info';
import { ServicesMini } from '../Services/Services';

const Form = React.lazy(() => import('./Form'));

const ServicesGuy = React.lazy(() => import('./serviceGuy'));

function Hero() {
  const { scrollYProgress } = useScroll();
  return (

    <div className="section_L bg-primary dark:bg-secondary">
      {/* loding animation div */}
      <motion.div
        className="bg-secondary2 dark:bg-primary2 h-1 fixed top-0
        left-0
        right-0 z-20 origin-top-left"
        style={{ scaleX: scrollYProgress }}
      />
      {/* navbar for mobile  */}
      <div className="flex justify-between  py-4 mb-4 md:hidden border-b-2 border-primary2 dark:border-secondary2">
        {/* logo for mobile */}
        <h3 className="text-gray-900 dark:text-Title_Dark font-medium font-title text-xl mx-2"> Yousuf refrigeration</h3>
        {/* navbar design for mobile */}
        <NavBar />
      </div>
      {/* starting the pc section of navbar and hero design */}
      <div className="md:container my-4 md:mx-auto pb-8 md:pb-10
       "
      >

        {/* navbar menu for pc  */}
        <div className="md:flex  md:justify-between hidden md:block border-b-2 border-primary2 py-6 mb-6 dark:border-secondary2">

          <h3 className="text-gray-900 dark:text-Title_Dark font-medium font-title text-xl"> Yousuf refrigeration</h3>

          <NavBar />
        </div>
        {/* hero section starting here  */}
        <div className="md:flex md:justify-between py-4 md:py-8">
          {/* title and details text area and button  */}
          <div className="w-full md:w-3/5">
            {/* titile */}
            <div className="flex justify-center md:justify-start">
              <motion.h1
                animate={{ y: -20 }}
                transition={{ ease: 'easeOut', duration: 1 }}
                className="MainTitle bg-clip-text  text-transparent bg-gradient-to-r from-pink-500 to-violet-700 dark:text-Title_Dark"
              >35 years of <br />
                <span className="MainTitle  text-Title_light dark:text-primary2">
                  experience
                </span>
              </motion.h1>

              <Suspense fallback={<div> Please Wait... </div>}>
                <div>
                  <ServicesGuy />
                </div>
              </Suspense>

            </div>
            {/* details */}
            <p className="consText text-Title_light dark:text-Title_Dark">{heroSection.details}</p>
            <div className="flex justify-around md:flex-none md:justify-start">
              <button className="btn " type="button">Contact Us</button>
              <button className="btn md:mx-4" type="button">learn More </button>
            </div>
            {/* image cersalll from glider and motion js */}
          </div>
          <div className="md:w-4/12">
            <Suspense fallback={<div> Please Wait... </div>}>
              <Form />
            </Suspense>
          </div>
        </div>
        <ServicesMini />
      </div>
    </div>
  );
}

export default Hero;
