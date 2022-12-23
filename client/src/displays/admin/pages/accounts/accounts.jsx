import "./accounts.css";
import Sidebar from "../sidebar/sidebar";
import Navbar from "../../../../components/navbar/navbar";

import Table from "../../../../components/table/table";
import Product from "../../../../components/product/product";
import { BiSearchAlt2 } from "react-icons/bi";

import React from "react";
import { useState } from "react";

export default function AccountManagement() {
  const [showCreate, setShowCreate] = useState(false);

  const toggleShowCreate = () => {
    setShowCreate(!showCreate);
  };

  const height = 631;

  const [rows, setRows] = useState([
    {
      id: 1,
      name: "Raj",
      email: "Raj@gmail.com",
      phone: 7894561230,
      age: null,
      gender: "M",
      city: "Chennai",
      fee: 78456,
    },
    {
      id: 2,
      name: "Mohan",
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
    { title: "Age", field: "age", width: 90, editable: true },
    { title: "Gender", field: "gender", width: 120, editable: true },
    { title: "City", field: "city", width: 120, editable: true },
    { title: "School Fee", field: "fee", width: 90, editable: true },
  ];

  return (
    <div className="accounts">
      <Sidebar />
      <div className="wrapper">
        <Navbar />
        <div className="mainAccount">
          <div className="navAccount">
            <button className="createAccount" onClick={toggleShowCreate}>
              Create Account
            </button>
          </div>
          <Table {...{ columns, rows, setRows, height }} />
        </div>
      </div>

      {showCreate && (
        <div className="model">
          <div onClick={toggleShowCreate} className="overlay"></div>
          <div className="content">
            <div className="row">
              <div className="row1">
                <label>Username</label>
              </div>
              <div className="row2">
                <input
                  type="text"
                  id="name"
                  name="Name"
                  placeholder="Enter username"
                />
              </div>
            </div>
            <div className="row">
              <div className="row1">
                <label>Name</label>
              </div>
              <div className="row2">
                <input
                  type="text"
                  id="name"
                  name="Name"
                  placeholder="Enter name"
                />
              </div>
            </div>

            <div className="row">
              <div className="row1">
                <label>Password</label>
              </div>
              <div className="row2">
                <input
                  type="text"
                  id="name"
                  name="Name"
                  placeholder="Enter password"
                />
              </div>
            </div>

            <div className="row">
              <div className="row1">
                <label>Email</label>
              </div>
              <div className="row2">
                <input
                  type="text"
                  id="email"
                  name="Email"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            <div className="row">
              <div className="row1">
                <label>Phone number</label>
              </div>
              <div className="row2">
                <input
                  type="text"
                  id="age"
                  name="Age"
                  placeholder="Enter phone number"
                />
              </div>
            </div>

            <div className="row">
              <div className="row1">
                <label>Type Account?</label>
              </div>
              <div className="row2">
                <select name="describes" id="describes">
                  <option value="student">Admin</option>
                  <option value="pupil">Distributor</option>
                  <option value="developer">ManufactureFactory</option>
                  <option value="developer">ServiceCenter</option>
                </select>
              </div>
            </div>
            <div>
              <button className="submit">submit</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
