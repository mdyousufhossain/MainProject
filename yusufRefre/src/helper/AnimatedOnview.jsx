import { useEffect } from 'react';

const useIntersectionObserver = (elementRef) => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          return (
            console.log('yes', elementRef, elementRef.current)

          );
        }
        return false;
      });
    });
    observer.observe(elementRef.current);

    return () => {
      observer.unobserve(elementRef.current);
    };
  }, []);
};

export default useIntersectionObserver;
