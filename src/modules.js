import React from 'react'
import { Grid,Typography } from '@material-ui/core'
import DialpadIcon from '@material-ui/icons/Dialpad';
import DomainIcon from '@material-ui/icons/Domain';
import BarChartIcon from '@material-ui/icons/BarChart';
import BlurOnIcon from '@material-ui/icons/BlurOn';
import GraphicEqIcon from '@material-ui/icons/GraphicEq';
import VerticalSplitIcon from '@material-ui/icons/VerticalSplit';
import PieChartIcon from '@material-ui/icons/PieChart';
import BubbleChartIcon from '@material-ui/icons/BubbleChart';
import { makeStyles, useTheme, Theme, createStyles } from '@material-ui/core/styles'
import {yellow} from '@material-ui/core/colors';
let useStyle = makeStyles((theme) => (
     {
       
        root:{
            padding:"5% 0%"
     },
     icons: {
         marginRight:10
     },
     descriptions: {
         textAlign:"left"
     },
     grid: {
         display:"flex",
         height: 90,
         padding:"4% 0% 0% 3%",
         "&:hover": {
             backgroundColor:yellow[200]
         }
     },

     underline: {
         display:"flex"
        },
     
        text: {
            fontSize: "0.8rem",
            margin:"0% 1%"
        },
        
     line: {
         display:"inline-block",
         width:"10%"
        },
     
     line1: {
         display:"inline-block",
         width: "70%",
         [theme.breakpoints.down('xs')]: {
        width: "50%",
        },
     }
      }
 ))


let Modules = () => {
let classes = useStyle()
    return (

        <React.Fragment>
             <Grid  item lg={12}  md={12}  sm={12}  xs={12} classsName={classes.underline}>
                <hr className={classes.line} />
                <span className={classes.text}>ALL MODULES</span>
                 <hr className={classes.line1}/>
             </Grid>
            <Grid item lg={4} md={6} sm={6} xs={12} className={classes.grid}>
                    <DomainIcon className={classes.icons}/>
                <Typography >
                    Govcmance
                     <br />
                    portal
                </Typography> 
            </Grid>
                
            <Grid item lg={4} md={6} sm={6} xs={12} className={classes.grid}>
                <PieChartIcon  className={classes.icons}/>
                 <Typography>

                        Corperator
                         <br/>
                        Uniform
                    
                </Typography> 
            </Grid>

            <Grid item lg={4}  md={6} sm={6} xs={12} className={classes.grid}>
                 <BubbleChartIcon className={classes.icons} />
                 <Typography>
                     Attendance
                     <br />
                    Register
                </Typography> 
            </Grid>

            <Grid item lg={4} md={6} sm={6} xs={12} className={classes.grid}>
                  <BarChartIcon  className={classes.icons}/>
                 <Typography>
                   Dispute
                     <br />
                    Portifolio
                </Typography> 
            </Grid>

            <Grid item lg={4} md={6} sm={6} xs={12} className={classes.grid}>
                 <BlurOnIcon  className={classes.icons}/>
                 <Typography>
                    Contract
                     <br />
                    Domain
                </Typography> 
            </Grid>
            <Grid item lg={4} md={6} sm={6} xs={12} className={classes.grid}>
                 <GraphicEqIcon  className={classes.icons}/>
                 <Typography>
                    Mineto
                     <br />
                    Bock
                </Typography> 
            </Grid>
            <Grid item lg={4} md={6} sm={6} xs={12} className={classes.grid}>
                <VerticalSplitIcon  className={classes.icons}/>
                 <Typography>
                     Teasure
                     <br />
                    Tool
                </Typography> 
            </Grid>
            

        </React.Fragment>
    
        
          
            
    )
          
    
}
    
export default Modules