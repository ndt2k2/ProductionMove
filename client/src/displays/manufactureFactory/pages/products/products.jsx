import "./products.css";
import Sidebar from "../sidebar/sidebar";
import Navbar from "../../../../components/navbar/navbar";
import Table from "../../../../components/table/table";

import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Close";
import { GridActionsCellItem, GridRowModes } from "@mui/x-data-grid";

import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
export default function Products() {
    const height = 631;
    const [rowModesModel, setRowModesModel] = React.useState({});
    const [rows, setRows] = useState([]);
    const [count, setCount] = useState([]);
    useEffect(() => {
      const getAllProduct = async () => {
        try {
          const res = await axios.get("http://localhost:8000/api/toyProductLine/getAll");
          const res2 = await axios.post("http://localhost:8000/api/toyProduct/countQuantification",JSON.parse(localStorage.user));
          setCount(res2.data);
          setRows(res.data);
        } catch (error) {
          console.log(error);
        }
      };
      getAllProduct();
    }, []);
    let renameKeys = (keysMap, object) =>
    Object.keys(object).reduce(
      (acc, key) => ({
        ...acc,
        ...{ [keysMap[key] || key]: object[key] },
      }),
      {}
    );
    if( rows.length !== null && rows !== null){
    for(var i = 0; i < rows.length; i++){
      rows[i] = renameKeys(
        {
          _id: "id"
        },
        rows[i]
      );
    }}
    console.log("day",count)
    if(rows !== null){

      for(var i = 0; i < rows.length; i++){
        rows[i].quantification = count[i]
      }
      }
    const handleEditClick = (id) => () => {
      setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });
      console.log(rowModesModel)
    };
  
    const handleSaveClick = (id) => () => {
      console.log(rowModesModel);
      setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });
      //console.log(rowModesModel[id]);
    };
  
    const handleDeleteClick = (id) => () => {
      console.log(id);
      setRows(rows.filter((row) => row.id !== id));
    };
  
    const handleCancelClick = (id) => () => {
      setRowModesModel({
        ...rowModesModel,
        [id]: { mode: GridRowModes.View, ignoreModifications: true },
      });
  
      const editedRow = rows.find((row) => row.id === id);
      if (editedRow.isNew) {
        setRows(rows.filter((row) => row.id !== id));
      }
    };
  
    // const [rows, setRows] = useState([
    //   {
    //     id:1,
    //     name: "Vios",
    //     quantification: 1000,
    //     size: "4.885 x 1.840 x 1.445",
    //     price:"700",
    //     seats:"5",
    //     engine:"1.5 turbo",
    //     xylanh:"1.969cc",
    //     hp:"640Nm",
    //   },
    //   {
    //     id:2,
    //     name: "Camry",
    //     quantification: 1000,
    //     size: "4.885 x 1.840 x 1.445",
    //     price:"700",
    //     seats:"5",
    //     engine:"1.5 turbo",
    //     xylanh:"1.969cc",
    //     hp:"640Nm",
    //   },
    //   {
    //     id:3,
    //     name: "Altis",
    //     quantification: 1000,
    //     size: "4.885 x 1.840 x 1.445",
    //     price:"700",
    //     seats:"5",
    //     engine:"1.5 turbo",
    //     xylanh:"1.969cc",
    //     hp:"640Nm",
    //   },
    //   {
    //     id:4,
    //     name: "Cross",
    //     quantification: 1000,
    //     size: "4.885 x 1.840 x 1.445",
    //     price:"700",
    //     seats:"5",
    //     engine:"1.5 turbo",
    //     xylanh:"1.969cc",
    //     hp:"640Nm",
    //   },
    //   {
    //     id:5,
    //     name: "Hillux",
    //     quantification: 1000,
    //     size: "4.885 x 1.840 x 1.445",
    //     price:"700",
    //     seats:"5",
    //     engine:"1.5 turbo",
    //     xylanh:"1.969cc",
    //     hp:"640Nm",
    //   },
    //   {
    //     id:6,
    //     name: "Fortuner",
    //     quantification: 1000,
    //     size: "4.885 x 1.840 x 1.445",
    //     price:"700",
    //     seats:"5",
    //     engine:"1.5 turbo",
    //     xylanh:"1.969cc",
    //     hp:"640Nm",
    //   },
    //   {
    //     id:7,
    //     name: "Rav4",
    //     quantification: 1000,
    //     size: "4.885 x 1.840 x 1.445",
    //     price:"700",
    //     seats:"5",
    //     engine:"1.5 turbo",
    //     xylanh:"1.969cc",
    //     hp:"640Nm",
    //   },
    //   {
    //     id:8,
    //     name: "Vios",
    //     quantification: 1000,
    //     size: "4.885 x 1.840 x 1.445",
    //     prince:"700",
    //     seats:"5",
    //     engine:"1.5 turbo",
    //     xylanh:"1.969cc",
    //     hp:"640Nm",
    //   },
    //   {
    //     id:9,
    //     name: "Vios",
    //     quantification: 1000,
    //     size: "4.885 x 1.840 x 1.445",
    //     price:"700",
    //     seats:"5",
    //     engine:"1.5 turbo",
    //     xylanh:"1.969cc",
    //     hp:"640Nm",
    //   },
    //   {
    //     id:10,
    //     name: "Vios",
    //     quantification: 1000,
    //     size: "4.885 x 1.840 x 1.445",
    //     price:"700",
    //     seats:"5",
    //     engine:"1.5 turbo",
    //     xylanh:"1.969cc",
    //     hp:"640Nm",
    //   },
    //   {
    //     id:11,
    //     name: "Vios",
    //     quantification: 1000,
    //     size: "4.885 x 1.840 x 1.445",
    //     price:"700",
    //     seats:"5",
    //     engine:"1.5 turbo",
    //     xylanh:"1.969cc",
    //     hp:"640Nm",
    //   },
    //   {
    //     id:12,
    //     name: "Vios",
    //     quantification: 1000,
    //     size: "4.885 x 1.840 x 1.445",
    //     price:"700",
    //     seats:"5",
    //     engine:"1.5 turbo",
    //     xylanh:"1.969cc",
    //     hp:"640Nm",
    //   },
    // ]);
  
    const columns = [
      { title: "name", field: "name", width: 90, editable: false },
      { title: "size", field: "size", width: 200, editable: false },
      { title: "price", field: "price", width: 120, editable: false },
      { title: "seats", field: "seats", width: 90, editable: false },
      { title: "engine", field: "engine", width: 120, editable: false },
      { title: "xylanh", field: "xylanh", width: 120, editable: false },
      { title: "hp", field: "hp", width: 90, editable: false },
      { title: "quantification", field: "quantification", width: 120, editable: true },
      {
        field: "actions",
        type: "actions",
        headerName: "Actions",
        width: 100,
        cellClassName: "actions",
        getActions: ({ id }) => {
          const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;
          if (isInEditMode) {
            return [
              <GridActionsCellItem
                icon={<SaveIcon />}
                label="Save"
                onClick={handleSaveClick(id)}
              />,
              <GridActionsCellItem
                icon={<CancelIcon />}
                label="Cancel"
                className="textPrimary"
                onClick={handleCancelClick(id)}
                color="inherit"
              />,
            ];
          }
  
          return [
            <GridActionsCellItem
              icon={<AddIcon />}
              label="Add"
              className="textPrimary"
              onClick={handleEditClick(id)}
              color="inherit"
            />,
          ];
        },
      },
    ];
  
    const [showCreate, setShowCreate] = useState(false);
  
    const toggleShowCreate = () => {
      setShowCreate(!showCreate);
    };
  
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
      console.log(data);
    };
  
    return (
      <div className="products">
        <Sidebar />
        <div className="wrapper">
          <Navbar />
          <Table
            {...{
              columns,
              rows,
              setRows,
              height,

              rowModesModel,
              setRowModesModel,
            }}
          />
        </div>
      </div>
    );
  }
  