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



export const ResumenTasks = () => {
  const initialTask: TaskType = {
    taskTitle: "",
    taskUser: "",
    taskDscr: "",
    taskCheck: false,
    taskStart: "",
    taskEnd: "",
  };

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
  };

  const obtenerTareas = () => {
    getTaskAction(callback);
  };

  useEffect(() => {
    obtenerTareas();
  }, []);

  const taskFilters = tasks.filter((task) => task.taskCheck === true);
  const taskFiltersFalse = tasks.filter((task) => task.taskCheck === false);

  return (
    <>
      <Box margin="9% auto">
        <Grid
          container
          direction="row"
          justifyContent="flex-end"
          alignItems="stretch"
        >
          <Box
            borderRight={1}
            margin="0px 20px 0px auto"
            style={{ borderColor: "grey" }}
          >
            <Typography variant="h4" align="center">
              Current tasks
              <Divider style={{ margin: "3% 8% 2% 6%" }} />
            </Typography>
            <List style={{ marginLeft: "2%", marginRight: "4%" }}>
              {taskFiltersFalse.map((task) => (
                <ListItem key={task.id} button>
                  <Checkbox
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
                    primary={task.taskTitle}
                    secondary={task.taskUser}
                  />
                  <Typography
                    noWrap
                    style={{ marginLeft: "6%", marginRight: "2%" }}
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
                    }}
                  >
                    <ClearIcon />
                  </IconButton>
                </ListItem>
              ))}
            </List>
          </Box>
          <Grid item md={5} style={{ paddingRight: "13%" }}>
            <Typography variant="h4" align="center">
              Status
              <Divider style={{ margin: "5% 8% 2% 8%" }} />
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
      />
    </>
  );
};
