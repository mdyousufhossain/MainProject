import React, { useRef } from 'react';
import { useInView } from 'framer-motion';

function AnimatedServiceHeader() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const someStyle = {
    display: 'block',
    transform: 'translateX(-100px)',
    opacity: '0',
  };
  return (

    <div>
      <h1
        className={`${someStyle} text-center MainTitle  text-Title_light dark:text-primary2`}
        ref={ref}
        style={{
          transform: isInView ? 'none' : 'translateX(-200px)',
          opacity: isInView ? 1 : 0,
          transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
        }}
      >
        Why Choose us ?
      </h1>
    </div>
  );
}

export default AnimatedServiceHeader;
