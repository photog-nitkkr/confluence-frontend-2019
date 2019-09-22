import React, { useContext, useEffect, useState, useRef } from 'react';
import Store from '../../store/store';
// import OauthLogin from '../utils/OauthLogin';
import Nav from '../utils/Nav';
const HomePage = () => {
  const { state, dispatch } = useContext(Store);
  console.log(state);
  return (
    <>
      <div class='container'>
        <Nav />
        <div class='title-container'>
          <div className='tape'>
            <div class='grain'></div>
            <div class='cassette'>
              <div class='head'></div>
              <div class='label'>
                <div class='cutout'>
                  <div class='reel_hole'>
                    <div class='gear'></div>
                  </div>
                  <div class='reel_hole'>
                    <div class='gear'></div>
                  </div>
                  <div class='window'>
                    <div class='spool'></div>
                    <div class='spool'></div>
                  </div>
                </div>
              </div>
              <div class='accents'>
                <div class='screw i1'></div>
                <div class='screw i2'></div>
                <div class='screw i3'></div>
                <div class='screw i4'></div>
                <div class='screw i5'></div>
                <div class='hole i1'></div>
                <div class='hole i2'></div>
                <div class='hole i3'></div>
                <div class='hole i4'></div>
              </div>
            </div>
          </div>
          <h1 className='front'>
            <span>Confluenece'19</span>
            <br />
            <p className='sub'>REMINISCING THE 90s</p>
          </h1>
          <div class='circle'></div>
        </div>

        <svg
          version='1.1'
          id='svg-left'
          x='0px'
          y='0px'
          viewBox='0 0 600 400'
          style={{ enableBackground: 'new 0 0 600 400' }}
        >
          <g>
            <path
              class='blob'
              d='M220.262,366.814c41.228-14.367,64.978-58.826,96.198-136.802
		c43.518-108.692,53.929-137.426,67.672-149.92s154.708-58.065,177.821-65.59C576.392,9.802,591.841,5.391,596.66-2H-2v334.452
		c16.689,8.319,35.468,14.508,56.726,18.745C98.453,359.914,179.034,381.181,220.262,366.814z'
            />
          </g>
        </svg>
        <svg
          version='1.1'
          id='svg-right'
          x='0px'
          y='0px'
          viewBox='0 0 600 400'
          style={{ nableBackground: 'new 0 0 600 400' }}
        >
          <g>
            <path
              class='blob2'
              d='M361.076,143.985c9.307,26.708,38.108,42.094,88.622,62.319
		c70.412,28.192,89.027,34.936,97.12,43.839c8.093,8.903,37.615,100.223,42.49,115.196c3.045,9.354,5.902,19.361,10.691,22.483V0
		H383.337c-5.389,10.811-9.398,22.976-12.143,36.748C365.547,65.075,351.769,117.277,361.076,143.985z'
            />
          </g>
        </svg>
      </div>

      <div></div>
    </>
  );
};

export default HomePage;