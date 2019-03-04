import React from 'react';

export default ({ finished, active }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <g transform="translate(3 3)" fill="none" fillRule="evenodd">
      <circle
        stroke="#FFF"
        strokeWidth="3"
        fill={finished || active ? '#4DACF3' : '#C2C2C2'}
        cx="9"
        cy="9"
        r="10.5"
      />
      <path
        d="M9.109 4.084c-.014-.112-.203-.112-.218 0C8.418 7.786 6 8.549 6 11.122 6 12.712 7.373 14 9 14s3-1.289 3-2.878c0-2.573-2.418-3.336-2.891-7.038zM8.993 7.22l-.111.368c-.239.774-.509 1.651-.509 2.666 0 .55-.354.745-.686.745-.38 0-.687-.284-.687-.634 0-1.199.631-1.982 1.188-2.673.174-.217.339-.421.473-.625.061-.093.226-.09.3.003a.163.163 0 0 1 .032.15z"
        fill="#FFF"
        fillRule="nonzero"
      />
    </g>
  </svg>
);
