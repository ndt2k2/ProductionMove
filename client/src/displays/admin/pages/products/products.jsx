import './products.css';
import Sidebar from '../sidebar/sidebar';
import Navbar from '../../../../components/navbar/navbar';
import Product from '../../../../components/product/product';
import UserActions from '../../../../components/userActions/userActions';

import {Box} from '@mui/material'
import {DataGrid } from '@mui/x-data-grid'

import { useState } from 'react';

export default function Products() {
    const [pageSize, setPageSize] = useState(10);
    const [selectionModel, setSelectionModel] = useState([]);
    console.log(selectionModel);

    const [rows, setRows] = useState([
        { id: '1', name: "Raj", email: "Raj@gmail.com", phone: 7894561230, age: null, gender: "M", city: "Chennai", fee: 78456 },
        { id: '2',name: "Mohan", email: "mohan@gmail.com", phone: 7845621590, age: 35, gender: "M", city: "Delhi", fee: 456125 },
        { id: '3',name: "Sweety", email: "sweety@gmail.com", phone: 741852912, age: 17, gender: "F", city: "Noida", fee: 458796 },
        { id: '4',name: "Vikas", email: "vikas@gmail.com", phone: 9876543210, age: 20, gender: "M", city: "Mumbai", fee: 874569 },
        { id: '5',name: "Neha", email: "neha@gmail.com", phone: 7845621301, age: 25, gender: "F", city: "Patna", fee: 748521 },
        { id: '6',name: "Mohan", email: "mohan@gmail.com", phone: 7845621590, age: 35, gender: "M", city: "Delhi", fee: 456125 },
        { id: '7',name: "Sweety", email: "sweety@gmail.com", phone: 741852912, age: 17, gender: "F", city: "Noida", fee: 458796 },
        { id: '8',name: "Vikas", email: "vikas@gmail.com", phone: 9876543210, age: 20, gender: "M", city: "Mumbai", fee: 874569 },
        { id: '9',name: "Raj", email: "Raj@gmail.com", phone: 7894561230, age: null, gender: "M", city: "Chennai", fee: 78456 },
        { id: '10',name: "Mohan", email: "mohan@gmail.com", phone: 7845621590, age: 35, gender: "M", city: "Delhi", fee: 456125 },
        { id: '11',name: "Sweety", email: "sweety@gmail.com", phone: 741852912, age: 17, gender: "F", city: "Noida", fee: 458796 },
        { id: '12',name: "Vikas", email: "vikas@gmail.com", phone: 9876543210, age: 20, gender: "M", city: "Mumbai", fee: 874569 },
      ])

    const columns = [
        { title: "Id", field: "id", width: 90, editable: true },
        { title: "Name", field: "name" , width: 120, editable: true },
        { title: "Email", field: "email", width: 200, editable: true  },
        { title: "Phone Number", field: "phone", width: 120, editable: true },
        { title: "Age", field: "age", width: 90, editable: true },
        { title: "Gender", field: "gender", width: 120, editable: true },
        { title: "City", field: "city", width: 120, editable: true },
        { title: "School Fee", field: "fee", width: 90, editable: true  },
        { title:"actions", field: "actions", type: "actions", renderCell:params=> <UserActions {...{params}}/>}
    ]

    const handleDelete = () => {
        setSelectionModel([])
    };

    return(
        <div className="products">
            <Sidebar/>
            <div className="wrapper">
                <Navbar/>
                <button 
                    style={{width:100}}
                    onClick = {()=>handleDelete()}
                >
                    delete products
                </button>

                <div className="mainProduct">
                       <Box 
                         sx={{
                            height: 631,
                            width: '100%',                            
                         }}
                         style={{
                            cursor:"pointer"
                          }}
                        >
                            <DataGrid
                            columns={columns}
                            rows={rows}
                            getRowId={rows.id}
                            checkboxSelection
                            editMode="row"
                            disableSelectionOnClick
                            pagination
                            pageSize={pageSize}
                            onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
                            rowsPerPageOptions={[10, 20, 40]}

                            onSelectionModelChange={(newSelectionModel) => {
                                setSelectionModel(newSelectionModel);
                              }}
                            selectionModel={selectionModel}
                            />
                       </Box>
                </div>
            </div>
        </div>
    )
}