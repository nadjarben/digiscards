import React from 'react';
import { Menu, Divider, IconButton } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ModalAdd from './ModalAdd'
import GetDigital from './GetDigital';
import PrintQr from './PrintQr'

const OptionMenu = ({ style, qrPath }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const options = [
    <ModalAdd style={style} />,
    <PrintQr style={style} qrPath={qrPath} />,
    <GetDigital style={style} />
  ];

  return (
    <div>
      <IconButton
        aria-label="more"
        aria-controls="long-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon style={{color: style.dotColor}} />
      </IconButton>
      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            width: 'auto',
          },
        }}
      >
        {options.map((option, id) => (
          <div key={id} onClick={handleClose}>
            {option}
          <Divider />
          </div>
        ))}
      </Menu>
    </div>
  );
}

export default OptionMenu