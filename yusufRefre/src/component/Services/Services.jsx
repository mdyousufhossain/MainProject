import React from 'react';
import AnimatedServiceHeader from './AnimatedServiceHeader';

function Service() {
  return (
    <section className="section_L bg-primary dark:bg-secondary">
      <AnimatedServiceHeader message="why choose us" />
      <div className="flex">

        <div className="w-full h-screen bg-red-600 sticky top-0">
          <div className="w-full h-screen bg-red-900">
            <h1 className="text-center MainTitle  text-Title_light dark:text-primary2">
              First thing first <br /> Fuck your for choosing us
            </h1>
          </div>

        </div>

        <div className="w-full min-h-screen bg-blue-300 sticky top-0">
          <div className="w-full h-screen bg-green-600">
            <h1 className="text-center MainTitle  text-Title_light dark:text-primary2">thank you</h1>
          </div>
          <div className="w-full h-screen bg-red-400">
            <h1 className="text-center MainTitle  text-Title_light dark:text-primary2">Move your ass your brokeie </h1>
          </div>
          <div className="w-full h-screen bg-yellow-500">
            <h1 className="text-center MainTitle  text-Title_light dark:text-primary2"> not gonna lie it supposed to be hard</h1>
          </div>
        </div>

      </div>
      <div className="flex">

        <div className="w-full min-h-screen bg-red-300 sticky top-0">
          <div className="w-full h-screen bg-red-600">
            <h1 className="text-center MainTitle  text-Title_light dark:text-primary2">thank you</h1>
          </div>
          <div className="w-full h-screen bg-blue-400">
            <h1 className="text-center MainTitle  text-Title_light dark:text-primary2">yo but pretty dead</h1>
          </div>
          <div className="w-full h-screen bg-slate-800">
            <h1 className="text-center MainTitle  text-Title_light dark:text-primary2"> not gonna lie it supposed to be hard</h1>
          </div>
        </div>
        <div className="w-full h-screen bg-green-600 sticky top-0">
          <div className="w-full h-screen bg-gray-900">
            <h1 className="text-center MainTitle  text-Title_light dark:text-primary2">
              <AnimatedServiceHeader message="fuck you" />
            </h1>
          </div>

        </div>

      </div>

    </section>
  );
}
export default Service;
