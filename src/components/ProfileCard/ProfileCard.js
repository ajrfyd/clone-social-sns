import React from "react";
import Cover from '../../assets/imgs/cover.jpg';
import Profile from '../../assets/imgs/profileImg.jpg';
import './ProfileCard.css';

const ProfileCard = () => {

  return (
    <div className='ProfileCard'>
      <div className='ProfileImages' >
        <img src={Cover} alt='cover' />
        <img src={Profile} alt='profile image' />
      </div>

      <div className="ProfileName">
        <span>Zendaya Mj</span>
        <span>Senior UI/UI Designer</span>
      </div>
    </div>
  )
}

export default ProfileCard;