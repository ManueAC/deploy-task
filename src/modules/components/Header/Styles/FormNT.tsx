import React from "react";
import { makeStyles } from "@material-ui/styles";
import {
  Grid,
  IconButton,
  Typography,
  TextField,
  Box,
} from "@material-ui/core";
import CheckIcon from "@material-ui/icons/Check";
import ClearIcon from "@material-ui/icons/Clear";

const FormNT = makeStyles({
  root: {
    margin: "20% auto",
    width: "63%",
  },
  FW: {
    display: "flex",
  },
  FormBox: {
    width: "34%",
  },
});

export default function BasicTextFields() {
  const classes = FormNT();

  return (
    <Box borderLeft={1} borderColor="grey.500" width="45%" margin="auto">
      <form className={classes.root} noValidate autoComplete="off">
        <Grid container direction="row">
          <Grid item md={8}>
            <Typography variant="h3">New task</Typography>
          </Grid>
          <Grid container md={4} direction="row" alignContent="center">
            <IconButton>
              <CheckIcon />
            </IconButton>
            <IconButton>
              <ClearIcon />
            </IconButton>
          </Grid>
        </Grid>
        <Grid container direction="row">
          <Grid item md={12}>
            <TextField
              className={classes.FW}
              id="standard-full-width"
              label="Task name"
            />
          </Grid>

          <Grid item md={6}>
            <TextField id="standard-basic" type="date" margin="normal" />
          </Grid>
          <Grid container direction="row" md={6} justifyContent="flex-end">
            <TextField id="standard-basic" type="date" margin="normal" />
          </Grid>

          <Grid item md={12}>
            <TextField
              className={classes.FW}
              id="standard-full-width"
              label="Subject"
            />
          </Grid>
          <Grid item md={12}>
            <TextField
              className={classes.FW}
              id="standard-full-width"
              label="Description"
              margin="normal"
              multiline
            />
          </Grid>
        </Grid>
      </form>
    </Box>
  );
}
