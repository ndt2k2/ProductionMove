import './products.css';
import Sidebar from '../sidebar/sidebar';
import Navbar from '../../../../components/navbar/navbar';
import Product from '../../../../components/product/product';
import {BiSearchAlt2} from 'react-icons/bi';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';




const listProduct = [
    {
        "id": "1",
        "name": "xe 1", // productLine
        "year": "2022",
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
                    <div className='searchProductWrap'>
                        <Form.Select aria-label="Default select example" className='select'>
                            <option>Id</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                            <option value="4">four</option>
                            <option value="5">five</option>
                            <option value="6">six</option>
                            <option value="7">seven</option>

                        </Form.Select>
                        <div className="searchProduct">
                            <input type="text" placeholder='Search...' />
                            <BiSearchAlt2 className='searchIcon'/>
                        </div>
                    </div>
                    <div className="listProduct">
                        <Table className='test' responsive="lg">
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
        </div>
    )
}