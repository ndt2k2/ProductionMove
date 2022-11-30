import './serviceCenter.css';
import Navbar from '../../components/navbar/navbar';

import {
    BrowserRouter as Router,
    Routes,
    Route, 
    Navigate
  } from "react-router-dom";
import Statistical from './pages/statistical/statistical';
import Products from './pages/products/products';


export default function ServiceCenter() {
    return(
        <div className="container">
            <Router>
                <Routes>
                    <Route path='/serCen/' element = {<Statistical/>}/>
                    <Route path='/serCen/product' element = {<Products/>}/>
                </Routes>
            </Router>
        </div>
    );
}