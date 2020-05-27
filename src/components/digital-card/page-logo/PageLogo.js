import React from "react";
import useWebShare from "react-use-web-share";
import { bounceInDown, rollIn } from "react-animations";
import Icon from "@mdi/react";
import {
  mdiWhatsapp,
  mdiPhone,
  mdiWeb,
  mdiFacebook,
  mdiInstagram,
  mdiLinkedin,
  mdiYoutube,
  mdiTwitter,
  mdiWaze,
  mdiGooglePlus,
  mdiMapMarker,
  mdiGestureSwipeLeft,
} from "@mdi/js";
import TextLoop from "react-text-loop";
import Radium, { StyleRoot } from "radium";

import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import ModalQr from "./ModalQr";

const anim = {
  bounce: {
    animation: "x 2s",
    animationName: Radium.keyframes(bounceInDown, "bounce"),
  },
  rollIn: {
    animation: "x 2s",
    animationName: Radium.keyframes(rollIn, "rollIn"),
  },
};

const PageLogo = ({
  button,
  message,
  style,
  social,
  img,
  title,
  subtitles,
}) => {
  const { share } = useWebShare();
  return (
    <div style={{ backgroundColor: style.bg, minHeight: "100vh" }}>
      <div className="dgc-header text-center">
        <img
          className="dgc-bg"
          src={img.bg}
          alt="digiscard-bg"
          style={{
            height: "250px",
            width: "100%",
            borderBottomColor: style.borderBottomBg,
            borderBottomStyle: "solid",
            borderBottomLeftRadius: "15px",
            borderBottomRightRadius: "15px",
            backgroundColor: style.backgroundBg,
          }}
        />
      </div>

      <div style={{ position: "fixed", right: "2%", bottom: "50%" }}>
        <Icon
          path={mdiGestureSwipeLeft}
          title="Swipe"
          size={2}
          color={style.swipe}
          description="swipe"
          style={{ backgroundColor: style.bg }}
        />
      </div>
      <div className="container dgc-bg" style={{ backgroundColor: style.bg }}>
        <div className="text-center">
          <StyleRoot>
            <div style={anim.bounce}>
              <img
                src={img.logo}
                className="dgc-logo"
                alt="digiscards"
                style={{
                  width: "150px",
                  height: "150px",
                  borderColor: style.borderLogo,
                  backgroundColor: style.bgLogo,
                  borderRadius: style.borderFormLogo,
                }}
              />
            </div>
          </StyleRoot>
          <br />
          <h1 style={{ color: style.title }} className="dgc-societe">
            {title}
          </h1>
          <TextLoop className="dgc-activite">
            {subtitles.map((s, id) => (
              <p style={{ color: style.subtitles, marginTop:'3vh' }} key={id}>
                {s}
              </p>
            ))}
          </TextLoop>
          <div className="container titlex" style={{ marginTop: "6vh" }}>
            <Grid
              container
              direction="row"
              alignItems="center"
              justify="center"
              style={{
                paddingLeft: "10%",
                paddingRight: "10%",
                lineHeight: "80px",
              }}
            >
              {social.wa.visible && (
                <Grid item xs={social.wa.xs} md={1}>
                  <a href={social.wa.link}>
                    <Icon
                      path={mdiWhatsapp}
                      title="WhatsApp"
                      size={2}
                      className="dgc-logo-round"
                      color={style.logo}
                      style={{
                        backgroundColor: style.vignettes,
                        borderColor: style.borderVignettes,
                      }}
                    />
                  </a>
                </Grid>
              )}

              {social.tel.visible && (
                <Grid item xs={social.tel.xs} md={1}>
                  <a href={social.tel.link}>
                    <Icon
                      path={mdiPhone}
                      title="Phone"
                      size={2}
                      className="dgc-logo-round"
                      color={style.logo}
                      style={{
                        backgroundColor: style.vignettes,
                        borderColor: style.borderVignettes,
                      }}
                    />
                  </a>
                </Grid>
              )}

              {social.web.visible && (
                <Grid item xs={social.web.xs} md={1}>
                  <a href={social.web.link}>
                    <Icon
                      path={mdiWeb}
                      title="Website"
                      size={2}
                      className="dgc-logo-round"
                      color={style.logo}
                      style={{
                        backgroundColor: style.vignettes,
                        borderColor: style.borderVignettes,
                      }}
                    />
                  </a>
                </Grid>
              )}

              {social.googleplus.visible && (
                <Grid item xs={social.googleplus.xs} md={1}>
                  <a href={social.googleplus.link}>
                    <Icon
                      path={mdiGooglePlus}
                      title="Google +"
                      size={2}
                      className="dgc-logo-round"
                      color={style.logo}
                      style={{
                        backgroundColor: style.vignettes,
                        borderColor: style.borderVignettes,
                      }}
                    />
                  </a>
                </Grid>
              )}

              {social.fb.visible && (
                <Grid item xs={social.fb.xs} md={1}>
                  <a href={social.fb.link}>
                    <Icon
                      path={mdiFacebook}
                      title="Facebook"
                      size={2}
                      className="dgc-logo-round"
                      color={style.logo}
                      style={{
                        backgroundColor: style.vignettes,
                        borderColor: style.borderVignettes,
                      }}
                    />
                  </a>
                </Grid>
              )}
              {social.insta.visible && (
                <Grid item xs={social.insta.xs} md={1}>
                  <a href={social.insta.link}>
                    <Icon
                      path={mdiInstagram}
                      title="Instagram"
                      size={2}
                      className="dgc-logo-round"
                      color={style.logo}
                      style={{
                        backgroundColor: style.vignettes,
                        borderColor: style.borderVignettes,
                      }}
                    />
                  </a>
                </Grid>
              )}
              {social.twitter.visible && (
                <Grid item xs={social.twitter.xs} md={1}>
                  <a href={social.twitter.link}>
                    <Icon
                      path={mdiTwitter}
                      title="Twitter"
                      size={2}
                      className="dgc-logo-round"
                      color={style.logo}
                      style={{
                        backgroundColor: style.vignettes,
                        borderColor: style.borderVignettes,
                      }}
                    />
                  </a>
                </Grid>
              )}
              {social.linkedin.visible && (
                <Grid item xs={social.linkedin.xs} md={1}>
                  <a href={social.linkedin.link}>
                    <Icon
                      path={mdiLinkedin}
                      title="Linkedin"
                      size={2}
                      className="dgc-logo-round"
                      color={style.logo}
                      style={{
                        backgroundColor: style.vignettes,
                        borderColor: style.borderVignettes,
                      }}
                    />
                  </a>
                </Grid>
              )}
              {social.youtube.visible && (
                <Grid item xs={social.youtube.xs} md={1}>
                  <a href={social.youtube.link}>
                    <Icon
                      path={mdiYoutube}
                      title="Youtube"
                      size={2}
                      className="dgc-logo-round"
                      color={style.logo}
                      style={{
                        backgroundColor: style.vignettes,
                        borderColor: style.borderVignettes,
                      }}
                    />
                  </a>
                </Grid>
              )}
              {social.map.visible && (
                <Grid item xs={social.map.xs} md={1}>
                  <a href={social.map.link}>
                    <Icon
                      path={mdiMapMarker}
                      title="Google Map"
                      size={2}
                      className="dgc-logo-round"
                      color={style.logo}
                      style={{
                        backgroundColor: style.vignettes,
                        borderColor: style.borderVignettes,
                      }}
                    />
                  </a>
                </Grid>
              )}
              {social.waze.visible && (
                <Grid item xs={social.waze.xs} md={1}>
                  <a href={social.waze.link}>
                    <Icon
                      path={mdiWaze}
                      title="Waze"
                      size={2}
                      className="dgc-logo-round"
                      color={style.logo}
                      style={{
                        backgroundColor: style.vignettes,
                        borderColor: style.borderVignettes,
                      }}
                    />
                  </a>
                </Grid>
              )}

              {social.qr.visible && (
                <Grid item xs={social.qr.xs} md={1}>
                  <ModalQr style={style} social={social} />
                </Grid>
              )}
            </Grid>
          </div>
          <div
            className="dgc-sharex"
            style={{ paddingTop: "6vh", paddingBottom: "3vh" }}
          >
            <Button
              onClick={() =>
                share({
                  title: "The Cleaners",
                  text: message,
                })
              }
              style={{ borderColor: style.btn, color: style.btn }}
              variant="outlined"
              color="primary"
            >
              {button}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageLogo;
