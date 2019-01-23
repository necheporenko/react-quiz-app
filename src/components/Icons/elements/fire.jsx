import React from "react";

export default ({ finished, active }) => (
  <svg width="59" height="59" xmlns="http://www.w3.org/2000/svg">
    <g transform="translate(2 2)" fill="none" fillRule="evenodd">
      <circle
        fill={finished ? "#F8CC33" : "#fff"}
        stroke={finished || active ? "#F8CC33" : "#000"}
        strokeOpacity={finished || active ? "1" : ".24"}
        strokeWidth="4"
        cx="27.5"
        cy="27.5"
        r="27.5"
      />
      <path
        d="M21.164 46c-2.226-4.992-1.04-7.853.67-10.548 1.874-2.952 2.357-5.874 2.357-5.874s1.472 2.064.883 5.292c2.602-3.122 3.093-8.096 2.7-10.001C33.656 29.299 36.17 38.89 32.782 46c18.017-10.987 4.482-27.428 2.125-29.28.786 1.852.935 4.987-.652 6.509C31.569 12.25 24.927 10 24.927 10c.786 5.662-2.847 11.853-6.35 16.479-.124-2.258-.254-3.816-1.356-5.976-.247 4.101-3.155 7.444-3.942 11.553-1.067 5.565.799 9.64 7.885 13.944z"
        fill={(finished && "#fff") || (active && "#F8CC33") || "#000"}
        fillOpacity={finished || active ? "1" : ".24"}
      />
    </g>
  </svg>
);
