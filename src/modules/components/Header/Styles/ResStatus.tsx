import { List, ListItem, ListItemText, Typography } from "@material-ui/core";

const ResStatus = () => {
  return (
    <List>
      <ListItem>
        <ListItemText primary="Single-line item" secondary="Worker Asignated" />
        <Typography align="right">10:33</Typography>
      </ListItem>
    </List>
  );
};

export default ResStatus;
