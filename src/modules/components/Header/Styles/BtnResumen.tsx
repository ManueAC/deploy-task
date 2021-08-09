import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";

const btnRsmn = makeStyles({
  root: {
    background: "#E9FCFF",
    borderRadius: "5px 5px 0px 0px",
  },
});

export const BtnResumen = () => {
  const classes = btnRsmn();
  return (
    <Button className={classes.root} href="/">
      Resumen
    </Button>
  );
};
