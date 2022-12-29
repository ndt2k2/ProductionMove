import "./products.css";
import Sidebar from "../sidebar/sidebar";
import Navbar from "../../../../components/navbar/navbar";
import Table from "../../../../components/table/table";

import EditIcon from "@mui/icons-material/Edit";
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
  useEffect(() => {
    const getAllProduct = async () => {
      try {
        const res = await axios.get("http://localhost:8000/api/product/getAll");
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
      console.log(rows[i])
  }}
  if(rows !== null){

    for(var i = 0; i < rows.length; i++){
      // let nameD = rows[i].idDistributor.name
      // rows[i].Distributor = nameD
      let nameO = rows[i].owner.name
      rows[i].Owner = nameO
      // let nameF = rows[i].idFactory.name
      // rows[i].Factory = nameF

      // let nameF = rows[i].idFactory.name
      // let obj1 = {
      //   Distributor: nameD,
      //   owner: nameO,
      //   idFactory: nameF
      // };
      // let obj2 = {
      //  idFactory: nameF
      // };
      //  let obji = rows[i]
        // rows[i] = {
        //     ...obji,
        //     ...obj1,            
        //   }
      //  let obji2 = rows[i]
      //   rows[i] = {
      //       ...obji2,
      //       ...obj2,            
      //     }

    }
    }
    if(rows !== null){

      for(var i = 0; i < rows.length; i++){
        let nameD = rows[i].idDistributor.name
        rows[i].Distributor = nameD
        // let nameO = rows[i].owner.name
        // rows[i].Owner = nameO
        // let nameF = rows[i].idFactory.name
        // rows[i].Factory = nameF
      }
      }
      if(rows !== null){

        for(var i = 0; i < rows.length; i++){
          let nameF = rows[i].idFactory.name
          rows[i].Factory = nameF
        }
        }
  const handleEditClick = (id) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });
  };

  const handleSaveClick = (id) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });
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

  const columns = [
    { title: "id", field: "id", width: 90, editable: false },
    {
      title: "Name",
      headerName: "Name",
      field: "name",
      width: 120,
      editable: true,
    },
    {
      title: "Color",
      headerName: "Color",
      field: "color",
      width: 120,
      editable: true,
    },
    {
      title: "Factory",
      headerName: "Factory",
      field: "Factory",
      width: 120,
      editable: true,
    },
    {
      title: "Distributor",
      headerName: "Distributor",
      field: "Distributor",
      width: 120,
      editable: true,
    },
    {
      title: "Status",
      headerName: "Status",
      field: "status",
      width: 120,
      editable: true,
    },
    {
      title: "Owner",
      headerName: "Owner",
      field: "Owner",
      width: 120,
      editable: true,
    },

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
            icon={<EditIcon />}
            label="Edit"
            className="textPrimary"
            onClick={handleEditClick(id)}
            color="inherit"
          />,
          <GridActionsCellItem
            icon={<DeleteIcon />}
            label="Delete"
            onClick={handleDeleteClick(id)}
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
        <div className="addProduct">
          <button onClick={toggleShowCreate}>Add Product</button>
        </div>
        {showCreate && (
          <div className="model">
            <div onClick={toggleShowCreate} className="overlay"></div>
            <form className="content" onSubmit={handleSubmit(onSubmit)}>
              <label className="row">
                Name
                <input {...register("name")} placeholder="enter name" />
              </label>
              <label className="row">
                Username
                <input {...register("username")} placeholder="enter username" />
              </label>
              <label className="row">
                Email
                <input {...register("email")} placeholder="enter email" />
              </label>
              <label className="row">
                Type Account
                <select {...register("gender")}>
                  <option value="female">female</option>
                  <option value="male">male</option>
                  <option value="other">other</option>
                </select>
              </label>
              <input className="submit" type="submit" />
            </form>
          </div>
        )}
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
