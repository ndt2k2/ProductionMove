import './sidebar.css';
import { Link, NavLink } from 'react-router-dom';

import Profile from '../../../../components/profile/profile';
import {MdDashboard} from 'react-icons/md';
import {AiOutlineUnorderedList} from 'react-icons/ai';
import {GiAutoRepair} from 'react-icons/gi';
import {FiLogOut} from 'react-icons/fi';
import {VscGraphLine} from 'react-icons/vsc'

import { useState, useEffect } from 'react';
import Statistical from '../statistical/statistical';
export default function Sidebar() {
 
    const [selected, setSelected] = useState(0);

    const click1 = (selected) => {
        setSelected(selected);
    }
    const Sidebar = ['statistical','products']
    console.log(selected)
    const sta = document.getElementById('sta')
    return(
        <div className="sidebar">
               
            <Profile/>

            <div className="center">
                <ul>
                    <NavLink style={{textDecoration: 'none'}}  to='/'>
                        <li title='Statistical' >
                            <VscGraphLine className='icon'/>
                            <span>Statistical</span>
                        </li>
                    </NavLink>

                    <NavLink style={{textDecoration: 'none'}} to='/product'>
                        <li title='product' id='pro' >               
                            <GiAutoRepair className='icon'/> 
                            <span>Repair</span>
                        </li >
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