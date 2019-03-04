import React from 'react';

export default ({ finished, active }) => (
  <svg width="59" height="59" viewBox="0 0 59 59" xmlns="http://www.w3.org/2000/svg">
    <g transform="translate(2 2)" fill="none" fillRule="evenodd">
      <circle
        fill={finished ? '#8AC82F' : '#fff'}
        stroke={finished || active ? '#8AC82F' : '#000'}
        strokeOpacity={finished || active ? '1' : '.24'}
        strokeWidth="4"
        cx="27.5"
        cy="27.5"
        r="27.5"
      />
      <path
        d="M20.035 17.642c-6.506 3.896-6.133 10.242-5.909 12.59C22.53 19.96 35.1 20.457 35.1 20.457s-17.818 6.308-23.05 18.957c-.414.998 1.939 2.297 2.475 1.116 1.603-3.517 3.836-6.156 3.836-6.156 3.294 1.265 8.993 2.748 13.032-.185 5.365-3.897 4.817-12.535 12.475-16.741 1.79-.982-15.012-5.089-23.832.194z"
        fill={(finished && '#fff') || (active && '#8AC82F') || '#000'}
        fillOpacity={finished || active ? '1' : '.24'}
      />
    </g>
  </svg>
);
