import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import {yellow} from '@material-ui/core/colors';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    marginTop:17
  },
  bullet: {
    display: 'inline-block',
    margin: '0% 1.5%',
    transform: 'scale(2)',
    color:"yellow"
    
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
    fontSize: "1.3rem",
    fontWeight:900
  },
  cardTitle: {
    color:yellow[500]
  }
 
});

export default function PremiumCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <React.Fragment>
      <Card className={classes.root}>
       
        <CardContent>
          
        <Typography className={classes.cardTitle}>
            Rarta Form
        </Typography>
          
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          NGN
        </Typography>
        <Typography variant="h5" component="h2">
                  5,999,999,99
         <br />
            <Typography variant="body2" component="p">
                per annuim 
            </Typography>    
        </Typography>
       
          <Typography variant="body2" component="div">
            
             <Typography className={classes.pos} color="textSecondary">
           Premium
            </Typography>
           100 Users{bull}All Modules
          
        </Typography>
      </CardContent>
      
    </Card>
   
    </React.Fragment>
  );
}