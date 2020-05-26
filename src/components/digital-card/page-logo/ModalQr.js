import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CloseIcon from "@material-ui/icons/Close";
import { Slide, Typography, IconButton, Toolbar, AppBar, Dialog } from "@material-ui/core";
import { mdiQrcode } from "@mdi/js";
import Icon from "@mdi/react";

import "./ModalQr.scss";

const useStyles = makeStyles((theme) => ({
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const ModalShare = ({ style, social }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Icon
        onClick={handleClickOpen}
        path={mdiQrcode}
        title="Qr"
        size={2}
        className="dgc-logo-round"
        color={style.logo}
        style={{
          backgroundColor: style.vignettes,
          borderColor: style.borderVignettes,
        }}
      />
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar
          style={{
            position: "relative",
            backgroundColor: 'black'
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
              Qr Code
            </Typography>
          </Toolbar>
        </AppBar>
        <div className="container">
          <div className="row justify-content-center tt">
            <img
              className="modal-qr"
              src={social.qr.link}
              alt="qr digiscards"
            />
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default ModalShare;
