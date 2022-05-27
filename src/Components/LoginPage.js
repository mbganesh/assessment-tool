import { Button, Card, TextField, Typography } from "@mui/material";
import { styled } from "@mui/system";
import React, { useEffect, useState } from "react";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";
import { APIClient, Colors } from "../constants";
import { useNavigate } from "react-router-dom";
import { Base64 } from "js-base64";
import moment from "moment";

const RootDiv = styled("div")(({ theme }) => ({
  backgroundColor: Colors.LIGHT_COLOR,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
}));

const RootCard = (theme) => ({
  width: 500,
  display: "flex",
  flexDirection: "column",
  backgroundColor: "white",
  alignItems: "center",
  border: "1px solid",
  borderColor: Colors.BACKGROUND_COLOR,
});

export default function LoginPage() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const dayAndTimeChecker = () => {
    let current =moment().format("YYYY-MM-DD HH:mm"); // current time
    let examDayTime = "2022-05-27 17:06";


    let graceTime =moment(examDayTime,"YYYY-MM-DD HH:mm").add(15,'minute').format("YYYY-MM-DD HH:mm"); // grace time
    

    console.log('Current Time : ',current,'\n' , 'Exam Time: ' , examDayTime , '\n' , 'Grace Time: ' , graceTime  );

    if (moment(current).isSameOrAfter(examDayTime)) {

      if(moment(current).isSameOrBefore(graceTime) ){  //  time check
          console.log('grace time');

      }else{
        console.log('exam link expired');
      }


    } else {
      console.log("Exam is not started yet");
    }


  };

  const [LoginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleLoginBtn();
    }
  };

  const handleLocalStorage = (data) => {
    var dataStr = JSON.stringify(data);
    var encode = Base64.encode(dataStr);
    localStorage.setItem(APIClient.LOCALSTORAGE_KEY, encode);
  };

  const handleLoginBtn = () => {
    dayAndTimeChecker();

    console.log(LoginData);
    if (LoginData.username === "") {
      alert("please enter username");
    } else if (LoginData.password === "") {
      alert("please enter password");
    } else if (LoginData.password === "123") {
      // handleLocalStorage(LoginData)
      // navigate('/home')
    } else {
      alert("incorrect username or password");
    }
  };

  return (
    <div>
      <RootDiv>
        <Card elevation={5} sx={RootCard}>
          <Typography
            variant="h4"
            sx={{
              backgroundColor: Colors.MAIN_COLOR,
              color: "#fff",
              width: "100%",
              textAlign: "center",
              padding: "5px",
            }}
          >
            {" "}
            Assessment Tool{" "}
          </Typography>

          <div style={{ width: "90%", margin: "10px 0" }}>
            <Typography variant="subtitle1">UserName</Typography>
            <TextField
              autoComplete="off"
              fullWidth
              size="small"
              variant="outlined"
              value={LoginData.username}
              onChange={(e) =>
                setLoginData({ ...LoginData, username: e.target.value })
              }
            />
          </div>

          <div style={{ width: "90%", margin: "10px 0" }}>
            <Typography variant="subtitle1">Password</Typography>
            <TextField
              autoComplete="off"
              type={showPassword ? "text" : "password"}
              onKeyDown={handleKeyPress}
              value={LoginData.password}
              onChange={(e) =>
                setLoginData({ ...LoginData, password: e.target.value })
              }
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() => {
                        setShowPassword(!showPassword);
                      }}
                      onMouseDown={(e) => e.preventDefault()}
                    >
                      {showPassword && <Visibility />}
                      {!showPassword && <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              fullWidth
              size="small"
              variant="outlined"
            />
          </div>

          <div style={{ width: "90%", margin: "10px 0" }}>
            <Button
              fullWidth
              size="small"
              variant="contained"
              sx={{
                backgroundColor: Colors.BTN_COLOR,
                "&:hover": { backgroundColor: Colors.BTN_COLOR },
              }}
              onClick={() => handleLoginBtn()}
            >
              Login
            </Button>
          </div>
        </Card>
      </RootDiv>
    </div>
  );
}
