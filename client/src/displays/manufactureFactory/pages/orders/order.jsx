import React from 'react'
import Sidebar from '../sidebar/sidebar'
import NavBar from '../../../../components/navbar/navbar'
import Table from 'react-bootstrap/Table';


import './order.css'

const Order = () => {
  return (
    <div className="order">
      <Sidebar/>
      <div className="wrapper">
          <NavBar/>
          <div className="orderWrapper">
            <div className="listOrder">
              <p>Danh sách đơn đặt hàng</p>
              <Table responsive>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Tên</th>
                    <th>Số điện thoại</th>
                    <th>year</th>
                    <th>color</th>
                    <th>status</th>
                  </tr>
                </thead>
                <tbody> 
                              
                </tbody>
              </Table>

            </div>

            <div className="mainOrder">
              <div>Chi tiết đơn hàng</div>
              <div className="orderDetail">
                detail
              </div>
              <button className='createOrder'>Create order</button>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Order