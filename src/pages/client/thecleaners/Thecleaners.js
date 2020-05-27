import React from 'react';
import { DOMAIN } from "../../../utils/environment";
import { Helmet } from "react-helmet";
import { useTranslation } from 'react-i18next'
import SwipeableViews from "react-swipeable-views";

import PageLogo from "../../../components/digital-card/page-logo/PageLogo";
import PagePicture from "../../../components/digital-card/page-picture/PagePicture"
import PageDescription from "../../../components/digital-card/page-description/PageDescription";
import LanguageSwitcher from "../../../components/digital-card/page-logo/LanguageSwitcher";
import OptionMenu from "../../../components/digital-card/options/OptionMenu";

import ListItem from "@material-ui/core/ListItem";

//import lang
import flagen from "../../../assets/images/flags/flag-en.png";
import flagfr from "../../../assets/images/flags/flag-fr.png";
import flaghe from "../../../assets/images/flags/flag-he.png";

//import qr
import qr from "../../../assets/client/thecleaners/qr-code.png";
//page 1 imports images
import logo from "../../../assets/client/thecleaners/logo.png";
import bg from "../../../assets/client/thecleaners/bg.jpg";

//page3 imports
import img2 from "../../../assets/client/thecleaners/img2.jpg";
import img3 from "../../../assets/client/thecleaners/img3.jpg";
import img4 from "../../../assets/client/thecleaners/img7.jpg";
import img5 from "../../../assets/client/thecleaners/img5.jpg";

import "./Thecleaners.scss";

