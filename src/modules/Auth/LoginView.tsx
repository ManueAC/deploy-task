import {
  Grid,
  Typography,
  Box,
  TextField,
  IconButton,
  InputAdornment,
} from "@material-ui/core";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import LockIcon from "@material-ui/icons/Lock";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import HelpIcon from '@material-ui/icons/Help';
import { makeStyles } from "@material-ui/styles";
import * as React from "react";

export interface LoginViewProps {}

const LoginStyles = makeStyles({
  fontp: {
    fontFamily: "Raleway",
    fontSize: 60,
  },
  fsec: {
    fontFamily: "Quicksand",
    fontSize: 40,
  },
});

const LoginView: React.FC<LoginViewProps> = () => {
  const classes = LoginStyles();
  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        // style={{ margin: "5% auto" }}
      >
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item md={12}>
            <Typography align="center" className={classes.fontp}>
              Welcome!
            </Typography>
          </Grid>
        </Grid>

        <Grid item md={12}>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Box
              borderLeft={1}
              borderColor="grey"
              style={{ /* paddingLeft: "3%", */ height: 300, width: "25%" }}
            >
              <Grid container direction="row" alignItems="center" style={{marginLeft: "10%"}}>
                <Grid item md={6}>
                  <Typography className={classes.fsec}>Log-In</Typography>
                </Grid>
                {/* <Grid container direction="row" justifyContent="center"> */}
                <Grid container spacing={1} alignItems="flex-end" style={{marginTop: 5}}>
                  <Grid item>
                    <AccountCircleIcon />
                  </Grid>
                  <Grid item md={9}>
                    <TextField
                      id="input-with-icon-grid"
                      label="Email"
                      fullWidth
                    />
                  </Grid>
                </Grid>

                <Grid container spacing={1} alignItems="flex-end" style={{marginTop: 5}}>
                  <Grid item>
                    <LockIcon />
                  </Grid>
                  <Grid item md={9}>
                    <TextField
                      id="input-with-icon-grid"
                      label="Password"
                      fullWidth
                    />
                  </Grid>
                </Grid>
                <Grid container justifyContent="center" style={{margin: "8px 0px 0px -10%"}}>
                  <Grid item>
                    <IconButton>
                      <CheckCircleIcon fontSize="large" />
                    </IconButton>
                  </Grid>
                  <Grid item>
                    <IconButton>
                      <HelpIcon fontSize="large" />
                    </IconButton>
                  </Grid>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default LoginView;
