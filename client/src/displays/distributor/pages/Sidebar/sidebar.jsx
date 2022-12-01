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

                    <NavLink style={{textDecoration: 'none'}} to='/products'>
                        <li title='products'>               
                            <RiProductHuntLine className='icon'/> 
                            <span>Products</span>                            
                        </li >
                    </NavLink>

                    <NavLink style={{textDecoration: 'none'}} to='/recallProductions'>
                        <li title='recallProductions'>
                            <AiOutlineUnorderedList className='icon'/>
                            <span>Recall Productions</span>
                            
                        </li>
                    </NavLink>

                    <NavLink style={{textDecoration: 'none'}} to='/order'>
                        <li title='order'>
                            <BsPerson className='icon'/>
                            <span>Order</span>
                            
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