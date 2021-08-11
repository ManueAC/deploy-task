import { Grid, Typography, Container, Box, TextField, IconButton } from "@material-ui/core";
import * as React from "react";

export interface LoginViewProps {}

const LoginView: React.SFC<LoginViewProps> = () => {
  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid container md={12}>
          <Grid item md={12}>
            <Typography>Welcome !</Typography>
          </Grid>
        </Grid>

        <Grid item md={12}>
          <Grid container direction="row">
            <Box>
              <Grid container direction="row" md={12}>
                <Grid item md={12}>
                  <Typography>Log-In</Typography>
                </Grid>
                <TextField />
                <TextField />
                <IconButton></IconButton>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default LoginView;
