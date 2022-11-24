import './accounts.css';
import Sidebar from '../sidebar/sidebar';
import Navbar from '../../../../components/navbar/navbar';
import Table from 'react-bootstrap/Table';
import Product from '../../../../components/product/product';
import {BiSearchAlt2} from 'react-icons/bi';

import { useState } from 'react';

export default function AccountManagement() {

    const [showCreate, setShowCreate] = useState(false);

    console.log(showCreate);
    const toggleShowCreate = () => {
        setShowCreate(!showCreate);
    }

    return(
        <div className="accounts">
            <Sidebar/>
            <div className="wrapper">
                <Navbar/>
                <div className="mainAccount">
                    <div className='navAccount'>
                        <button className="createAccount" onClick={toggleShowCreate}>
                            Create Account
                        </button>
                        <div className="searchAccount">
                            <input type="text" placeholder='Search...' />
                            <BiSearchAlt2 className='searchIcon'/>
                        </div>
                    </div>
                    <div className="listAccount">
                        <Table responsive>
                            <thead>
                                <tr>
                                <th>#</th>
                                <th>id</th>
                                <th>name</th>
                                <th>year</th>
                                <th>color</th>
                                <th>status</th>
                                <th>owner</th>
                                <th>warrantyPeriod</th>
                                <th>factory</th>
                                <th>serviceCenter</th>
                                <th>distributor</th>

                                </tr>
                            </thead>
                            <tbody> 
                                <Product/>
                                <Product/>                       
                                <Product/>                       
                            
                            </tbody>
                        </Table>
                    </div>
                </div>
            </div>


            {showCreate && (
                <div className="model">
                    <div onClick={toggleShowCreate} className="overlay"></div>
                    <div className="content">
                        <input className='abc' type="text" placeholder='nhajp due' />
                        <input className='abc' type="text" placeholder='nhajp due' />
                        <input className='abc' type="text" placeholder='nhajp due' />
                        <input className='abc' type="text" placeholder='nhajp due' />
                        <input className='abc' type="text" placeholder='nhajp due' />

                        <button className='submit'>submit</button>
                    </div>
                </div>
            )}
            
        </div>
    )
}