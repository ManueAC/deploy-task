import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";

const BtnEditT = makeStyles({
  root: {
    background: "#CFFCFF",
    borderRadius: "5px 5px 0px 0px",
  },
});

export const Hook = () => {
  const classes = BtnEditT();
  return (
    <Button className={classes.root} href="/tasks/edit">
      Edit Task
    </Button>
  );
};
