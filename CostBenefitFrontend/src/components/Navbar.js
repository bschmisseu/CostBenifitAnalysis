import React, { useContext } from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import logo from './../images/logo.png';
import { Link } from 'react-router-dom';

import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

import PostAddIcon from '@material-ui/icons/PostAdd';
import ViewArrayOutlinedIcon from '@material-ui/icons/ViewArrayOutlined';
import ListAltOutlinedIcon from '@material-ui/icons/ListAltOutlined';
import RestoreOutlinedIcon from '@material-ui/icons/RestoreOutlined';
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';

import User from './../models/User';
import { EntryContext } from './../context/EntryContext';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  logo: {
    [theme.breakpoints.down('xs')]: {
      width: "60px",
    },
    [theme.breakpoints.up('md')]: {
      width: "80px",
    },
    [theme.breakpoints.up('lg')]: {
      width: "100px",
    },
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  },
  title: {
    flexGrow: 1,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: 0,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

export default function Component(props) {
  const [entryId, setContext] = useContext(EntryContext);

  const classes = useStyles();
  const theme = useTheme();
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [nestedOpen, setNestedOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  const handleNestedClick = () => {
    setNestedOpen(!nestedOpen);
  };

  let navbar;

  if (window.location.pathname == "/login" || window.location.pathname == "/register") {

    navbar =
      <AppBar positionsticky="true" color="default">
        <Toolbar>
          <Link to="/" variant="h5" color="inherit" underline="none" className={classes.logo}>
            <img src={logo} alt="CBA" width="100" />
          </Link>
        </Toolbar>
      </AppBar>
  }
  else if (User._id != undefined) {
    let entries = User.entries;

    navbar =
      <div className={classes.root}>
        <br/><br/>
        <CssBaseline />
        <AppBar color="default" positionsticky="true" className={clsx(classes.appBar, { [classes.appBarShift]: drawerOpen })} >
          <Toolbar>
            <div className={classes.title}>
              <Link to="/" variant="h5" color="inherit" className={classes.logo}>
                <img src={logo} alt="CBA" width="100"/>
              </Link>
            </div>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerOpen}
              className={clsx(drawerOpen && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer className={classes.drawer} variant="persistent" anchor="right" open={drawerOpen} classes={{ paper: classes.drawerPaper }} >
          <div className={classes.drawerHeader}>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
          </div>

          <div align="center">
            <Typography variant="h6">Menu</Typography>
          </div>
          <List>
            <Link to="/input" style={{ textDecoration: 'none', color: 'inherit' }}>
              <ListItem button>
                <ListItemIcon>
                  <PostAddIcon />
                </ListItemIcon>
                <ListItemText primary="Create Entry" />
              </ListItem>
            </Link>

            <ListItem button onClick={handleNestedClick}>
              <ListItemIcon>
                <RestoreOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Past Entries" />
              {nestedOpen ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={nestedOpen} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                  {entries.map((list) => (
                    <Link to="/inputpast" onClick={() => setContext(list)} style={{ textDecoration: 'none', color: 'inherit' }}>
                      <ListItem button key={list.name} className={classes.nested}>
                        <ListItemIcon>
                          <ListAltOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText primary={list.name} />
                      </ListItem>
                    </Link>
                  ))}
              </List>

            </Collapse>

            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
              <ListItem button>
                <ListItemIcon>
                  <ViewArrayOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="Learn More" />
              </ListItem>
            </Link>
          </List>

          <Divider></Divider>

          <List>
            <Link to="/logout" style={{ textDecoration: 'none', color: 'inherit' }}>
              <ListItem button>
                <ListItemIcon>
                  <ExitToAppOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="Log out" />
              </ListItem>
            </Link>
          </List>
        </Drawer>
      </div>
  }
  else {

    navbar =
      <div className={classes.root}>
        <br/><br/>
        <CssBaseline />
        <AppBar color="default" positionsticky="true" className={clsx(classes.appBar, { [classes.appBarShift]: drawerOpen })} >
          <Toolbar>
            <Link to="/" variant="h5" color="inherit" className={classes.logo, classes.title}>
              <img src={logo} alt="CBA" width="100" />
            </Link>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerOpen}
              className={clsx(drawerOpen && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer className={classes.drawer} variant="persistent" anchor="right" open={drawerOpen} classes={{ paper: classes.drawerPaper }} >
          <div className={classes.drawerHeader}>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
          </div>

          <div align="center">
            <Typography variant="h6">Menu</Typography>
          </div>
          <List>
            <Link to="/login" style={{ textDecoration: 'none', color: 'inherit' }}>
              <ListItem button>
                <ListItemIcon>
                  <VerifiedUserIcon />
                </ListItemIcon>
                <ListItemText primary="Login" />
              </ListItem>
            </Link>

            <Link to="/register" style={{ textDecoration: 'none', color: 'inherit' }}>
              <ListItem button>
                <ListItemIcon>
                  <PersonAddIcon />
                </ListItemIcon>
                <ListItemText primary="Register" />
              </ListItem>
            </Link>
          </List>
        </Drawer>
      </div>
  }

  return (
    <div>
      {navbar}
    </div>
  );
}