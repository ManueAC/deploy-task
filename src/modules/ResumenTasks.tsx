import {
  Box,
  Checkbox,
  Divider,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useEffect, useState } from "react";
import EditIcon from "@material-ui/icons/Edit";
import ClearIcon from "@material-ui/icons/Clear";
// Components
import { TaskType } from "./components/types";
import {
  deleteTaskAction,
  getTaskAction,
  statusTaskAction,
} from "./components/actions";
import { DialogView } from "./components/Dialog/Dialog";
import RefreshIcon from "@material-ui/icons/Refresh";
//myaebe

const styles = makeStyles({
  btnRfrs: {
    color: "#9e9e9e",
    margin: "-1% auto 4% auto",
    fontSize: "10px",
  },
  ftp: {
    color: "#424242",
  },
  fts: {
    color: "#616161",
    fontFamily: "Montserrat 300",
  },
});

export const ResumenTasks = () => {
  const initialTask: TaskType = {
    taskTitle: "",
    taskUser: "",
    taskDscr: "",
    taskCheck: false,
    taskStart: "",
    taskEnd: "",
  };
  // console.log(window.location);

  const [tasks, setTasks] = useState<TaskType[]>([]);
  const [openDialogTask, setOpenDialogTask] = useState(false);
  const [taskData, setTaskData] = useState<TaskType>(initialTask);

  const onOpenDialogTask = (): void => setOpenDialogTask(true);
  const onCloseDialogTask = (): void => {
    setOpenDialogTask(false);
    setTaskData(initialTask);
  };

  const callback = (data: TaskType[]): void => {
    setTasks(data);
    // console.log(data);
  };
  const obtenerTareas = () => {
    getTaskAction(callback);
  };
  useEffect(() => {
    obtenerTareas();
  }, [tasks]);

  const taskFiltersFalse = tasks.filter((task) => task.taskCheck === false);
  const taskFilters = tasks.filter((task) => task.taskCheck === true);
  const classes = styles();

  return (
    <>
      <Box margin="7% auto">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="flex-start"
        >
          <Grid
            // borderRight={1}
            item
            md={6}
            // margin="0px auto 0px auto"
            style={{ borderColor: "grey" }}
          >
            <Typography variant="h4" align="center" className={classes.fts}>
              Current tasks
              <Divider style={{ margin: "3% 5% 2% 4%" }} />
            </Typography>
            <List
              id="tasks-list-display"
              style={{ margin: "0 auto"}}
            >
              {taskFiltersFalse.map((task, i) => (
                <ListItem key={task.id} button>
                  <Checkbox
                    key={i}
                    checked={task.taskCheck}
                    onChange={() => {
                      if (task.id)
                        statusTaskAction(
                          task.id,
                          !task.taskCheck,
                          obtenerTareas
                        );
                    }}
                  />
                  <ListItemText
                    disableTypography
                    primary={
                      <Typography style={{ fontFamily: "Poppins" }}>
                        {task.taskTitle}
                      </Typography>
                    }
                    secondary={task.taskUser}
                  />
                  <Typography
                    noWrap
                    style={{
                      marginLeft: "6%",
                      marginRight: "2%",
                      fontFamily: "Roboto",
                    }}
                  >
                    {task.taskDscr}
                  </Typography>
                  <IconButton
                    onClick={() => {
                      setTaskData(task);
                      if (taskData.id !== "") onOpenDialogTask();
                    }}
                  >
                    <EditIcon />
                  </IconButton>
                  <IconButton
                    onClick={() => {
                      if (task.id) deleteTaskAction(task.id);
                      const newTasks = [...taskFiltersFalse];
                      newTasks.splice(i, 1);
                      const filtrados = newTasks.concat(taskFilters);
                      setTasks(filtrados);
                    }}
                  >
                    <ClearIcon />
                  </IconButton>
                </ListItem>
              ))}
            </List>
          </Grid>
          <Divider orientation="vertical" flexItem />
          <Grid item md={3}>
            <Typography variant="h4" align="center" className={classes.fts}>
              Status
              <Divider style={{ margin: "6% 8% 4% 8%" }} />
            </Typography>
            <List>
              {taskFilters.map(
                ({ taskTitle, taskDscr, taskUser, id, taskCheck }) => (
                  <ListItem key={id} button>
                    <Checkbox
                      checked={taskCheck}
                      onChange={() => {
                        if (id) statusTaskAction(id, !taskCheck, obtenerTareas);
                      }}
                    />
                    <ListItemText primary={taskTitle} secondary={taskUser} />
                    <Typography noWrap>{taskDscr}</Typography>
                  </ListItem>
                )
              )}
            </List>
          </Grid>
        </Grid>
      </Box>
      <DialogView
        open={openDialogTask}
        onClose={onCloseDialogTask}
        taskData={taskData}
        obtenerTareas={obtenerTareas}
      />
    </>
  );
};
