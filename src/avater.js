import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { green } from '@material-ui/core/colors';
import CheckIcon from '@material-ui/icons/Check';
const useStyles = makeStyles((theme) =>
  createStyles({
    orange: {
      color: theme.palette.getContrastText(green[500]),
          backgroundColor: green[500],
      position: "absolute",
      right:"3%",
      top:"2%"
      },
      innerIcon: {
          color:"white"
      },

 
    
  }),
);

export default function LetterAvatars() {
    const classes = useStyles();

    return (

        <Avatar className={classes.orange}><CheckIcon className={classes.innerIcon}/></Avatar>
    )
}