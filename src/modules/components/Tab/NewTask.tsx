import {
  Box,
  Grid,
  IconButton,
  Typography,
  TextField,
  MenuItem,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React, { Fragment, useEffect, useState } from "react";
// Components
import CheckIcon from "@material-ui/icons/Check";
import ClearIcon from "@material-ui/icons/Clear";
import { TaskType, UserType } from "../types";
import { createTaskAction, getUsersAction } from "../actions";
import { useHistory } from "react-router-dom";

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

const initialTask: TaskType = {
  taskTitle: "",
  taskUser: "",
  taskDscr: "",
  taskCheck: false,
  taskStart: "",
  taskEnd: "",
};

export const NewTask = () => {
  const classes = FormNT();
  const [newData, setNewData] = useState<TaskType>(initialTask);
  const [users, setUsers] = useState<UserType[]>([]);
  const [user, setUser] = useState(initialTask.taskUser);

  console.log(users);

  const callbackUser = (dataUsers: UserType[]): void => {
    setUsers(dataUsers);
  };
  const getUsers = () => {
    getUsersAction(callbackUser);
  };
  useEffect(() => {
    getUsers();
  }, []);
  const history = useHistory();
  const callback = (): void => {
    history.push("/");
  };

  const dataInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const createTask = {
      ...newData,
      [e.target.name]: e.target.value,
    };
    setNewData(createTask);
    setUser(e.target.value);
  };

  const onSubmit = (): void => {
    const newData2 = {
      ...newData,
      taskUser: user
    }
    createTaskAction(newData2, callback);
  };
  return (
    <Fragment>
      <Box borderLeft={1} borderColor="grey.500" width="45%" margin="auto">
        <form className={classes.root}>
          <Grid container direction="row">
            <Grid item md={8}>
              <Typography variant="h3" style={{color: "#616161"}}>New task</Typography>
            </Grid>
            <Grid container md={4} direction="row" alignContent="center">
              <IconButton onClick={onSubmit}>
                <CheckIcon />
              </IconButton>
              
            </Grid>
          </Grid>
          <Grid container direction="row">
            <Grid item md={12}>
              <TextField
                className={classes.FW}
                id="standard-full-width"
                label="Task name"
                name="taskTitle"
                onChange={dataInput}
              />
            </Grid>

            <Grid item md={6}>
              <TextField
                id="standard-basic"
                type="date"
                margin="normal"
                name="taskStart"
                onChange={dataInput}
              />
            </Grid>
            <Grid container direction="row" md={6} justifyContent="flex-end">
              <TextField
                id="standard-basic"
                type="date"
                margin="normal"
                name="taskEnd"
                onChange={dataInput}
              />
            </Grid>
           
            <Grid item md={12}>
              <TextField
                className={classes.FW}
                id="standard-full-width"
                label="Description"
                margin="normal"
                multiline
                name="taskDscr"
                onChange={dataInput}
              />
            </Grid>
            <TextField
              // className={classes.root}
              style={{ width: "100%" }}
              id="demo-simple-select"
              select
              label="Users"
              value={user}
              name="taskUser"
              onChange={dataInput}
            >
              {users.map((user) => (
                <MenuItem key={user.id} value={user.email}>
                  {user.firstName}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
        </form>
      </Box>
    </Fragment>
  );
};

export default NewTask;
