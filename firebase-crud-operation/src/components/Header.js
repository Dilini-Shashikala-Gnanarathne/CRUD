import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

function Header() {
  const [activeTab, setActiveTab] = useState('Home');
  const location=useLocation();
  useEffect(()=>{
    if (location.pathname==="/") {
        setActiveTab('Home')
    }
    else if (location.pathname==="/About") {
        setActiveTab('About')
    }
    else{
        setActiveTab('View') 
    }
  })
  return (
    <div className='Header'>
      <p className="logo">Contact App</p>
      <div className="header-right">
        <Link to="/">
          <p
            className={` ${activeTab === 'Home' ? 'active' : ' '}`}
            onClick={() => setActiveTab('Home')}
          >
            Home
          </p>
        </Link>
        <Link to="/About">
          <p
            className={` ${activeTab === 'About' ? 'active' : ' '}`}
            onClick={() => setActiveTab('About')}
          >
            About
          </p>
        </Link>
        <Link to="/view/:id">
          <p
            className={` ${activeTab === 'View' ? 'active' : ' '}`}
            onClick={() => setActiveTab('View')}
          >
            View
          </p>
        </Link>
      </div>
    </div>
  );
}

export default Header;
