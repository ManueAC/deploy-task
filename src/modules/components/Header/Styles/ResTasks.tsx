import {
  Checkbox,
  IconButton,
  List,
  ListItem,
  ListItemText,
  makeStyles,
  Typography,
} from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import ClearIcon from "@material-ui/icons/Clear";

const LsStyle = makeStyles({
  root: {
    paddingRight: "1.5rem",
  },
  LSize: {},
});

const ResTasks = () => {
  const classes = LsStyle();
  return (
    <List>
      <ListItem>
        <Checkbox></Checkbox>
        <ListItemText
          primary="Single-line item"
          secondary="Worker Asignated"
          className={classes.root}
        />
        <Typography className={classes.root}>
          Task Description Asigned
        </Typography>
        <IconButton>
          <EditIcon />
        </IconButton>
        <IconButton>
          <ClearIcon />
        </IconButton>
      </ListItem>
    </List>
  );
};

export default ResTasks;
