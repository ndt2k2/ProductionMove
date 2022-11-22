import './admin.css';
import Navbar from '../../components/navbar/navbar';

import {
    BrowserRouter as Router,
    Routes,
    Route, 
    Navigate
  } from "react-router-dom";
import Statistical from './pages/statistical/statistical';
import AccountManagement from './pages/accountManagement/accountManagement';
import Product from './pages/product/product';
import ProductLine from './pages/productLine/productLine';

export default function Admin() {
    return(
        <div className="container">
            <Router>
                <Routes>
                    <Route path='/' element = {<Statistical/>}/>
                    <Route path='/accountManagement' element = {<AccountManagement/>}/>
                    <Route path='/product' element = {<Product/>}/>
                    <Route path='/productLine' element = {<ProductLine/>}/>
                </Routes>
            </Router>
        </div>
    );
}