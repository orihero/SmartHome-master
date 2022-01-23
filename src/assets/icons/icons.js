import React from 'react';
import Svg, { Path }  from 'react-native-svg';

const Location = props => (
      <Svg
        width={10}
        height={25}
        viewBox="0 0 17 40"
        {...props}
      >
        <Path
          d="M8.064 21.486c-.251 0-.39-.03-.478-.133-.053-.062-5.382-6.388-6.802-9.45A8.207 8.207 0 010 8.45C0 4.066 3.617.5 8.064.5c4.446 0 8.063 3.59 8.063 8.002 0 1.333-.25 2.34-.862 3.476-1.694 3.138-6.667 9.3-6.717 9.362-.06.075-.165.146-.472.146h-.012zm0-16.103a3.105 3.105 0 00-3.102 3.102 3.105 3.105 0 003.102 3.1 3.105 3.105 0 003.101-3.1 3.105 3.105 0 00-3.101-3.102z"
          fill="#fff"
        />
      </Svg>
);
const LivingRoom =props => (
  <Svg
      width={70}
      height={45}
      viewBox="0 0 116 104"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M90.037 54.04l-1.64 5.253a11.447 11.447 0 01-10.933 8.04h-39.16c-5.014 0-9.44-3.253-10.934-8.04l-1.64-5.253A11.447 11.447 0 0014.797 46c-7.733 0-13.24 7.493-10.933 14.867l6.173 19.76a11.447 11.447 0 0010.933 8.04h73.827c5.013 0 9.44-3.254 10.933-8.04l6.174-19.76C114.21 53.493 108.704 46 100.97 46c-5.013 0-9.44 3.253-10.933 8.04z"
        stroke="#F90"
        strokeWidth={5.33333}
        strokeMiterlimit={10}
      />
      <Path
        d="M18.544 46.667l5.626-34.48c.6-5.414 5.174-9.52 10.614-9.52h47.52c5.44 0 10.013 4.106 10.6 9.52l5.64 33.146"
        stroke="#F90"
        strokeWidth={5.33333}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M36.544 88.667l-8 12M79.21 88.667l8 12"
        stroke="#F90"
        strokeWidth={5.33333}
        strokeMiterlimit={10}
        strokeLinecap="round"
      />
      <Path
        d="M41.21 56.667v-7.534c0-4.68 3.854-8.466 8.6-8.466h16.134c4.746 0 8.6 3.786 8.6 8.466v7.534"
        stroke="#F90"
        strokeWidth={5.33333}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
)
export {Location, LivingRoom};