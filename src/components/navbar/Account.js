import React from "react";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import IconButton from "@material-ui/core/IconButton";
import AccountCircle from "@material-ui/icons/AccountCircle";

import { useDispatch, useSelector } from "react-redux";
import { toggleLogin, signOut } from "../../redux/actions/auth.action";

const Account = () => {
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleMenu}
        color="inherit"
      >
        <AccountCircle style={{ fontSize: "30px" }} />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={open}
        onClose={handleClose}
      >
        {isAuthenticated ? (
          <div onClick={() => setAnchorEl(null)}>
            <MenuItem onClick={() => dispatch(signOut())}>Log Out</MenuItem>
          </div>
        ) : (
          <div>
            <div onClick={() => setAnchorEl(null)}>
              <MenuItem onClick={() => dispatch(toggleLogin("signin"))}>
                Login
              </MenuItem>
            </div>
            <div onClick={() => setAnchorEl(null)}>
              <MenuItem onClick={() => dispatch(toggleLogin("signup"))}>
                Sign Up
              </MenuItem>
            </div>
          </div>
        )}
      </Menu>
    </div>
  );
};

export default Account;
