import React from "react";
import './LogoSearch.css';
import Logo from '../../assets/imgs/logo.png';
import { FiSearch } from 'react-icons/fi';

const LogoSearch = () => {

  return (
    <div className='LogoSearch'>
      <img src={Logo} alt="logo" />
      <div className="Search">
        <input type="text" placeholder='#Explore'/>
        <div className="s-icon">
          <FiSearch />
        </div>
      </div>
    </div>
  )
}

export default LogoSearch;