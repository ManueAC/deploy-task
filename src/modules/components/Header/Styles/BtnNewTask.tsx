import { makeStyles } from "@material-ui/core/styles";
import { Button, Typography } from "@material-ui/core";
import { useState } from "react";

const btnNewTk = makeStyles({
  root: {
    background: "#CFFCFF",
    borderRadius: "5px 5px 0px 0px",
  },
  font: {
    fontFamily: "Montserrat 600",
    fontSize: "13px",
    letterSpacing: "3px",
    fontWeight: "bold",
    color: "indigo",
  },
});

export const BtnNewTask = () => {
  const classes = btnNewTk();
  const [colour, setColour] = useState("");
  
  return (
    <Button
      href="/tasks/new"
      onClick={() => setColour("red")}
      style={{ backgroundColor: colour }}

    >
      <Typography variant="subtitle2" className={classes.font}>
        New Task
      </Typography>
    </Button>
  );
};
