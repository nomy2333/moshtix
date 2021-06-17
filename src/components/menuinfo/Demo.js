import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Data from '../../resources/data/menu-data.json';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import SettingsIcon from '@material-ui/icons/Settings';
import SignalCellularAltIcon from '@material-ui/icons/SignalCellularAlt';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

export default function NestedList() {
  const classes = useStyles();
  const [open0, setOpen0] = React.useState(false);
  const [open1, setOpen1] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [open3, setOpen3] = React.useState(false);
  const handleClick0 = () => {
      setOpen0(!open0);  
  };
  const handleClick1 = () => {
    setOpen1(!open1);  
};
  const handleClick2 = () => {
  setOpen2(!open2);  
};
const handleClick3 = () => {
  setOpen3(!open3);  
};
  
  return (
    <List
    
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          {Data.name}
        </ListSubheader>
      }
      className={classes.root}
    >
      
      <ListItem button onClick={handleClick0} data-testid="open_button0">
        <ListItemIcon>
        <SettingsIcon fontSize="large"/>
        </ListItemIcon>
        <ListItemText primary={Data.children[0].name} />
        {open0 ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open0} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
        {Data.children[0].children.map((eachChild)=>(
        
        <ListItem key={eachChild.name} button className={classes.nested}>
            <ListItemIcon>
              <FiberManualRecordIcon fontSize="small"/>
            </ListItemIcon>
            <ListItemText primary={eachChild.name} />
          </ListItem>
      ))}
        </List>
      </Collapse>

      <ListItem button onClick={handleClick1} data-testid="open_button1">
        <ListItemIcon>
        <CalendarTodayIcon fontSize="large"/>
        </ListItemIcon>
        <ListItemText primary={Data.children[1].name} />
        {open1 ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open1} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
        {Data.children[1].children.map((eachChild)=>(
        
        <ListItem key={eachChild.name} button className={classes.nested}>
            <ListItemIcon>
              <FiberManualRecordIcon fontSize="small"/>
            </ListItemIcon>
            <ListItemText primary={eachChild.name} />
          </ListItem>
      ))} 
        </List>
      </Collapse>

      <ListItem button onClick={handleClick2} data-testid="open_button2">
        <ListItemIcon>
          <InboxIcon fontSize="large"/>
        </ListItemIcon>
        <ListItemText primary={Data.children[2].name} />
        {open2 ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open2} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
        {Data.children[2].children.map((eachChild)=>(
        
        <ListItem key={eachChild.name} button className={classes.nested}>
            <ListItemIcon>
              <FiberManualRecordIcon fontSize="small"/>
            </ListItemIcon>
            <ListItemText primary={eachChild.name} />
          </ListItem>
      ))} 
        </List>
      </Collapse>
      
      <ListItem button onClick={handleClick3} data-testid="open_button3">
        <ListItemIcon>
          <SignalCellularAltIcon fontSize="large"/>
        </ListItemIcon>
        <ListItemText primary={Data.children[3].name} />
        {open3 ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open3} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
        {Data.children[3].children.map((eachChild)=>(
        
        <ListItem key={eachChild.name} button className={classes.nested}>
            <ListItemIcon>
              <FiberManualRecordIcon fontSize="small"/>
            </ListItemIcon>
            <ListItemText primary={eachChild.name} />
          </ListItem>
      ))} 
        </List>
      </Collapse>

    </List>
  );
}