const TheCleaners = () => {
  const { t, i18n } = useTranslation("thecleaners");
  const name = "thecleaners";
  const title = "THE CLEANERS";
  const number = {
    tel: "972774850937",
    wa: "972586305531",
    domain: `https://digiscards.com/${name}`,
  };

  const button = t("לשתף");
  const message = " אתה מחפש מכבסה מעולה ? || ";
  const qrPath = `${DOMAIN}/${name}/qr-code.png`;


  const subtitles = [
    t("Laundry"),
    t("Dry Cleaning"),
    t("Ironing"),
    t("Kilo washing"),
  ];
  const lang = {
    multilang: true,
    default: "he",
  };
  React.useEffect(() => {
    i18n.changeLanguage(lang.default);
  }, [i18n, lang.default]);
  const flag = () => {
    if (lang.multilang) {
      return (
        <div>
          <ListItem>
            <div onClick={() => i18n.changeLanguage("en")}>
              <img src={flagen} alt="flagen" width="30px" />
              English
            </div>
          </ListItem>
          <ListItem>
            <div onClick={() => i18n.changeLanguage("he")}>
              <img src={flaghe} alt="flaghe" width="30px" />
              עברית
            </div>
          </ListItem>
          <ListItem>
            <div onClick={() => i18n.changeLanguage("fr")}>
              <img src={flagfr} alt="flagfr" width="30px" />
              Français
            </div>
          </ListItem>
        </div>
      );
    }
  };

  //images page1
  const img = {
    logo: logo,
    bg: bg,
  };

  const style = {
    bg: "#033146",
    backgroundBg: "#033146",
    borderBottomBg: "white",
    bgLogo: "#033146",
    borderLogo: "white",
    borderFormLogo: "100%",
    title: "white",
    subtitles: "white",
    swipe: "white",
    vignettes: "white",
    textVignettes: "white",
    borderVignettes: "white",
    logo: "#033146",
    btn: "white",
    modalText: "white",
    bgImage: "#033146",
    colorImage: "white",
    dotColor: "black",
  };
  //vignettes
  const social = {
    wa: {
      visible: true,
      xs: 3,
      link: `https://api.whatsapp.com/send?phone=${number.wa}`,
    },
    tel: {
      visible: true,
      xs: 3,
      link: `tel:${number.tel}`,
    },
    web: {
      visible: true,
      xs: 3,
      link: "https://www.thecleanersisrael.com/",
    },
    googleplus: {
      visible: false,
      xs: 3,
      link: "",
    },
    fb: {
      visible: true,
      xs: 3,
      linkTest: "fb://page/1848466188762048",
      link: "https://www.facebook.com/thecleaners.jp/",
    },
    insta: {
      visible: false,
      xs: 3,
      link: "",
    },
    twitter: {
      visible: false,
      xs: 3,
      link: "",
    },
    linkedin: {
      visible: false,
      xs: 3,
      link: "",
    },
    youtube: {
      visible: false,
      xs: 3,
      link: "",
    },
    map: {
      visible: true,
      xs: 3,
      link:
        "https://www.google.com/maps/place/Pressing+The+Cleaners/@31.7885499,34.6422172,19.18z/data=!4m12!1m6!3m5!1s0x1502a3122478a447:0xa8bfdbf2a15e8b43!2sPressing+The+Cleaners!8m2!3d31.7889614!4d34.6426781!3m4!1s0x1502a3122478a447:0xa8bfdbf2a15e8b43!8m2!3d31.7889614!4d34.6426781",
    },
    waze: {
      visible: false,
      xs: 3,
      link: "",
    },
    qr: {
      visible: true,
      xs: 3,
      link: qr,
    },
  };

  const pageTwo = {
    cat1: true,
    cat2: true,
  };
  const pageThree = {
    img1: img4,
    imgs: [img3, img2, img5],
  };

  const [allImages, setAllImages] = React.useState(false);
  const [expanded, setExpanded] = React.useState(false);
  const [expanded2, setExpanded2] = React.useState(false);
  const reset = () => {
    setAllImages(false);
    setExpanded(false);
    setExpanded2(false);
  };

  return (
    <div style={{ backgroundColor: style.bg, minHeight: "100vh" }}>
      <Helmet>
        <title>
          {title} | {t("meta-title")}{" "}
        </title>
        <meta name="description" content={t("meta-descri")} />
        <meta property="og:title" content={`${title} | ${t("meta-title")}`} />
        <meta property="og:description" content={`${t("meta-descri")}`} />
        <meta property="og:type" content="webiste" />
        <meta property="og:url" content={`${DOMAIN}`} />
        <meta property="og:site_name" content={`${number.domain}`} />
        <meta
          property="og:image"
          content={`${DOMAIN}/${name}/bg.jpg`}
        />
        <meta
          property="og:image:secure_url"
          content={`${DOMAIN}/${name}/bg.jpg`}
        />
        <meta property="og:image:type" content="image/jpg" />
        <meta name="theme-color" content="#033146" />
        <meta name="msapplication-TileColor" content="#033146" />
        <link
          rel="shortcut icon"
          href={`${DOMAIN}/${name}/favicon-32x32.png`}
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${DOMAIN}/${name}/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href={`${DOMAIN}/${name}/favicon-32x32.png`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href={`${DOMAIN}/${name}/favicon-16x16.png`}
        />
        <link
          rel="manifest"
          href={`${DOMAIN}/${name}/manifest.json`}
        />
      </Helmet>

      <SwipeableViews
        onSwitching={reset}
        enableMouseEvents
      >
        <div style={Object.assign({})}>
          <div style={{ position: "absolute" }}>
            <OptionMenu style={style} social={social} qrPath={qrPath} />
          </div>
          <div className="dgc-lang">
            {lang.multilang && <LanguageSwitcher lang={lang} flag={flag} />}
          </div>
          <PageLogo
            button={button}
            message={message}
            title={title}
            subtitles={subtitles}
            style={style}
            social={social}
            img={img}
          />
        </div>

        <div style={Object.assign({})}>
          <PageDescription
            style={style}
            pageTwo={pageTwo}
            expanded={expanded}
            setExpanded={setExpanded}
            expanded2={expanded2}
            setExpanded2={setExpanded2}
            //remplir text p2
            title={
              <h2
                className="text-center"
                style={{
                  fontSize: "18px",
                  fontWeight: "bold",
                  paddingTop: "8vh",
                  color: style.bg,
                }}
              >
                {t("Laundry, pressing, מכבסה")}
              </h2>
            }
            title1={t("HOURS")}
            title2={t("SERVICES")}
            descri={
              <div>
                <p>
                  {t(
                    "Located in Ashdod, Laundry The Cleaners offers its services in the management of your clothes and linen"
                  )}
                </p>
                <p>
                  {t(
                    "We care about the satisfaction of our customers and offer them washing and ironing services adapted to their needs"
                  )}
                </p>
                <p>
                  {t(
                    "You no longer have to worry about your laundry, we take care of it for you and at unbeatable prices"
                  )}
                </p>
              </div>
            }
            text={
              <div style={{}}>
                <div style={{ fontWeight: "bold" }}>
                  {t("Sunday - Thursday")}
                </div>
                <div>{t("8h30 - 19h")}</div>
                <div style={{ fontWeight: "bold" }}>{t("Friday")}</div>
                <div>{t("8h30 - 13h30")}</div>
              </div>
            }
            text2={
              <div style={{}}>
                <div style={{ fontWeight: "bold" }}>{t("- Dry cleaning")}</div>
                <ul className="leaders">
                  <li>
                    <span>₪50</span>
                    <span>{t("Suit")}</span>
                  </li>
                  <li>
                    <span>₪15</span>
                    <span>{t("Shirt")}</span>
                  </li>
                  <li>
                    <span>₪25</span>
                    <span>{t("Pant")}</span>
                  </li>
                  <li>
                    <span>₪70</span>
                    <span>{t("Blanket")}</span>
                  </li>
                </ul>
                <div style={{ fontWeight: "bold" }}>{t("- Ironing")}</div>
                <p>₪6/{t("piece")}</p>
                <div style={{ fontWeight: "bold" }}>{t("- Kilo washing")}</div>
                <p>ק"ג/₪10</p>
              </div>
            }
          />
        </div>

        <div style={Object.assign({})}>
          <PagePicture
            style={style}
            pageThree={pageThree}
            allImages={allImages}
            setAllImages={setAllImages}
          />
        </div>
      </SwipeableViews>
    </div>
  );
};
TheCleaners.getInitialProps = async () => ({
  namespacesRequired: ["thecleaners", "common"],
});

export default TheCleaners;
