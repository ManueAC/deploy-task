import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";

const btnNewTk = makeStyles({
  root: {
    background: "#CFFCFF",
    borderRadius: "5px 5px 0px 0px",
  },
});

export const BtnNewTask = () => {
  const classes = btnNewTk();
  return (
    <Button className={classes.root} href="/tasks/new">
      New Task
    </Button>
  );
};
