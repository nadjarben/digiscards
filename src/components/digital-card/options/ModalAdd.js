import React from "react";
import { useTranslation } from 'react-i18next'
import { makeStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";
import Icon from "@mdi/react";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import MenuItem from '@material-ui/core/MenuItem';
import { mdiPlusBoxMultiple } from "@mdi/js";

import AppleIcon from "@material-ui/icons/Apple";
import AndroidIcon from "@material-ui/icons/Android";
import Share from "../../../assets/images/digital-card/share.png";
import ShareChrome from "../../../assets/images/digital-card/shareChrome.png";
import Add from "../../../assets/images/digital-card/add2.png";
import AddAndroid from "../../../assets/images/digital-card/add2android.png";

const useStyles = makeStyles((theme) => ({
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const ModalAdd = ({ style }) => {
  const { t } = useTranslation("common");
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setModal({
      pageThree: true,
      pageIos: false,
      pageAndroid: false,
    });
  };
  const [modal, setModal] = React.useState({
    pageThree: true,
    pageIos: false,
    pageAndroid: false,
  });

  return (
    <div>
      <MenuItem onClick={handleClickOpen}  className="dgc-share-logo">
      <Icon
        path={mdiPlusBoxMultiple}
        title="Add to homescreen"
        size={2}
        className="dgc-logo-round"
        color="black"
        style={{
          borderColor: "transparent",
        }}
      />
      {t('Add to home screen')}</MenuItem>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar
          style={{
            backgroundColor: style.bg,
            color: style.modalText,
            position: "relative",
          }}
        >
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Add to Homescreen
            </Typography>
          </Toolbar>
        </AppBar>
        {modal.pageThree && (
          <List>
            <div
              onClick={() =>
                setModal({
                  pageOne: false,
                  pageTwo: false,
                  pageThree: false,
                  pageIos: true,
                })
              }
            >
              <ListItem button>
                <ListItemIcon>
                  <AppleIcon />
                </ListItemIcon>
                <ListItemText primary="Ios" />
              </ListItem>
            </div>
            <Divider />
            <div
              onClick={() =>
                setModal({
                  pageOne: false,
                  pageTwo: false,
                  pageThree: false,
                  pageAndroid: true,
                })
              }
            >
              <ListItem button>
                <ListItemIcon>
                  <AndroidIcon />
                </ListItemIcon>
                <ListItemText primary="Android" />
              </ListItem>
            </div>
          </List>
        )}

        {modal.pageIos && (
          <div style={{ paddingTop: "10vh" }} className="container text-center">
            <p>{t("Tap the Share button at the bottom of Safari")}</p>
            <div className="text-center">
              <img src={Share} width="60px" alt="share-icon" />
            </div>
            <br />
            <p>
              {t(
                "In the list of options that appears, scroll until you see Add to Home Screen"
              )}
            </p>
            <div className="text-center">
              <img src={Add} width="100px" alt="share-icon" />
            </div>
          </div>
        )}

        {modal.pageAndroid && (
          <div style={{ paddingTop: "10vh" }} className="container text-center">
            <p>{t("Tap the Menu button at the top right corner of Chrome")}</p>
            <div className="text-center">
              <img src={ShareChrome} width="70px" alt="share-icon" />
            </div>
            <br />
            <p>
              {t(
                "In the list of options that appears, scroll down until you see Add to Home Screen"
              )}
            </p>
            <div className="text-center">
              <img src={AddAndroid} width="120px" alt="share-icon" />
            </div>
          </div>
        )}
      </Dialog>
    </div>
  );
};

export default ModalAdd;
