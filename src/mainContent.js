import React from 'react'
import {Container,Paper,Grid,Typography,Button} from '@material-ui/core'
import { makeStyles, useTheme, Theme, createStyles } from '@material-ui/core/styles';
import PremiumCard from './premiumCard'
import TrialCard from './trialCard'
import TrackerSlider from './tracker'
import Modules from './modules'
import {blue,amber} from '@material-ui/core/colors';
import LetterAvatars from './avater'

 let useStyle = makeStyles({
        root: {
            marginTop: "10vh"
        },
        
        grid:{
            height: 400,
            backgroundColor: "white",
            margin:"6% 0% 3% 0%"
        },

        header:{
            margin:"5% 0% 5% 0%"
     },
     capture:{
         color: "yellow",
         fontSize: "1.3rem",
         fontStyle:"italic"
     },
     maincapture: {
         fontWeight: 900,
         fontSize:"1.5rem"
     },
     vatcur: {
         color: blue[500],
         opacity: 0.5,
         fontSize:"0.7rem"
     },

     vatvalue: {
         color: blue[600],
         fontWeight: 600
     },
     title: {
         fontSize: "0.7rem",
         fontWeight:900
     },
     fontSize: {
         fontSize: "0.7rem",
         fontWeight:500
     },
     button1: {
         float:"right",
         backgroundColor: amber[500],
          "&:hover": {
             backgroundColor:amber[500]
         }
     },
     button2: {
         color:"pink"
     },
     
     trialCardPosition: {
         position:"relative",
         padding:"30% 5%"
     },
     bodyContent:{
       paddingTop:10
     }
     
      })


let Content = () => {

    let classes = useStyle()
    return (
        
        <div>
            
            <Container>
            
                <Grid container spacing={6}>
                    
                    
                    <Grid item lg={6} md={6} sm={12}>
                        <Typography className={classes.title}>
                           HEY,TERRY
                        </Typography>

                        <Typography>
                            Start your<span className={classes.capture}> 30 days</span> Trial
                        </Typography>

                        <Typography className={classes.fontsize}>
                           Select your preferes package below
                        </Typography>

                    </Grid>



                    <Grid item lg={6} md={6} sm={12}>
                        <Typography className={classes.vatcur}>
                        NGN
                        </Typography>
                        <Typography className={classes.vatvalue}>
                            1,999,999
                        </Typography>
                        <Typography className={classes.fontsize}>
                          Total (EXCLUDER VAT)
                        </Typography>
                     </Grid>
                </Grid>


                <Grid container spacing={6} className={classes.header}>
                    
                    
                    <Grid item lg={6} md={12} sm={12}>
                        <PremiumCard />
                         <Typography className={classes.bodyContent}>
                             Add more Users
                              <br />
                             NGN99,999 per user
                    
                        </Typography>
                    </Grid>



                    <Grid item lg={6} md={12} sm={12} className={classes.trialCardPosition}>
                    <LetterAvatars />
                    <TrialCard />
                    </Grid>

                </Grid>
                
                <TrackerSlider />
                   
                <Grid container className={classes.grid} spacing={6}>
                   
                     <Modules/>
 
                </Grid>



                <Grid container>
                    
                    
                     <Grid item lg={6} md={6} sm={12}>
                         <Button variant="text" className={classes.button2}>
                            Go back
                            </Button>
                     </Grid>

                    
                    
                    <Grid item lg={6} md={6} sm={12}>
                      <Button variant="contained" className={classes.button1}>
                       Continue
                      </Button>
                    </Grid>


                </Grid>
                
            </Container>
        </div>
    )
}


export default Content