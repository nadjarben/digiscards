import React from "react";
import { useTranslation } from 'react-i18next'
import FadeIn from "react-fade-in";
import Lottie from "react-lottie";

import { useTheme } from '@material-ui/core/styles';
import { useMediaQuery, Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle, Slide } from '@material-ui/core';
import { emailContactForm } from "../../redux/actions/contact.action";

import * as doneData from "../../assets/animations/done.json";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function ModalContact({ dc }) {
  const { t } = useTranslation("homepage");
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const [open, setOpen] = React.useState(false);
  const [form, setForm] = React.useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    category: dc,
    error: false,
    success: false,
    sent: false,
  });
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: doneData.default,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setForm({
      ...form,
      sent: false,
      error: false,
      success: false,
      name: "",
      phone: "",
      email: "",
      message: "",
      category: "",
    });
  };

  const handleChange = (name) => (e) => {
    setForm({ ...form, [name]: e.target.value, error: false, success: false });
  };

  const { name, email, phone, category, message, sent } = form;

  const submitForm = (e) => {
    e.preventDefault();
    emailContactForm({
      name,
      email,
      phone,
      category,
      message,
    }).then(
      setForm({
        ...form,
        name: "",
        category: "",
        message: "",
        phone: "",
        sent: true,
      })
    );
  };

  return (
    <div>
      <button onClick={handleClickOpen}>{t("contact-us")}</button>
      <Dialog
        open={open}
        fullScreen={fullScreen}
        onClose={handleClose}
        TransitionComponent={Transition}
        aria-labelledby="form-dialog-title"
        BackdropProps={{
          style: {
            backgroundColor: '#1ec503',
            opacity: '0.2'
          }
        }}
      >
        <div style={{opacity: 'none'}}>
        <DialogTitle id="form-dialog-title">{t("contact-us")}</DialogTitle>
        <DialogContent>
          {!sent && (
            <div>
              <TextField
                margin="dense"
                label={t("Name")}
                type="name"
                name="name"
                fullWidth
                required
                onChange={handleChange("name")}
              />
              <TextField
                margin="dense"
                id="email"
                label="Email"
                type="email"
                fullWidth
                required
                onChange={handleChange("email")}
              />
              <TextField
                margin="dense"
                id="phone"
                label={t("Phone")}
                type="phone"
                fullWidth
                required
                onChange={handleChange("phone")}
              />
              <TextField
                margin="dense"
                id="message"
                label="Message"
                multiline
                rows="4"
                type="text"
                fullWidth
                onChange={handleChange("message")}
              />
              <DialogActions>
                <Button onClick={handleClose} color="primary">
                  {t("Close")}
                </Button>
                <Button variant="contained" onClick={submitForm} color="primary">
                  {t("Send")}
                </Button>
              </DialogActions>
            </div>
          )}
          {sent && (
            <div className="container text-center">
              <h3>
                {t("You will be contacted shortly for the procedure to follow")}
              </h3>
              <FadeIn>
                <div style={{ marginTop: "5vh" }}>
                  <Lottie options={defaultOptions} height={220} width={220} />
                </div>
              </FadeIn>
              <DialogActions>
                <Button onClick={handleClose} color="primary">
                  {t("Close")}
                </Button>
              </DialogActions>
            </div>
          )}
        </DialogContent>
        </div>
      </Dialog>
    </div>
  );
}

export default ModalContact;
