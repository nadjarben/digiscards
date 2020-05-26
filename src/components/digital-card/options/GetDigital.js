import React from "react";
import { useTranslation } from 'react-i18next'
import { Link } from "react-router-dom"
import MenuItem from "@material-ui/core/MenuItem";
import DigiLogo from "../../../assets/images/digital-card/logo3.png";

const GetDigital = () => {
  const { t } = useTranslation("common");
  return (
    <Link to="/">
        <MenuItem style={{ color: "red" }}>
          <img src={DigiLogo} width="50px" alt="digital card" />
          {t('Get your Digital Card')}
        </MenuItem>
    </Link>
  );
};

export default GetDigital;
