import {
  AppBar,
  Card,
  Toolbar,
  Divider,
  Button,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { Colors } from "../constants";
import { styled } from "@mui/system";

const RootDiv = styled("div")(({ theme }) => ({
  backgroundColor: Colors.LIGHT_COLOR,
  display: "flex",
  justifyContent: "center",
  height: "95vh",
}));

export default function DeleteNow() {
  const location = useLocation();
  const navigate = useNavigate();

  // logout:
  const handleLogOut = () => {
    Swal.fire({
      title: "Log Out",
      text: "Are you sure you want to logout?",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Logout.",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Logout", "Logout successfully", "success");
        navigate(-2);
      }
    });
  };

  useEffect(() => {}, [location.state]);

  return (
    <div>
      <AppBar position="sticky" sx={{ height: "5vh" }}>
        <Toolbar sx={{ backgroundColor: Colors.MAIN_COLOR, height: "5vh" }}>
          <Typography variant="h5" sx={{ flex: 1 }}>
            Assessment Tool
          </Typography>
          <Typography variant="h6"> Hi {location.state.username} </Typography>
          <Divider
            orientation="vertical"
            sx={{ margin: "10px", backgroundColor: "#fff", width: "3px" }}
          />
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

      <RootDiv>
        <div>
          <Card
            sx={{
              marginTop: 10,
              textAlign: "center",
              padding: "25px",
              width: "60vw",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography variant="h4" sx={{margin:'20px 0' , color:Colors.MAIN_COLOR}}>
              Your Test has been submitted successfully
            </Typography>
            <Button
              variant="contained"
              sx={{
                margin:'20px 0',
                padding:'10px 40px',
                backgroundColor: Colors.BTN_COLOR,
                "&:hover": { backgroundColor: Colors.BTN_COLOR },
              }}
              onClick={() => navigate(-2)}
            >
              Thank You
            </Button>
          </Card>
        </div>
      </RootDiv>
    </div>
  );
}
