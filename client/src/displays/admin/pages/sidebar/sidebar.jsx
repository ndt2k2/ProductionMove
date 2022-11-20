import './sidebar.css';
import avatar from '../../../../cat.jpg';


export default function Sidebar() {
    return(
        <div className="sidebar">
               
            <div className="top">
                <img className='avatar' src={avatar} alt="" />
                
            </div>
            <hr />

            <div className="center">

                <ul>
                    <li><span>Thống kê</span></li>
                    <li><span>Danh sách các sản phẩm</span></li>
                    <li><span>Quản lý dòng sản phẩm</span></li>
                    <li><span>Quản lý tài khoản</span></li>
                </ul>

            </div>

            <div className='logout'>Thoát</div>
                
        </div>
    )
}