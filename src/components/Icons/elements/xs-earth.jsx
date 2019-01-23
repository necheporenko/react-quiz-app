import React from "react";

export default ({ finished, active }) => (
  <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
    <g transform="translate(3 3)" fill="none" fillRule="evenodd">
      <circle
        stroke="#FFF"
        strokeWidth="3"
        fill={finished || active ? "#8AC82F" : "#C2C2C2"}
        cx="9"
        cy="9"
        r="10.5"
      />
      <path
        d="M6.762 6.813c-2.236 1.199-2.108 3.151-2.031 3.874 2.889-3.161 7.21-3.008 7.21-3.008s-6.125 1.94-7.924 5.833c-.142.307.666.707.85.343.552-1.082 1.32-1.894 1.32-1.894 1.132.39 3.09.846 4.479-.057 1.844-1.199 1.656-3.857 4.288-5.15.615-.303-5.16-1.567-8.192.059z"
        fill="#FFF"
      />
    </g>
  </svg>
);
