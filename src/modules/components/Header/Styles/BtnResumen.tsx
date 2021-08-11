import { makeStyles } from "@material-ui/core/styles";
import { Button, Typography } from "@material-ui/core";

const btnRsmn = makeStyles({
  root: {
    background: "#E9FCFF",
    borderRadius: "5px 5px 0px 0px",
  },
  font: {
    fontFamily: "Montserrat 600",
    fontSize: "13px",
    letterSpacing: "3px",
    fontWeight: "bold"
  },
});

export const BtnResumen = () => {
  const classes = btnRsmn();
  return (
    <Button className={classes.root} href="/">
      <Typography variant="subtitle2" className={classes.font}>
        Resumen
      </Typography>
    </Button>
  );
};
