import {
  AppBar,
  Button,
  Divider,
  Toolbar,
  Typography,
  Tabs,
  Radio,
  Stack,
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
import AppBarHead from "./AppBarHead";

const RootDiv = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  height: "95vh",
  backgroundColor: Colors.LIGHT_COLOR,
}));

const LeftPart = styled("div")(({ theme }) => ({
  width: "75vw",
  backgroundColor: Colors.BACKGROUND_COLOR,
  margin: "10px",
  display: "flex",
  flexDirection: "column",
}));

const RightPart = styled("div")(({ theme }) => ({
  width: "25vw",
  display: "flex",
  flexDirection: "column",
  backgroundColor: Colors.BACKGROUND_COLOR,
  margin: "10px",
}));

export default function HomePage() {
  const navigate = useNavigate();
  const location = useLocation();

  const [countDown, setCountDown] = useState(0);

  const AnswerIndications = [
    {
      color: Colors.ANSWERED_COLOR,
      name: "Answered",
    },
    {
      color: Colors.NOT_ANSWERED_COLOR,
      name: "Not Answered",
    },
    {
      color: Colors.MARKED_COLOR,
      name: "Marked",
    },
    {
      color: Colors.NOT_VISITED_COLOR,
      name: "Not Visited",
    },
  ];

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
    console.log(event.target.value, "xxxxxxx");
  };

  const correctAnswer = data[position][`ans`];

  const scoreAdd = () => {
    value === correctAnswer ? setscore(score + 1) : setscore(score + 0);
  };

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
    console.log("Home Page Data : ");
    console.table(location.state);
  }, []);

  // For Timer:

  useEffect(() => {
    if (countDown === -1) {
      clearInterval(countDown);

      Swal.fire({
        title: "Time Out",
        text: "Your records are stored & auto-submitted",
        imageUrl:
          "https://images.unsplash.com/photo-1516534775068-ba3e7458af70?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170",
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: "TimeOutPic",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/submitted", { state: location.state });
        }
      });

      setCountDown(0);
    }
  }, [countDown]);

  useEffect(() => {
    let timerId;
    setCountDown(60 * 30);
    timerId = setInterval(() => {
      setCountDown((countDown) => countDown - 1);
    }, 1000);

    return () => clearInterval(timerId);
  }, []);

  // refresh:

  useEffect(() => {
    window.addEventListener("beforeunload", alertUser);
    return () => {
      window.removeEventListener("beforeunload", alertUser);
    };
  }, []);

  const alertUser = (e) => {
    e.preventDefault();
    e.returnValue = "";
    navigate(-1);
  };

  return (
    <div>
      <AppBarHead userData={location.state} />

      {/* RootDiv */}
      <RootDiv>
        {/* SubRootDiv */}
        <div style={{ display: "flex", marginTop: 20, height: "100%" }}>
          <LeftPart>
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
                    // textColor="inherit"
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
                    <Stack>
                      <RadioGroup
                        aria-labelledby="demo-error-radios"
                        name="quiz"
                        value={value}
                        onChange={handleRadioChange}
                      >
                        <Stack gap={2}>
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
                        </Stack>
                      </RadioGroup>
                    </Stack>
                  </TabPanel>
                ))}
              </TabContext>
            </Box>

            {/* <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                paddingTop: 50,
                backgroundColor: Colors.LIGHT_COLOR,
                marginTop: "auto",
              }}
            > */}
            <Stack
              justifyContent="space-between"
              pt={6}
              mt={"auto"}
              direction="row"
              sx={{ backgroundColor: Colors.LIGHT_COLOR }}
            >
              <Stack direction={"row"}>
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
              </Stack>

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
            </Stack>
          </LeftPart>

          <RightPart>
            <Stack
              alignItems={"center"}
              justifyContent="space-around"
              direction={"row"}
              py={2}
            >
              {/* style={{ display: "flex", alignItems:'center' ,justifyContent: "space-around", padding:'15px 0' , }} 
             
             py -> top / bottom
             px -> left / right
             */}
              <Typography variant="h4">Time Left</Typography>
              <Typography
                variant="h4"
                sx={{
                  color: countDown <= 30 ? Colors.BTN_COLOR : Colors.MAIN_COLOR,
                  fontWeight: "bold",
                }}
              >
                {minutes} : {seconds}
                {/* {" 00 "}  : {" 00 "} */}
              </Typography>
            </Stack>

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
                flexWrap: "wrap",
              }}
            >
              {AnswerIndications.map((obj, i) =>
                i < 2 ? (
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
                        backgroundColor: obj.color,
                        border: "1px solid #000",
                        margin: "5px",
                      }}
                    />
                    <Typography> {obj.name} </Typography>
                  </div>
                ) : (
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
                        backgroundColor: obj.color,
                        border: "1px solid #000",
                        margin: "5px",
                      }}
                    />
                    <Typography> {obj.name} </Typography>
                  </div>
                )
              )}
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
          </RightPart>
        </div>
      </RootDiv>
    </div>
  );
}
