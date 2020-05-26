import React from 'react';
import { useTranslation } from 'react-i18next'
import flagfr from '../../../assets/images/flags/flag-fr.png';
import flagen from '../../../assets/images/flags/flag-en.png';
import flaghe from '../../../assets/images/flags/flag-he.png';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { ListItem, Menu, Button } from '@material-ui/core';


const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
    backgroundColor: 'white',
    width: '150px'
  },
})(props => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));


const useStyles = makeStyles(theme => ({
  div: {
    backgroundColor: '',
    '&:hover': {
      backgroundColor: "red !im",
      cursor: "pointer"
   },
  }
}));


const LocaleSwitcher = ({ t, lang }) => {
    const { i18n } = useTranslation()
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);   

    const handleClick = event => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };

    const changeLanguage = (lang) => {
      i18n.changeLanguage(lang);
      handleClose();
    }
   
    return (
      <div>
      <Button
        aria-controls="customized-menu"
        aria-haspopup="true"
        variant="contained"
        color="primary"
        style={{backgroundColor:'transparent', boxShadow:'none'}}
        onClick={handleClick}
      >
        { i18n.language === 'en' && (
            <img src={flagen} alt="flagen" width="25px" />
          )}
          
        { i18n.language === 'fr' && (
            <img src={flagfr} alt="flagfr" width="25px" />
        )}
        { i18n.language === 'he' && (
            <img src={flaghe} alt="flaghe" width="25px" />
        )}
       
      </Button>
      <StyledMenu
        id="customized-menu"
        style={{float:'center', textAlign: 'center'}}
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <div className={classes.div}>
          <ListItem>
          <div onClick={() => changeLanguage('en')} >
              <img src={flagen} alt="flagen" width="30px" />
                English
            </div>
          </ListItem>
          <ListItem>
          <div onClick={() => changeLanguage('fr')} >
              <img src={flagfr} alt="flagfr" width="30px" />
                Français
            </div>
          </ListItem>
          <ListItem>
          <div onClick={() => changeLanguage('he')} >
              <img src={flaghe} alt="flaghe" width="30px" />
              עברית
            </div>
          </ListItem>
        </div>
        </StyledMenu>  
      </div> 
      )
};
export default LocaleSwitcher;
