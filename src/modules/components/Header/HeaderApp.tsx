import { Box, Button, Grid, makeStyles, Typography } from "@material-ui/core";
import MeetingRoomIcon from "@material-ui/icons/MeetingRoom";
import { useState } from "react";
import { useHistory } from "react-router-dom";

import { BtnNewTask } from "./Styles/BtnNewTask";
import { BtnResumen } from "./Styles/BtnResumen";

const ViewStyles = makeStyles({
  root: {
    background: "#E9FCFF",
    borderRadius: "5px 5px 0px 0px",
  },
  font: {
    fontFamily: "Montserrat 600",
    fontSize: "13px",
    letterSpacing: "3px",
    fontWeight: "bold",
  },
});

export const HeaderApp = () => {
  // console.log(this.prop.styles)
  const classes = ViewStyles();
  const [colourA, setColourA] = useState("");
  const [colourB, setColourB] = useState("");

  const history = useHistory();
  const redirectNew = () => {
    history.push("/tasks/new");
  };
  const redirectRes = () => {
    history.push("/");
  };
  const stablish = () => {
    window.location.pathname === "/" ? setColourA("#E9FCFF") : setColourA("#CFFCFF");
    window.location.pathname === "/tasks/new" ? setColourB("#E9FCFF") : setColourB("#CFFCFF");
  }
  // if (window.location.pathname === '/tasks/new') setColour("#E9FCFF");
  return (
    <>
      <Box bgcolor=" #CCFFF1 ">
        <Grid container>
          <Grid item md={12}>
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="flex-end"
            >
              <Grid item md={1}></Grid>
              <Grid item md={9}>
                <Box bgcolor="#CCFFF1">
                  <Typography
                    align="center"
                    style={{
                      color: "#616161",
                      paddingTop: 12,
                      paddingBottom: 8,
                      fontSize: 48,
                      fontFamily: "Quicksand 500"
                    }}
                  >
                    Web's Tasks
                  </Typography>
                </Box>
              </Grid>
              <Grid item md={1}>
                <Button size="large">
                  <MeetingRoomIcon
                    fontSize="large"
                    style={{ color: "#616161" }}
                  />
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item md={12}>
            <Grid container direction="row" justifyContent="center">
              <Button 
                // className={classes.root}
                // href="/"
                style={{ backgroundColor: colourA, borderRadius: "5px 5px 0px 0px" }}
                onClick={() => {
                  redirectRes();
                  stablish();
                }}
              >
                <Typography variant="subtitle2" className={classes.font}>
                  Resumen
                </Typography>
              </Button>
              <Button
                
                onClick={() => {
                  redirectNew();
                  stablish();
                }}
                style={{ backgroundColor: colourB, borderRadius: "5px 5px 0px 0px"}}
              >
                <Typography variant="subtitle2" className={classes.font}>
                  New Task
                </Typography>
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default HeaderApp;
