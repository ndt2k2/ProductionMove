import './sidebar.css';
import { Link,NavLink } from 'react-router-dom';
import Profile from '../../../../components/profile/profile';

import {MdDashboard} from 'react-icons/md';
import {AiOutlineUnorderedList} from 'react-icons/ai';
import {RiProductHuntLine} from 'react-icons/ri';
import {FiLogOut} from 'react-icons/fi';
import {BsPerson} from 'react-icons/bs'

// import { useState, useEffect } from 'react';

export default function Sidebar() {
 
    

    return(
        <div className="sidebar">
               
            <Profile/>

            <div className="center">
                <ul>
                    <NavLink style={{textDecoration: 'none'}} to='/'>
                        <li title='Statistical'>
                            <MdDashboard className='icon'/>
                            <span>Statistical</span>
                        </li>
                    </NavLink>

                    <NavLink style={{textDecoration: 'none'}} to='/product'>
                        <li title='product'>               
                            <RiProductHuntLine className='icon'/> 
                            <span>Product</span>                            
                        </li >
                    </NavLink>

                    <NavLink style={{textDecoration: 'none'}} to='/productLine'>
                        <li title='productLine'>
                            <AiOutlineUnorderedList className='icon'/>
                            <span>ProductLine</span>
                            
                        </li>
                    </NavLink>

                    <NavLink style={{textDecoration: 'none'}} to='/accountManagement'>
                        <li title='accountManagement'>
                            <BsPerson className='icon'/>
                            <span>Account</span>
                            
                        </li>
                    </NavLink>
                </ul>

            </div>

            <div className='logout' title='log out'>
                <div className='logoutWrap'>
                    <FiLogOut className='iconlogout'/>
                    <span>Log out</span>
                </div>
            </div>
                
        </div>
    )
}