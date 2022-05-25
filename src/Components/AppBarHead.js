import React from 'react'
import { AppBar , Toolbar , Typography , Button , Divider } from '@mui/material'
import {Colors} from '../constants'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'

export default function AppBarHead({userData}) {

    const navigate = useNavigate()

    
    console.log(userData);

  // logout:
  const handleLogOut = () => {
    Swal.fire({
      title: 'Log Out',
      text: "Are you sure you want to logout?",
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Logout.'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Logout',
          'Logout successfully',
          'success'
        )
        navigate(-1)
      }
    })
  }
// location.state.username
 
  return (

        
        <AppBar position="sticky" sx={{ height: "5vh" }}>
        <Toolbar sx={{ backgroundColor: Colors.MAIN_COLOR }}>
          <Typography  variant="h5" sx={{ flex: 1 }}>
            Assessment Tool
          </Typography>
          <Typography variant="h6"> Hi {userData.username} </Typography>
        
            <Divider  orientation="vertical" variant="middle" flexItem  sx={{ margin: 2, backgroundColor: "gray", width: "1px" }} />
          <Button
            sx={{
              color: "#fff",
              margin: "0 5px",
              padding: "5px",
              border: "1px solid #fff",
              "&:hover": { border: "1px solid #fff" },
            }}
            onClick={() => handleLogOut()}
            variant="outlined"
          >
            Logout
          </Button>
        </Toolbar>
      </AppBar>


  )
}
