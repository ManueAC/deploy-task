import { Box, Button, Grid, makeStyles, Typography } from "@material-ui/core";
import MeetingRoomIcon from "@material-ui/icons/MeetingRoom";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const ViewStyles = makeStyles({
  root: {
    background: "#E9FCFF",
    borderRadius: "5px 5px 0px 0px",
  },
  font: {
    fontFamily: "Abel",
    fontSize: "15px",
    letterSpacing: "3px",
    fontWeight: "bold",
    color: "grey",
  },
});

export const HeaderApp = () => {
  const {logout} = useAuth0();
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
    window.location.pathname === "/"
      ? setColourA("#E9FCFF")
      : setColourA("#CFFCFF");
    window.location.pathname === "/tasks/new"
      ? setColourB("#E9FCFF")
      : setColourB("#CFFCFF");
  };

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
                      fontFamily: "Abel",
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
                    onClick={() => logout()}
                  />
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item md={12}>
            <Grid container direction="row" justifyContent="center">
              <Button
                style={{
                  backgroundColor: colourA,
                  borderRadius: "5px 5px 0px 0px",
                  color: "grey",
                }}
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
                style={{
                  backgroundColor: colourB,
                  borderRadius: "5px 5px 0px 0px",
                }}
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
