import { Box, Button, Grid, Typography } from "@material-ui/core";
import MeetingRoomIcon from "@material-ui/icons/MeetingRoom";

import { BtnNewTask } from "./Styles/BtnNewTask";
import { BtnResumen } from "./Styles/BtnResumen";

export const HeaderApp = () => {
  return (
    <>
      <Box bgcolor=" #CCFFF1 ">
        <Grid container>
          <Grid item md={1}></Grid>
          <Grid item md={9}>
            <Box bgcolor="#CCFFF1">
              <Typography
                align="center"
                style={{
                  color: "#424242",
                  paddingTop: 12,
                  paddingBottom: 8,
                  fontSize: 48,
                }}
              >
                Web's Tasks
              </Typography>
            </Box>
          </Grid>
          <Grid item md={1}>
            <Button size="large">
              <MeetingRoomIcon fontSize="large" style={{ color: "#424242" }} />
            </Button>
          </Grid>

          <Grid container direction="row" justifyContent="center" item md={12}>
            <Grid container md={2} justifyContent="center">
              <BtnResumen />
              <BtnNewTask />
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default HeaderApp;
