import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { blue, indigo, blueGrey } from '@material-ui/core/colors';

const useStyles = makeStyles({
  root: {
    minWidth: 260,
    minheight: 250,
    backgroundColor: blueGrey[50],
    
  
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
      transform: 'scale(0.8)',
    color:"blue"
  },
  title: {
    fontSize: 14,
    color: blue[500],
    fontSize:"1.2rem",
    fontWeight:900
  },
  pos: {
    marginBottom: 12,
  },
  cardBody: {
    fontSize:"0.7rem"
  },
  cardSubtitle: {
    fontSize: "0.7rem",
    margin:"1% 0% 5% 0%"
  }
});

export default function TrialCard() {
  const classes = useStyles();
  const dot = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root}>
        
      <CardContent>
         
        <Typography className={classes.title}  gutterBottom>
          Basic
        </Typography>

        <Typography variant="h5" component="div" className={classes.cardSubtitle}>
        30 days trials on our premium
          <br />
         App feature and teatures         
        </Typography>
        
              
        <Typography variant="body2" component="div">
          INCLUDES{dot}{dot}{dot}{dot}{dot}{dot}{dot}{dot}{dot}{dot}{dot}{dot}{dot}{dot} <br/>
          <span className={classes.cardBody}>
                  -25 Users
                   <br />
                  -All feature
                  <br />
                  -unlimited commitees
                  <br />
                  -unlimited roles creation
          </span>
                   
        </Typography>
      </CardContent>
     
    </Card>
  );
}