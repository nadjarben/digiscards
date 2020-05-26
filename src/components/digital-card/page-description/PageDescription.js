import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles(theme => ({
    root: {
      width: '90%',
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightBold,
    },
  }));


const PageDescription = ({ pageTwo, expanded, expanded2, setExpanded, setExpanded2, text, text2, descri, title, title1, title2 }) => {
    const classes = useStyles();
    return (
        <div style={{backgroundColor: 'white', minHeight:'100vh', color:'black'}}>
            <div className="container">
            {title}
            <div className="container text-center" style={{paddingTop:'3vh'}}>
                <div className="dgc-presentation-text">{descri}</div>
            <div className="container dgc-accordion text-left">
                <div className="row justify-content-center">
                <div className={classes.root}>
    {pageTwo.cat1 &&
      <ExpansionPanel expanded={expanded} onClick={()=> setExpanded(!expanded)}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>{title1}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
        <div style={{lineHeight:'5vh'}}>
            {text}
          </div>
        </ExpansionPanelDetails>
      </ExpansionPanel>
        }
    {pageTwo.cat2 &&
      <ExpansionPanel expanded={expanded2} onClick={()=> setExpanded2(!expanded2)}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>{title2}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <div style={{lineHeight:'5vh', width:'100%'}}>
            <div>
              {text2}
            </div>
          </div>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    }
    </div>
                </div>
            </div>
            </div>
            </div>
            <br/>
        <br/>
            </div>
    )
}

export default PageDescription;
