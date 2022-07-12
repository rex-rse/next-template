import React from 'react';

const Card = ({ title, data, icon }) => {
  return (
    <div className=" flex  text-black shadow-md rounded-lg max-h-48 hover:shadow-xl">
      <div className="z-20">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 330 164">
          <g id="f5ccb794-06b6-4f2e-94ca-241bd9fc624a" data-name="Layer 2">
            <rect
              x="0.24"
              width="329.76"
              height="165.04"
              fill="#2be068"
              opacity="0.1"
            />
          </g>
          <g id="a9dacb80-867e-4936-941a-5ddcfe6e98ea" data-name="Layer 1">
            <ellipse
              cx="287.02"
              cy="26.39"
              rx="59.46"
              ry="53.66"
              fill="#069346"
              opacity="0.27"
            />
            <ellipse
              cx="218.23"
              cy="15.38"
              rx="34.39"
              ry="31.03"
              fill="#069346"
              opacity="0.27"
            />
            <ellipse
              cx="319.43"
              cy="72.94"
              rx="20.75"
              ry="18.73"
              fill="#069346"
              opacity="0.27"
            />
            <ellipse
              cx="14.51"
              cy="151.06"
              rx="14.27"
              ry="12.87"
              fill="#069346"
              opacity="0.27"
            />
            <ellipse
              cx="5.98"
              cy="140.27"
              rx="5.98"
              ry="5.39"
              fill="#069346"
              opacity="0.27"
            />
            <ellipse
              cx="22.79"
              cy="158.61"
              rx="5.98"
              ry="5.39"
              fill="#069346"
              opacity="0.27"
            />
          </g>
          <div className="w-1/3 p-2 flex justify-center items-center">
            {icon}
          </div>
          <div className="w-2/3 p-2">
            <h1 className="text-3xl font-bold m-4">{title}</h1>
            <h2 className="text-5xl m-4">{data}</h2>
          </div>
        </svg>
      </div>
    </div>
  );
};

export default Card;
