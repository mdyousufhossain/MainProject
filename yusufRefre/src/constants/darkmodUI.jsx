import React from 'react';
import useDarkMode from './darkmode';

function SunSVG({ size, divStyle }) {
  return (
    <div className={divStyle}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        width={size}
        height={size}
        viewBox="0 0 256 256"
        className="fill-slate-50"
      >

        <defs />
        <g className="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;" transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)">
          <path d="M 45 11.861 c 2.927 0 5.764 0.383 8.467 1.096 C 51.156 7.54 48.279 3.09 45 0 c -3.279 3.09 -6.156 7.54 -8.467 12.957 C 39.236 12.245 42.073 11.861 45 11.861 z" className="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " strokeLinecap="round" />
          <path d="M 73.641 28.339 c 2.199 -5.468 3.312 -10.652 3.178 -15.159 c -4.506 -0.133 -9.691 0.979 -15.159 3.179 C 66.617 19.248 70.752 23.383 73.641 28.339 z" className="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " strokeLinecap="round" />
          <path d="M 28.339 16.359 c -5.468 -2.199 -10.652 -3.312 -15.159 -3.178 c -0.133 4.506 0.979 9.691 3.178 15.159 C 19.248 23.383 23.383 19.248 28.339 16.359 z" className="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " strokeLinecap="round" />
          <path d="M 90 45 c -3.09 -3.279 -7.54 -6.156 -12.957 -8.467 c 0.713 2.703 1.096 5.54 1.096 8.467 s -0.383 5.764 -1.096 8.467 C 82.46 51.156 86.91 48.279 90 45 z" className="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " strokeLinecap="round" />
          <path d="M 11.861 45 c 0 -2.927 0.383 -5.764 1.096 -8.467 C 7.54 38.844 3.09 41.721 0 45 c 3.09 3.279 7.54 6.156 12.957 8.467 C 12.245 50.764 11.861 47.927 11.861 45 z" className="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " strokeLinecap="round" />
          <path d="M 61.661 73.641 c 5.468 2.199 10.652 3.312 15.159 3.178 c 0.133 -4.506 -0.979 -9.691 -3.178 -15.159 C 70.752 66.617 66.617 70.752 61.661 73.641 z" className="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " strokeLinecap="round" />
          <path d="M 45 78.139 c -2.927 0 -5.764 -0.383 -8.467 -1.096 C 38.844 82.46 41.721 86.91 45 90 c 3.279 -3.09 6.156 -7.54 8.467 -12.957 C 50.764 77.755 47.927 78.139 45 78.139 z" className="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " strokeLinecap="round" />
          <path d="M 16.359 61.661 c -2.199 5.468 -3.312 10.652 -3.178 15.159 c 4.506 0.133 9.691 -0.979 15.159 -3.178 C 23.383 70.752 19.248 66.617 16.359 61.661 z" className="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " strokeLinecap="round" />
          <circle cx="45" cy="45" r="27" className="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;" transform="  matrix(1 0 0 1 0 0) " />
        </g>
      </svg>
    </div>
  );
}

function DarkModeMoon({ size, divStyle }) {
  return (
    <div className={divStyle}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        width={size}
        height={size}
        viewBox="0 0 256 256"
      >

        <defs />
        <g className="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1; transform=translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)">
          <path d="M 87.823 60.7 c -0.463 -0.423 -1.142 -0.506 -1.695 -0.214 c -15.834 8.398 -35.266 2.812 -44.232 -12.718 c -8.966 -15.53 -4.09 -35.149 11.101 -44.665 c 0.531 -0.332 0.796 -0.963 0.661 -1.574 c -0.134 -0.612 -0.638 -1.074 -1.259 -1.153 c -9.843 -1.265 -19.59 0.692 -28.193 5.66 C 13.8 12.041 6.356 21.743 3.246 33.35 S 1.732 57.08 7.741 67.487 c 6.008 10.407 15.709 17.851 27.316 20.961 C 38.933 89.486 42.866 90 46.774 90 c 7.795 0 15.489 -2.044 22.42 -6.046 c 8.601 -4.966 15.171 -12.43 18.997 -21.586 C 88.433 61.79 88.285 61.123 87.823 60.7 z" className="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
}

function ThemeIcon() {
  const [darkTheme, setDarkTheme] = useDarkMode();
  const handleMode = () => setDarkTheme(!darkTheme);
  return (
    <span onClick={handleMode}>
      {darkTheme ? (
        <SunSVG size={24} divStyle="h-[70px]" />
      ) : (
        <DarkModeMoon size={24} divStyle="h-[70px]" />
      )}
    </span>
  );
}

export default ThemeIcon;
