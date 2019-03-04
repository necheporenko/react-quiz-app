import React from 'react';

export default ({ finished, active }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <g transform="translate(3 3)" fill="none" fillRule="evenodd">
      <circle
        fill={finished || active ? '#EE584E' : '#C2C2C2'}
        stroke="#FFF"
        strokeWidth="3"
        cx="9"
        cy="9"
        r="10.5"
      />
      <path
        d="M6.815 15c-.767-1.803-.359-2.836.231-3.81.646-1.065.813-2.12.813-2.12s.508.745.305 1.91c.897-1.127 1.066-2.923.93-3.61 2.029 1.599 2.896 5.063 1.727 7.63 6.213-3.968 1.546-9.905.733-10.573.271.668.322 1.8-.225 2.35C10.403 2.812 8.113 2 8.113 2c.27 2.045-.982 4.28-2.19 5.95-.043-.815-.088-1.377-.467-2.157-.086 1.48-1.088 2.688-1.36 4.172-.368 2.01.276 3.48 2.72 5.035z"
        fill="#FFF"
      />
    </g>
  </svg>
);
