import './productLine.css';
import Sidebar from '../sidebar/sidebar';
import Navbar from '../../../../components/navbar/navbar';

export default function ProductLine() {
    return(
        <div className="productLine">
            <Sidebar/>
            <div className="wrapper">

            <Navbar/>
            productLine
            </div>
        </div>
    )
}