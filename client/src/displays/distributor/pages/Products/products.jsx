import React from 'react'
import Sidebar from '../Sidebar/sidebar'
import NavBar from '../../../../components/navbar/navbar'
import './products.css'

const Products = () => {
  return (
    <div className="products">
      <Sidebar/>
      <div className="wrapper">
        <NavBar/>
        <div className="mainProductManagement">
          products
        </div>
      </div>
    </div>
  )
}

export default Products