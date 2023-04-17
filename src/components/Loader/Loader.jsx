import React from 'react';
import LoaderImg from '../../images/pngwing.com (1).png';
import './Loader.css';

const Loader = () => {
  return (
    <div className='loader flex flex-c'>
      <img src = {LoaderImg} alt = "loader"/>
    </div>
  )
}

export default Loader
