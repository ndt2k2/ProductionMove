import React from "react";
import { useState } from "react";
import Sidebar from "../sidebar/sidebar";
import NavBar from "../../../../components/navbar/navbar";
import Table from "../../../../components/table/table";

import "./order.css";

const Order = () => {
  // const height = 631;
  const height = 650;
  const [rows, setRows] = useState([
    {
      id: 1,
      name: "Đại lý 1",
      email: "Dl1@gmail.com",
      phone: 7894561230,
      age: null,
      gender: "M",
      city: "Chennai",
      fee: 78456,
    },
    {
      id: 2,
      name: "Đại lý 1",
      email: "mohan@gmail.com",
      phone: 7845621590,
      age: 35,
      gender: "M",
      city: "Delhi",
      fee: 456125,
    },
    {
      id: 3,
      name: "Sweety",
      email: "sweety@gmail.com",
      phone: 741852912,
      age: 17,
      gender: "F",
      city: "Noida",
      fee: 458796,
    },
    {
      id: 4,
      name: "Vikas",
      email: "vikas@gmail.com",
      phone: 9876543210,
      age: 20,
      gender: "M",
      city: "Mumbai",
      fee: 874569,
    },
    {
      id: 5,
      name: "Neha",
      email: "neha@gmail.com",
      phone: 7845621301,
      age: 25,
      gender: "F",
      city: "Patna",
      fee: 748521,
    },
    {
      id: 6,
      name: "Mohan",
      email: "mohan@gmail.com",
      phone: 7845621590,
      age: 35,
      gender: "M",
      city: "Delhi",
      fee: 456125,
    },
    {
      id: 7,
      name: "Sweety",
      email: "sweety@gmail.com",
      phone: 741852912,
      age: 17,
      gender: "F",
      city: "Noida",
      fee: 458796,
    },
    {
      id: 8,
      name: "Vikas",
      email: "vikas@gmail.com",
      phone: 9876543210,
      age: 20,
      gender: "M",
      city: "Mumbai",
      fee: 874569,
    },
    {
      id: 9,
      name: "Raj",
      email: "Raj@gmail.com",
      phone: 7894561230,
      age: null,
      gender: "M",
      city: "Chennai",
      fee: 78456,
    },
    {
      id: 10,
      name: "Mohan",
      email: "mohan@gmail.com",
      phone: 7845621590,
      age: 35,
      gender: "M",
      city: "Delhi",
      fee: 456125,
    },
    {
      id: 11,
      name: "Sweety",
      email: "sweety@gmail.com",
      phone: 741852912,
      age: 17,
      gender: "F",
      city: "Noida",
      fee: 458796,
    },
    {
      id: 12,
      name: "Vikas",
      email: "vikas@gmail.com",
      phone: 9876543210,
      age: 20,
      gender: "M",
      city: "Mumbai",
      fee: 874569,
    },
  ]);

  const columns = [
    { title: "Id", field: "id", width: 90, editable: true },
    { title: "Name", field: "name", width: 120, editable: true },
    { title: "Email", field: "email", width: 200, editable: true },
    { title: "Phone Number", field: "phone", width: 120, editable: true },
    { title: "City", field: "city", width: 120, editable: true },
    { title: "School Fee", field: "fee", width: 90, editable: true },
  ];

  const [finalClickInfo, setFinalClickInfo] = useState(null);

  const handleOnCellClick = (params) => {
    setFinalClickInfo(params);
  };
  console.log(finalClickInfo);

  return (
    <div className="order3">
      <Sidebar />
      <div className="wrapper3">
        <NavBar />
        <div className="orderWrapper3">
          <div className="listOrder3">
            <h4>Danh sánh đơn đặt hàng</h4>
            <Table {...{ columns, rows, setRows, height, handleOnCellClick }} />
          </div>

          <div className="mainOrder3">
            <h4>Chi tiết đơn hàng</h4>
            <div className="orderDetail3">
              {!finalClickInfo && (
                <>
                  <div className="oderContent3">Chọn đơn hàng muốn xem</div>
                </>
              )}
              {finalClickInfo && (
                <>
                  <div className="rowOrder firstRow3">
                    <p className="fieldOrder">id : {finalClickInfo.id}</p>
                  </div>
                  <div className="rowOrder3">
                    <p className="fieldOrder3">
                      name : {finalClickInfo.row.name}
                    </p>
                  </div>
                  <div className="rowOrder3">
                    <p className="fieldOrder3">
                      email : {finalClickInfo.row.email}
                    </p>
                  </div>
                  <div className="rowOrder3">
                    <p className="fieldOrder3">
                      phone : {finalClickInfo.row.phone}
                    </p>
                  </div>
                </>
              )}
            </div>
            <button className="acceptOrder3">Accept order</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
