import "./defective.css";
import Sidebar from "../sidebar/sidebar";
import Navbar from "../../../../components/navbar/navbar";
import Table from "../../../../components/table/table";

import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import DeleteIcon from "@mui/icons-material/DeleteOutlined";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Close";
import { GridActionsCellItem, GridRowModes } from "@mui/x-data-grid";

import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function Products() {
  const height = 631;

  const [rowModesModel, setRowModesModel] = React.useState({});

  const handleEditClick = (id) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });
  };

  const handleSaveClick = (id) => () => {
    console.log(rowModesModel);
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });
    console.log(rowModesModel[id]);
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

  const [rows, setRows] = useState([
    {
      id: 1,
      name: "Vios",
      issues: "chay dau",

    },
    {
      id: 2,
      name: "Mohan",
      issues: "noi cam bien",
    },
    {
      id: 3,
      name: "Sweety",
      issues: "sweety@gmail.com",

    },
    {
      id: 4,
      name: "Vikas",
      issues: "vikas@gmail.com",
    },
    {
      id: 5,
      name: "Neha",
      issues: "neha@gmail.com",
    },
    {
      id: 6,
      name: "Mohan",
      issues: "mohan@gmail.com",
    },
    {
      id: 7,
      name: "Sweety",
      issues: "sweety@gmail.com",
    },
    {
      id: 8,
      name: "Vikas",
      issues: "vikas@gmail.com",
    },
    {
      id: 9,
      name: "Raj",
      issues: "Raj@gmail.com",
    },
    {
      id: 10,
      name: "Mohan",
      issues: "mohan@gmail.com",
    },
    {
      id: 11,
      name: "Sweety",
      issues: "sweety@gmail.com",
    },
    {
      id: 12,
      name: "Vikas",
      issues: "vikas@gmail.com",
    },
  ]);

  const columns = [
    { title: "Id", field: "id", width: 90, editable: false },
    { title: "Name", field: "name", width: 120, editable: false },
    { title: "issues", field: "issues", width: 200, editable: false },
    {
      field: "actions",
      type: "actions",
      headerName: "Actions",
      width: 100,
      cellClassName: "actions",
      getActions: ({ id }) => {
        const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;
        return [
          <GridActionsCellItem
            icon={<AutoFixHighIcon />}
            label="Recycle"
            className="textPrimary"
            onClick={handleDeleteClick(id)}
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
