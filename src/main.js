import AppBar from '@material-ui/core/AppBar';
import React from 'react'
import {NavLink, BrowserRouter as Router} from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import{Hidden , List,ListItem,ListItemText,Toolbar,Typography,Paper  } from '@material-ui/core';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles, useTheme, Theme, createStyles } from '@material-ui/core/styles';
import Content from './mainContent'
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';
import {grey,yellow} from '@material-ui/core/colors';




const drawerWidth = 350;

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
          display: 'flex',
          [theme.breakpoints.down('sm')]: {
              display: 'block',
      
          }
    },
      drawer: {
        
      [theme.breakpoints.up('sm')]: {
        width: drawerWidth,
        flexShrink: 0,
        
      },
    },
    appBar: {
      [theme.breakpoints.up('sm')]: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        },
    },
    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up('md')]: {
        display: 'none',
        },
      
        [theme.breakpoints.down('sm')]: {
        marginLeft:10
        
      }
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth,
        backgroundColor:grey[800],
    },
      content: {
        
      flexGrow: 1,
      padding: theme.spacing(3),
      },
      navlink:{
          textDecoration: "none",
          color: "white",
          padding: "2% 0% 2% 2%",
          fontSize:"1rem"
      },
       icon:{
       
        color:"white",
         marginLeft:"50%"
         
      },
      logo: {
          textAlign:"center",
          padding: "10%",
          color:yellow[500]
      },
      navlist:{
           marginTop:"8%"
      },

      view: {
          display:"flex",
          margin:"20% 0",
          backgroundColor: grey[800],
          padding:"5% 10%"
      },

      viewIcon: {
          color: "white",
          fontSize: 60,
         transform: "rotate(180deg)"
      },

      bullet: {
     display: 'inline-block',
     margin: '0 2px',
     transform: 'scale(0.8)',
     color:yellow[500]
      },
      
     bullet1: {
     display: 'inline-block',
     margin: '0 2px',
     transform: 'scale(1.5)',
     color:yellow[500]
  },
      viewParagraph: {
          color:"white"
      }

  }),
);



export let Main = (props)=> {


    const { window } = props;
    const classes = useStyles();
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const dot = <span className={classes.bullet}>•</span>;
    const dot1 = <span className={classes.bullet1}>•</span>;
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (

        <div>
            
            <div>
                <Typography className={classes.logo}>
                LOGO
                </Typography>
            </div>
            <Divider />

            <List  className={classes.navlist}>
                 <Router>
        <ListItem button>
                    
                        <NavLink to="/trials&pricing" exact={true} className={classes.navlink}>Trails & Pricing</NavLink>
                        <ArrowForwardIcon className={classes.icon}/>
                    
          
        </ListItem>
     
        
                <ListItem button>
                    
                     <NavLink to="/payment" className={classes.navlink}>Payment Method</NavLink>
                    
       
                </ListItem>
                
                <ListItem>
                   {dot}{dot}{dot1}{dot1}{dot1}{dot}{dot}
                </ListItem>
       
        
                <ListItem button>
                   
                         <NavLink to="/getstarted" className={classes.navlink}>Get Started</NavLink>
                 
         
                    </ListItem>
             </Router>
            </List>
           
           
                <div className={classes.view}>
                    <FormatQuoteIcon className={classes.viewIcon} />
                    <Typography className={classes.viewParagraph} >
                        
                        Success is not final;failure is <br />
                        not fetal:it is the courage to <br />
                        continue that counts.<br />
                        
                        -Wirslom Churchill
                    </Typography>
                </div>
           
            
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <div className={classes.root}>
            <CssBaseline />

            <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        className={classes.menuButton}
                    >
                        <MenuIcon />
                    </IconButton>

            
            <nav className={classes.drawer} aria-label="mailbox folders">
              
                <Hidden mdUp implementation="css">
                    <Drawer
                        container={container}
                        variant="temporary"
                        anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
                <Hidden smDown implementation="css">
                    <Drawer
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        variant="permanent"
                        open
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
            </nav>

            <main className={classes.content}>
              <Content />
            </main>
        </div>
    )
}
 
