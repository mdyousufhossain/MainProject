import React from 'react';
import AnimatedServiceHeader from './AnimatedServiceHeader';

function Service() {
  return (
    <section className="section_L bg-primary dark:bg-secondary">
      <AnimatedServiceHeader />
      <div className='flex'>
        <div className='w-full min-h-screen bg-red-600'></div>
        <div className='w-full min-h-screen bg-red-300'></div>
      </div>
    </section>
  );
}
export default Service;
