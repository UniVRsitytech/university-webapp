import React from 'react';
import { Parallax, Background } from 'react-parallax';

const MyComponent = () => (
  <div>
    <Parallax
      blur={10}
      bgImage={require('../../assets/images/spotlight03.png')}
      bgImageAlt="the cat"
      strength={200}
    >
      Put some text content here
      or even an empty div with fixed dimensions
      to have a height for the parallax.
      <div style={{ height: '200px' }} />
    </Parallax>
    <Parallax
      blur={{ min: -15, max: 15 }}
      bgImage={require('../../assets/images/spotlight02.png')}
      bgImageAlt="the dog"
      strength={200}
    >
      Blur transition from min to max
      <div style={{ height: '200px' }} />
    </Parallax>
    <Parallax strength={300}>
      <div>Use the background component for custom elements</div>
      <Background className="custom-bg">
      {/* <img src={ require('../../assets/images/logo.png') } /> */}
      </Background>
    </Parallax>
  </div>
);
export default MyComponent;