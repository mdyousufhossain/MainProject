import React, { useRef } from 'react';
import useIntersectionObserver from '../../Helper/AnimatedOnview';

function Service() {
  const targetRef = useRef(null);
  useIntersectionObserver(targetRef);

  return (
    <section className="section_L bg-primary dark:bg-secondary">
      <div>
        <h1
          className="MainTitle text-center text-Title_light dark:text-primary2
        "
          ref={targetRef}
        >
          hahhahah
        </h1>
        {
            useIntersectionObserver(targetRef) ? 'yeas it is ' : 'nop not this'
        }
      </div>
    </section>
  );
}

export default Service;
