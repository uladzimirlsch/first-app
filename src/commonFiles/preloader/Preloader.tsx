import React from 'react';
import preloader from '../../assets/images/preloader.svg';

const Preloader = () => {
  return (
    <div style={{ backgroundColor: 'gainsboro' }}>
      <img src={preloader} alt="" />
    </div>
  );
};
export default Preloader;
