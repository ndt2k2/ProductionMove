import './sidebar.css';
import { Link } from 'react-router-dom';
import avatar from '../../../../cat.jpg';

import {MdDashboard} from 'react-icons/md';
import {AiOutlineUnorderedList} from 'react-icons/ai';
import {RiAccountBoxFill, RiProductHuntLine} from 'react-icons/ri';
import {FiLogOut} from 'react-icons/fi';
import {BsPerson} from 'react-icons/bs'

import { useState } from 'react';

export default function Sidebar() {
 
    console.log(typeof avatar);
    const active = [1,2,3,4];
    const [selected, setSelected] = useState(0);

    const handleClick = (actived) => {
        setSelected(actived);
    }


    return(
        <div className="sidebar">
               
            <div className="top">
                <img className='avatar' src={avatar} alt="" />
                
            </div>

            <div className="center">

                <ul>
                    <Link style={{textDecoration: 'none'}} to='/'>
                        <li className={selected===active[0]? 'active' : ''}
                            onClick = {() => {
                                handleClick(active[0])
                            }}
                        >
                            <MdDashboard className='icon'/>
                            <span>Statistical</span>
                        </li>
                    </Link>

                    <Link style={{textDecoration: 'none'}} to='/product'>
                        <li className={selected===active[1]? 'active' : ''}
                            onClick = {() => {
                                handleClick(active[1])
                            }}
                        >
                
                            <RiProductHuntLine className='icon'/> 
                            <span>Product</span>
                            
                        </li>
                    </Link>

                    <Link style={{textDecoration: 'none'}} to='/productLine'>
                        <li className={selected===active[2]? 'active' : ''}
                            onClick = {() => {
                                handleClick(active[2])
                            }}
                        >
                            <AiOutlineUnorderedList className='icon'/>
                            <span>ProductLine</span>
                            
                        </li>
                    </Link>

                    <Link style={{textDecoration: 'none'}} to='/accountManagement'>
                        <li className={selected===active[3]? 'active' : ''}
                            onClick = {() => {
                                handleClick(active[3])
                            }}
                        >
                            <BsPerson className='icon'/>
                            <span>Account</span>
                            
                        </li>
                    </Link>
                </ul>

            </div>

            <div className='logout'>
                <div className='logoutWrap'>
                    <FiLogOut className='iconlogout'/>
                    <span>Log out</span>
                </div>
            </div>
                
        </div>
    )
}