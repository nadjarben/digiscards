import React from 'react'
import MenuItem from "@material-ui/core/MenuItem";
import { useTranslation } from 'react-i18next'
import Icon from "@mdi/react";
import { mdiContentSaveOutline } from '@mdi/js';


const PrintQr = ({ style, qrPath }) => {
  const { t } = useTranslation("common");
    return (
        <a href={qrPath} download className="dgc-share-logo">
        <MenuItem>
      <Icon
        path={mdiContentSaveOutline}
        title="Save your Qr code"
        size={2}
        className="dgc-logo-round"
        color="black"
        style={{
          borderColor: "transparent",
        }}
      />
      {t('Save your Qr')}</MenuItem>
      </a>
    )
}

export default PrintQr;
