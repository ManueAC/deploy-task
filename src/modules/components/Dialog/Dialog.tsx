import React, { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { TaskType, UserType } from "../types";
import { getUsersAction, updateTaskAction } from "../actions";
import Grid from "@material-ui/core/Grid";
import { createStyles, makeStyles, MenuItem, Theme } from "@material-ui/core";

export interface DialogViewProps {
  open: boolean;
  onClose: () => void;
  taskData: TaskType;
}
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& .MuiTextField-root": {
        margin: theme.spacing(1),
        width: "30%",
      },
    },
  })
);
export const DialogView: React.FunctionComponent<DialogViewProps> = ({
  open,
  onClose,
  taskData,
}) => {
  const [task, setNewTask] = useState(taskData);

  const [users, setUsers] = useState<UserType[]>([]);
  const [user, setUser] = useState(taskData.taskUser);

  console.log(users);

  const callback = (dataUsers: UserType[]): void => {
    setUsers(dataUsers);
  };
  const getUsers = () => {
    getUsersAction(callback);
  };
  useEffect(() => {
    getUsers();
  }, []);

  useEffect(() => {
    setNewTask({ ...taskData });
  }, [taskData]);

  const setStateTask = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setNewTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };

  const updateTask = (): void => {
    const newTask = {
      ...task,
      taskUser: user,
    };
    if (task.id) {
      updateTaskAction(newTask, task.id);
    }
    onClose();
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUser(event.target.value);
  };
  const classes = useStyles();
  return (
    <div>
      <Dialog open={open} onClose={onClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Edit obligation</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Title"
            type="text"
            fullWidth
            name="taskTitle"
            value={task.taskTitle}
            onChange={setStateTask}
          />
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Grid item md={6}>
              <TextField
                autoFocus
                type="date"
                name="taskStart"
                value={task.taskStart}
              />
            </Grid>
            <Grid item md={6}>
              <TextField
                autoFocus
                id="name"
                type="date"
                name="taskEnd"
                value={task.taskEnd}
              />
            </Grid>
          </Grid>


          <TextField
            // className={classes.root}
            style={{width: "100%"}}
            id="demo-simple-select"
            select
            label="Users"
            value={user}
            name="taskUser"
            onChange={handleChange}
          >
            {users.map((user) => (
              <MenuItem key={user.id} value={user.email}>
                {user.firstName}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Description"
            type="text"
            fullWidth
            name="taskDscr"
            value={task.taskDscr}
            onChange={setStateTask}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={updateTask} color="primary">
            Save
          </Button>
          <Button onClick={onClose} color="primary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
