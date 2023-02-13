import React from 'react';
import useIntersectionObserver from '../../Helper/AnimatedOnview';

function Service() {
  const [ref, isIntersecting] = useIntersectionObserver({
    root: null,
    rootMargin: '0px',
    threshold: 1.0,
  });

  return (
    <section className="section_L bg-primary dark:bg-secondary">
      <div>
        <h1
          className={`${isIntersecting ? 'animate-text' : ''}  text-center MainTitle  text-Title_light dark:text-primary2' : 'MainTitle  text-Title_light dark:text-primary2`}

          ref={ref}
        >
          yeah
        </h1>
      </div>
    </section>
  );
}

export default Service;
