import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";
import { mdiQrcode } from "@mdi/js";
import Icon from "@mdi/react";

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
              Qr Code
            </Typography>
          </Toolbar>
        </AppBar>
        <div className="container">
          <div className="row justify-content-center tt">
            <img
              className="dgc-modal-qr"
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
