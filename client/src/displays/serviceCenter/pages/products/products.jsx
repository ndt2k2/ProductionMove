import './products.css';
import Sidebar from '../sidebar/sidebar';
import Navbar from '../../../../components/navbar/navbar';
import Table from 'react-bootstrap/Table';
import Product from '../../../../components/product/product';
import {BiSearchAlt2} from 'react-icons/bi';

const listProduct = [
    {
        "id": "1",
        "name": "xe 1",
        "year": "2022",
        "tinh trang loi": "chay dau",
        "color": "den",
        "status": "da ban",
        "owner": "quyet",
        "thoi gian bao hanh": "2 nam",
        "factory": "Vinh Phuc",
        "serviceCenter": "-",
        "distributor": "tan xien ban"
    },
    {
        "id": "1",
        "name": "xe 1",
        "year": "2022",
        "tinh trang loi": "hong dieu hoa",
        "color": "den",
        "status": "da ban",
        "owner": "quyet",
        "thoi gian bao hanh": "2 nam",
        "factory": "Vinh Phuc",
        "serviceCenter": "-",
        "distributor": "tan xien ban"
    },
    {
        "id": "1",
        "name": "xe 1",
        "year": "2022",
        "tinh trang loi": "chet may",
        "color": "den",
        "status": "da ban",
        "owner": "quyet",
        "thoi gian bao hanh": "2 nam",
        "factory": "Vinh Phuc",
        "serviceCenter": "-",
        "distributor": "tan xien ban"
    }
]

export default function Products() {
    return(
        <div className="products">
            <Sidebar/>
            <div className="wrapper">
                <Navbar/>
                <div className="mainProduct">
                    <div>
                        <div className="searchProduct">
                            <input type="text" placeholder='Search...' />
                            <BiSearchAlt2 className='searchIcon'/>
                        </div>
                    </div>
                    <div className="listProduct">
                        <Table responsive>
                            <thead>
                                <tr>
                                <th>#</th>
                                <th>id</th>
                                <th>name</th>
                                <th>year</th>
                                <th>loi</th>
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
        </div>
    )
}