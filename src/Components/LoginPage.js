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
import axios from "axios";
import useStateRef from "react-usestateref";

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

  const [examDayTime, setExamDayTime , examDayTimeRef] = useStateRef('')
  const [responseObj , setResponseObj , responseObjRef] = useStateRef({})
  const [showPassword, setShowPassword] = useState(false);

  const dayAndTimeChecker = () => {
    let isCurrectTime = false;
    let errorMessage = ""
    let current = moment().utc().format("YYYY-MM-DD HH:mm"); // current time
   
    let graceTime = moment(examDayTimeRef.current, "YYYY-MM-DD HH:mm")
      .add(15, "minute")
      .format("YYYY-MM-DD HH:mm"); // grace time

    console.log(
      "Current Time : ",
      current,
      "\n",
      "Exam Time: ",
      examDayTimeRef.current,
      "\n",
      "Grace Time: ",
      graceTime
    );

    if (moment(current).isSameOrAfter(examDayTimeRef.current)) {
      if (moment(current).isSameOrBefore(graceTime)) {
        //  time check
        console.log("grace time");
        errorMessage = ""
        isCurrectTime = true;
      } else {
        errorMessage="Exam Link Expired"
        console.log("exam link expired");
        isCurrectTime = false;
      }
    } else {
      errorMessage = "Exam is not started Please wait."
      console.log("Exam is not started yet");
      isCurrectTime = false;
    }

    return {time:isCurrectTime , message:errorMessage};
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

    //  New Stuff:
    if(LoginData.username !== '' && LoginData.password !== ''){

      var dataToSend = {
        "user": "admin",
        "name": LoginData.username,
        "password":LoginData.password
      }


      axios.post(APIClient.API_BASE_URL ,dataToSend ).then(res => {

        setResponseObj(res.data)
  
        console.log(responseObjRef.current);

        var examTimeRes = moment.utc(responseObjRef.current.dateTimeToStartExam).format('YYYY-MM-DD HH:mm');
        setExamDayTime(examTimeRes)

        // handleTimer:
        
    var timeValider = dayAndTimeChecker()
    if (LoginData.username === "") {
      alert("please enter username");
    } else if (LoginData.password === "") {
      alert("please enter password");
    } else if (LoginData.password !== "") {
      // handleLocalStorage(LoginData)
      // navigate('/home')
      
      if(timeValider.time){
        handleLocalStorage(LoginData)
      navigate('/home' , {state:responseObjRef.current})
      }else{
        alert(timeValider.message);  
      }
    } else {
      alert("incorrect username or password");
    }
      });
      
    }else{
      alert("Fields Can`t be Empty");
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
