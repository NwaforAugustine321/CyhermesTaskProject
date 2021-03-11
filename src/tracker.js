import React from 'react';
import { withStyles, makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      width:'100%', 
    },
    margin: {
      height: theme.spacing(3),
    },

  range: {
    display:"flex",
    justifyContent: "space-between"
  }
  }),
);



function ValueLabelComponent(props) {
  const { children, open, value } = props;

  return (
    <Tooltip open={open} enterTouchDelay={0} placement="top" title={value}>
      {children}
    </Tooltip>
  );
}



const PrettoSlider = withStyles({
  root: {
    color: 'blue',
    height: 8,
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: '#fff',
    border: '2px solid currentColor',
    marginTop: -8,
    marginLeft: -12,
    '&:focus, &:hover, &$active': {
      boxShadow: 'inherit',
    },
  },
  active: {},
  valueLabel: {
    left: 'calc(-50% + 4px)',
  },
  track: {
    height: 8,
    borderRadius: 4,
  },

  rail: {
    height: 8,
    borderRadius: 4,
  },

})(Slider);



export default function TrackerSlider() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      
      <Typography component="div" className={classes.range} >
        <span>0</span>
        <span>100</span>
      </Typography>
    
      <PrettoSlider valueLabelDisplay="auto" aria-label="pretto slider" defaultValue={20} aria-valuetext="e" />
    </div>
  );
}