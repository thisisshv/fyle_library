import React from 'react';
import Navbar from '../Navbar/Navbar';
import SearchForm from '../SearchForm/SearchForm';
import './Header.css'

const Header = () => {
  return (
    <div className='holder'>
      <header className="header">
        <Navbar/>
        <div className="header-content flex flex-c text-center text-white">
          <h2 className="header-title text-capitalize">Find the book of your choice</h2><br/>
          <p className="header-text fs-18 f2-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi voluptas omnis enim, illo tempora laudantium dicta libero perspiciatis id veniam perferendis nesciunt quaerat facilis quam.</p>
          <SearchForm/>
        </div>
      </header>
    </div>
  )
}

export default Header
