import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Account from "./Account";
import LanguageSwitcher from "./LanguageSwitcher";
import { API } from '../../utils/environment'

export default function MenuAppBar(props) {
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    appbar: {
      backgroundColor: props.color,
      position: props.position,
      boxShadow: "none",
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      fontSize: "25px",
      flexGrow: 1,
      paddingLeft: "1vw",
      color: "white",
      "&:hover": {
        color: "white",
        textDecoration: "none",
      },
    },
  }));
  const classes = useStyles();

  console.log(API, 'dfdsfdfdsdsf')

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appbar}>
        <Toolbar>
          <LanguageSwitcher />
          <Link to="/" className={classes.title}>
            <Typography variant="h6" className={classes.title}>
              {API} /
            </Typography>
          </Link>
          <Account />
        </Toolbar>
      </AppBar>
    </div>
  );
}
