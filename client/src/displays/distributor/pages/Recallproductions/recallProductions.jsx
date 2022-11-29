import React from 'react'
import Sidebar from '../Sidebar/sidebar'
import NavBar from '../../../../components/navbar/navbar'

import './recallProductions.css'

const RecallProductions = () => {
  return (
    <div className="recallProductions">
      <Sidebar/>
      <div className="wrapper">
        <NavBar/>
        <div className="recallWrapper">
          <div className="navRecall">
            <p>Các sản phẩm lỗi đang xử lý</p>
            <button className='addProductError'>Thêm sản phẩm lỗi</button>
          </div>

          <div className="mainRecall">
            recall
          </div>
        </div>
      </div>
    </div>
  )
}

export default RecallProductions