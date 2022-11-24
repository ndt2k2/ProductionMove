import './profile.css'
import avatar from '../../cat.jpg'
import React, { useState } from 'react'

import { FaRegTimesCircle, FaUserCircle } from "react-icons/fa";
import { FiEdit2 } from "react-icons/fi";


const Profile = () => {

    const [showProfile, setShowProfile] = useState(false);
    const [editProfile, setEditProfile] = useState(false); 

    const toggleShowProfile = () => {
        setShowProfile(!showProfile);
      };
    
    const toggleEditProfile = () => {
        setEditProfile(!editProfile);
    };

  return (
    <>
    <div className="top" title='admin' onClick={toggleShowProfile}>
        <img className='avatar' src={avatar} alt="" />            
    </div>

    {showProfile && (
        <div className="model">
            <div onClick={toggleShowProfile} className="overlay"></div>
            <div className="content">
                <div className="avatarWrapper">
                    <img className='avatar2' src={avatar} alt="" />            
                </div>
                <h3>Ten: Quyet</h3>
                <h3>tuoi: 19</h3>
                <h3>Quê: Vĩnh Phúc</h3>
                <h3>email: quyet123@gmail.com</h3>

            </div>
        </div>
    )}
    </>
  )
}

export default Profile