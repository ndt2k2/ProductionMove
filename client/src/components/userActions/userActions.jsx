import React from 'react'
import {Box, Fab, CircularProgress} from '@mui/material'
import {Check, Save} from '@mui/icons-material';
import {green} from '@mui/material/colors'
import { useState } from 'react'
const UserActions = () => {

    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async () => {
      setLoading(true);
  
      setTimeout(() => {
        setLoading(false)
        setSuccess(true)
      }, 2000);
      // const { role, active, _id } = params.row;
      // const result = await updateStatus({ role, active }, _id, dispatch);
      // if (result) {
      //   setSuccess(true);
      //   setRowId(null);
      // }
      // setLoading(false);
    };

  return (
    <Box
    sx={{
        m:1,
        position:'relative'
    }}
    >
      {success ? (
        <Check
          style={{
            color:"rgb(116, 81, 248"
          }}
        />
      ) : (
        !loading && (
          <Save 
            sx={{
              width: 30,
              height: 30,
            }}
            style={{
              color:"rgb(116, 81, 248",
              cursor:"pointer"
            }}
            onClick={handleSubmit}
          />
        )
      )}

      {loading && (
        <CircularProgress
          size={30}
          sx={{
            position: 'absolute',
            top: -13,
            left: -23,
            zIndex: 1,
          }}
        />
      )}
    </Box>
  )
}

export default UserActions