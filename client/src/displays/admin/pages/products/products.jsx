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

  console.log("Rerender");

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
      field: "factory",
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
      field: "owner",
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
