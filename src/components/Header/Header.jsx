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
          <p className="header-text fs-18 f2-3">This is a perfect website for book enthusiasts to find and get informations about their favorite books.</p>
          <p className="header-text fs-18 f2-3">There is a search panel to search with the name of the book.</p>
          <SearchForm/>
        </div>
      </header>
    </div>
  )
}

export default Header
