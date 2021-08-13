import {
  Grid,
  Typography,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { useAuth0 } from "@auth0/auth0-react";
import * as React from "react";



const LoginStyles = makeStyles({
  fontp: {
    fontFamily: "Raleway",
    fontSize: 80,
    color: "#004d40",
    marginTop: "20%"
  },
  fsec: {
    fontFamily: "Quicksand",
    fontSize: 40,
  },
  fullh: {
    height: '100vh',
    minHeight : '100vh',
    background: 'linear-gradient(45deg, #0496FF 10%, #AAEFDF 60%)',
  },
  logbtn: {
    marginTop: "50%",
    borderColor: "#2979ff",
    fontFamily: "Abel",
    fontSize: 20,
    fontWeight: "bold"
  },
  span: {
    color: "#33eaff"
  }
});

const LogoutView = () => {
  const classes = LoginStyles();
  const { loginWithRedirect } = useAuth0();
  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="flex-start"
        // style={{ margin: "5% auto" }}
        className={classes.fullh}
      >
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item md={12}>
            <Typography align="center" className={classes.fontp}>
              Hi!.
            </Typography>
            <Typography align="center" className={classes.fsec}>
              Do u want to <span>Log-In</span> again?
            </Typography>
          </Grid>
          <Grid item md={12}>
            <Button className={classes.logbtn} variant="outlined" onClick={() => loginWithRedirect()}>Login</Button>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default LogoutView;
