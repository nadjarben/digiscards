import React from 'react'
import { DOMAIN, APP_NAME } from "../../utils/environment";
import { Helmet } from "react-helmet";

const Header = () => {
    return (
        <Helmet>
        <title>{APP_NAME} | Get your own digital card </title>
        <meta
          name="description"
          content="With the digital visit card you can group all the social informations about your company and share it easily to increase your online visibility, all in a modern application style"
        />
        <meta
          property="og:title"
          content={`${APP_NAME} | Get your own digital card`}
        />
        <meta
          property="og:description"
          content="With the digital visit card you can group all the social informations about your company and share it easily to increase your online visibility, all in a modern application style"
        />
        <meta property="og:type" content="webiste" />
        <meta property="og:url" content={`${DOMAIN}`} />
        <meta property="og:site_name" content={`${APP_NAME}`} />
        <meta
          property="og:image"
          content={`${DOMAIN}/static/images/index/og.jpg`}
        />
        <meta
          property="og:image:secure_url"
          content={`${DOMAIN}/app/og.jpg`}
        />
        <meta property="og:image:type" content="image/jpg" />

        <meta name="msapplication-TileColor" content="#1ec503" />
        <meta name="theme-color" content="#1ec503" />
        <link
          rel="manifest"
          href={`${DOMAIN}/app/manifest.json`}
        />
        <link
          rel="shortcut icon"
          href={`${DOMAIN}/app/favicon.ico`}
        />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#1ec503" />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href={`${DOMAIN}/app/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href={`${DOMAIN}/app/favicon-32x32.png`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href={`${DOMAIN}/app/favicon-16x16.png`}
        />
      </Helmet>
    )
}

export default Header;
