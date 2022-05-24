import {
  AppBar,
  Button,
  Divider,
  Toolbar,
  Typography,
  Tabs,
  Radio,
  RadioGroup,
  FormControlLabel,
} from "@mui/material";
import { styled } from "@mui/system";
import React, { useEffect, useState } from "react";
import TabContext from "@mui/lab/TabContext";
import TabPanel from "@mui/lab/TabPanel";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { useLocation, useNavigate } from "react-router-dom";
import { Colors } from "../constants";

import Swal from "sweetalert2";

import JSONData from "../constants/JSONData";

const RootDiv = styled("div")(({ theme }) => ({
  backgroundColor: Colors.LIGHT_COLOR,
  display: "flex",
  flexDirection: "column",
  height: "95vh",
}));

export default function HomePage() {
  const navigate = useNavigate();
  const location = useLocation();

  const [countDown, setCountDown] = useState(0);
  const seconds = String(countDown % 60).padStart(2, 0);
  const minutes = String(Math.floor(countDown / 60)).padStart(2, 0);

  const [data, setData] = useState(JSONData.MATHS);

  const [TabValue, setTabValue] = useState(0);

  const SubjectList = ["Maths", "Physics", "Chemistry", "Computer Science"];

  const [value, setValue] = useState("");

  const [position, setposition] = useState(0);

  const [score, setscore] = useState(0);

  const handleRadioChange = (event) => {
    setValue(event.target.value);
    console.log(event.target.value ,  'xxxxxxx');
  };

  const handleQuestionChange = (i) => {
    setposition(i);
  };

  const correctAnswer = data[position][`ans`];

  const scoreAdd = () => {
    value === correctAnswer ? setscore(score + 1) : setscore(score + 0);
  };

  useEffect(() => {
    if (position === data.length) {
      setposition(0);
      alert("You visit all the stuff");
    }
  }, [position]);

  const handleChange = (event, newTabValue) => {
    setTabValue(newTabValue);

    switch (newTabValue) {
      case 0:
        setData(JSONData.MATHS);
        break;
      case 1:
        setData(JSONData.PHYSICS);
        break;
      case 2:
        setData(JSONData.CHEMISTRY);
        break;
      case 3:
        setData(JSONData.COMPUTER_SCIENCE);
        break;
      default:
        setData(JSONData.MATHS);
    }
  };


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

  const QNA = data;
  const [Analytics, setAnalytics] = useState(autoGen(QNA.length));
  function autoGen(count) {
    let arr = [];
    let obj = {
      isAnswerd: false,
      isVisited: false,
      isNotAnswered: false,
      isMarked: false,
      viewCount: 0,
      questionDetails: {},
    };

    for (let i = 0; i < count; i++) {
      // Object.assign(obj.questionDetails, QNA[i]);
      // if (Object.keys(obj.questionDetails).length === 0) {
      //   Object.assign(obj.questionDetails, QNA[i]);
      //   break
      // }
      if (i === 0) {
        let obj = {
          isAnswerd: false,
          isVisited: true,
          isNotAnswered: false,
          isMarked: false,
          viewCount: 1,
          questionDetails: {},
        };
        arr.push(obj);
      } else {
        arr.push(obj);
      }
    }
    return arr;
  }

  useEffect(() => {

    console.log('Home Page Data : ');
    console.table(location.state);
  }, []);

  // For Timer:

  // useEffect(() => {
  //   if (countDown < 0) {
  //     alert("expired");
  //     navigate(-1)
  //     setCountDown(0);
  //   }
  // }, [countDown]);


  // useEffect(() => {
  //   let timerId;
  //     setCountDown(60 * 30);
  //     timerId = setInterval(() => {
  //       setCountDown((countDown) => countDown - 1);
  //     }, 1000);
   
  //   return () => clearInterval(timerId);
  // }, []);




  // refresh:

  // useEffect(() => {
  //   window.addEventListener("beforeunload", alertUser);
  //   return () => {
  //     window.removeEventListener("beforeunload", alertUser);
  //   };
  // }, []);

  // const alertUser = (e) => {
  //   e.preventDefault();
  //   e.returnValue = "";
  //   navigate(-1)
  // };

  
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
        {/* toolHeader */}
        <div style={{ display: "flex", marginTop: 20, height: "100%" }}>
          <div
            style={{
              width: "75vw",
              backgroundColor: Colors.BACKGROUND_COLOR,
              margin: "10px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography
              variant="h6"
              sx={{ padding: "10px", color: Colors.MAIN_COLOR }}
            >
              Sections
            </Typography>

            <Box sx={{ width: "100%", typography: "body1" }}>
              <TabContext value={TabValue}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-evenly",
                  }}
                >
                  <Tabs
                    value={TabValue}
                    variant="scrollable"
                    allowScrollButtonsMobile
                    sx={{ width: "100%" }}
                    onChange={handleChange}
                    TabIndicatorProps={{
                      style: { height: 0 }, // background: Colors.MAIN_COLOR, 
                    }}
                    textColor="inherit"
                  >
                    {SubjectList.map((obj, i) => (
                      <Tab
                      key={i}
                        sx={{
                          color: "#000",
                          textTransform: "none",
                          "&.Mui-selected": { color: Colors.BTN_COLOR },
                        }}
                        label={<Typography variant="h6"> {obj} </Typography>}
                        value={i}
                      />
                    ))}
                  </Tabs>
                </Box>

                <Divider
                  sx={{ height: 5, backgroundColor: Colors.LIGHT_COLOR }}
                />

                <Typography variant="h6" sx={{ padding: "10px" }}>
                  {" "}
                  {`Question  ${position + 1}`}
                </Typography>

                <Divider
                  sx={{
                    height: 2,
                    backgroundColor: Colors.LIGHT_COLOR,
                    margin: "0 1%",
                  }}
                />

                {SubjectList.map((obj, i) => (
                  <TabPanel value={i} key={i}>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        width: "100%",
                      }}
                    >
                      <RadioGroup
                        aria-labelledby="demo-error-radios"
                        name="quiz"
                        value={value}
                        onChange={handleRadioChange}
                      >
                        <div
                          style={{ display: "flex", flexDirection: "column" }}
                        >
                          <Typography>
                            {data[position][`qn${position + 1}`]}
                          </Typography>
                          <FormControlLabel
                            value={data[position].opt1}
                            control={<Radio />}
                            label={data[position].opt1}
                          />
                          <FormControlLabel
                            value={data[position].opt2}
                            control={<Radio />}
                            label={data[position].opt2}
                          />
                          <FormControlLabel
                            value={data[position].opt3}
                            control={<Radio />}
                            label={data[position].opt3}
                          />
                          <FormControlLabel
                            value={data[position].opt4}
                            control={<Radio />}
                            label={data[position].opt4}
                          />
                        </div>
                      </RadioGroup>
                    </div>
                  </TabPanel>
                ))}
              </TabContext>
            </Box>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                paddingTop: 50,
                backgroundColor: Colors.LIGHT_COLOR,
                width: "100%",
                marginTop: "auto",
              }}
            >
              <div>
                <Button
                  variant="contained"
                  sx={{
                    margin: "0 10px",
                    backgroundColor: "#9C335F",
                    "&:hover": { backgroundColor: "#9C335F" },
                  }}
                >
                  Mark For Review
                </Button>

                <Button
                  variant="contained"
                  sx={{
                    margin: "0 10px",
                    color: "#F32424",
                    backgroundColor: "#FBF0F0",
                    "&:hover": { backgroundColor: "#FBF0F0" },
                  }}
                >
                  Clear Response
                </Button>
              </div>

              <Button
                variant="contained"
                sx={{
                  backgroundColor: Colors.BTN_COLOR,
                  "&:hover": { backgroundColor: Colors.BTN_COLOR },
                }}
                onClick={() => {
                  position <= 18 ? setposition(position + 1) : setposition(0);

                  scoreAdd();
                }}
              >
                Save & Exit
              </Button>
            </div>
          </div>

          <div
           style={{ width: "25vw", display: "flex", flexDirection: "column", backgroundColor: Colors.BACKGROUND_COLOR, margin: "10px", }}
          >
           <div style={{ display: "flex", alignItems:'center' ,justifyContent: "space-around", padding:'32px 0' }}>
              <Typography variant="h4">Time Left</Typography>
              <Typography
                variant="h4"
                sx={{ color: Colors.MAIN_COLOR, fontWeight: "bold" }}
              >
               {/* {" "} {minutes} : {seconds}{" "} */}
               {" 00 "}  : {" 00 "}
              </Typography>
            </div>

            <Divider
              sx={{
                height: 5,
                backgroundColor: Colors.LIGHT_COLOR,
              }}
            />

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "10px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  width: "200px",
                }}
              >
                <Box
                  sx={{
                    width: "30px",
                    height: "30px",
                    backgroundColor: Colors.ANSWERED_COLOR,
                    border: "1px solid #000",
                    margin: "5px",
                  }}
                />
                <Typography> Answered </Typography>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  width: "200px",
                }}
              >
                <Box
                  sx={{
                    width: "30px",
                    height: "30px",
                    backgroundColor: Colors.NOT_ANSWERED_COLOR,
                    border: "1px solid #000",
                    margin: "5px",
                  }}
                />
                <Typography> Not Answered </Typography>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "10px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  width: "200px",
                }}
              >
                <Box
                  sx={{
                    width: "30px",
                    height: "30px",
                    backgroundColor: Colors.MARKED_COLOR,
                    border: "1px solid #000",
                    margin: "5px",
                  }}
                />
                <Typography> Marked </Typography>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  width: "200px",
                }}
              >
                <Box
                  sx={{
                    width: "30px",
                    height: "30px",
                    backgroundColor: Colors.NOT_VISITED_COLOR,
                    border: "1px solid #000",
                    margin: "5px",
                  }}
                />
                <Typography> Not Visited </Typography>
              </div>
            </div>

            <Typography variant="h6" sx={{ padding: "10px" }}>
              Questions
            </Typography>

            <Box
              style={{
                backgroundColor: Colors.LIGHT_COLOR_2,
                padding: "10px",
                margin: "10px",
                display: "flex",
                flexWrap: "wrap",
              }}
            >
              {data.map((obj, i) => (
                <Box
                key={i}
                  sx={{
                    width: "30px",
                    height: "30px",
                    backgroundColor: Colors.NOT_VISITED_COLOR,
                    border: "1px solid #000",
                    margin: "5px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontWeight: "bold",
                    cursor: "pointer",
                  }}
                  onClick={() => setposition(i)}
                >
                  {i + 1}
                </Box>
              ))}
            </Box>

            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: Colors.NOT_VISITED_COLOR,
                  width: "200px",
                  margin: "10px",
                  whiteSpace: "nowrap",
                  color: "#000",
                  border: "1px solid #000",
                  "&:hover": { backgroundColor: Colors.NOT_VISITED_COLOR },
                }}
              >
                Questions Paper
              </Button>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: Colors.NOT_VISITED_COLOR,
                  width: "200px",
                  margin: "10px",
                  whiteSpace: "nowrap",
                  color: "#000",
                  border: "1px solid #000",
                  "&:hover": { backgroundColor: Colors.NOT_VISITED_COLOR },
                }}
              >
                Instructions
              </Button>
            </Box>

            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: Colors.NOT_VISITED_COLOR,
                  width: "200px",
                  margin: "10px",
                  whiteSpace: "nowrap",
                  color: "#000",
                  border: "1px solid #000",
                  "&:hover": { backgroundColor: Colors.NOT_VISITED_COLOR },
                }}
              >
                Profile
              </Button>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: Colors.NOT_VISITED_COLOR,
                  width: "200px",
                  margin: "10px",
                  whiteSpace: "nowrap",
                  color: "#000",
                  border: "1px solid #000",
                  "&:hover": { backgroundColor: Colors.NOT_VISITED_COLOR },
                }}
              >
                Submit
              </Button>
            </Box>
          </div>
        </div>
      </RootDiv>
    </div>
  );
}
