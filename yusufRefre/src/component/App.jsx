import React from 'react';

function App() {
  return (
    <div className="flex flex-col m-auto xs:m-0 xs:flex-row xs:justify-around  mt-4">
      <div className="w-[400px] h-[400px]  bg-secondary  rounded">
        <h1 className="MainTitle text-Title_Dark ">This Is Dark Mode</h1>
        <div className="bg-secondary2">
          <p className="paragraph font-para text-Para_Dark">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure velit et sint aliquid debitis eveniet corrupti earum, blanditiis voluptatum quibusdam accusamus eos exercitationem molestias molestiae quidem rem doloremque? Necessitatibus, illum?</p>
        </div>
      </div>
      <div className="w-[400px] h-[400px]  bg-primary  rounded">
        <h1 className="MainTitle text-Title_light ">This Is Dark Mode</h1>
        <div className="bg-primary2">
          <p className="paragraph font-para text-Para_Light">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure velit et sint aliquid debitis eveniet corrupti earum, blanditiis voluptatum quibusdam accusamus eos exercitationem molestias molestiae quidem rem doloremque? Necessitatibus, illum?</p>
        </div>
      </div>
    </div>
  );
}

export default App;
