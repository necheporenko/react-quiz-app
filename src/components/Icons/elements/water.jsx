import React from 'react';

export default ({ finished, active }) => (
  <svg width="59" height="59" viewBox="0 0 59 59" xmlns="http://www.w3.org/2000/svg">
    <g transform="translate(2 2)" fill="none" fillRule="evenodd">
      <circle
        fill={finished ? '#4DACF3' : '#fff'}
        stroke={finished || active ? '#4DACF3' : '#000'}
        strokeOpacity={finished || active ? '1' : '.24'}
        strokeWidth="4"
        cx="27.5"
        cy="27.5"
        r="27.5"
      />
      <path
        d="M27.844 12.251c-.045-.335-.643-.335-.688 0C25.658 23.358 18 25.646 18 33.365 18 38.133 22.348 42 27.5 42s9.5-3.867 9.5-8.635c0-7.72-7.658-10.007-9.156-21.114zm-.998 11.211c-.112.357-.231.725-.354 1.104-.755 2.322-1.61 4.954-1.61 8 0 1.648-1.123 2.234-2.175 2.234-1.199 0-2.174-.853-2.174-1.9 0-3.598 1.999-5.948 3.762-8.022.553-.65 1.074-1.263 1.498-1.874.194-.28.715-.268.952.01a.469.469 0 0 1 .101.448z"
        fill={(finished && '#fff') || (active && '#4DACF3') || '#000'}
        fillOpacity={finished || active ? '1' : '.24'}
        fillRule="nonzero"
      />
    </g>
  </svg>
);
