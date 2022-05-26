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
import { APIClient, Colors } from "../constants";
import { styled } from "@mui/system";
import { Base64 } from "js-base64";
import AppBarHead from "./AppBarHead";

const RootDiv = styled("div")(({ theme }) => ({
  backgroundColor: Colors.LIGHT_COLOR,
  display: "flex",
  justifyContent: "center",
  height: "95vh",
}));

export default function DeleteNow() {
  const location = useLocation();
  const navigate = useNavigate();

  const [UserLog, setUserLog] = useState({})

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


  const handleBackToHome = () => {
    localStorage.setItem(APIClient.LOCALSTORAGE_KEY , '')
    navigate(-2)
  }

  useEffect(() => {

    var data = localStorage.getItem(APIClient.LOCALSTORAGE_KEY)
    var decode = Base64.decode(data)

    setUserLog(JSON.parse(decode))

  }, []);
  

  return (
    <div>
     <AppBarHead userData={UserLog} page='Submitted' />

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
              onClick={() => handleBackToHome()}
            >
              Thank You
            </Button>
          </Card>
        </div>
      </RootDiv>
    </div>
  );
}
