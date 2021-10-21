import { makeStyles } from '@material-ui/core/styles';
import MemoryCard from './MemoryCard'
import React from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Slide from '@material-ui/core/Slide';
import s1chemistry from './s1chemistry'
import icon from './images/icon.png'
import Grid from '@material-ui/core/Grid';



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  button:{
    minWidth: "10%"
  }
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function App() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const [questions] = React.useState(s1chemistry)

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <AppBar position="static" color="primary" style={{ background: '#1d6365' }}>
        <Toolbar>
         <IconButton edge="start" color="inherit" aria-label="menu" disabled>
         <img src={icon} width="30px" alt=""/>
          </IconButton> 
          <Typography variant="h6" className={classes.title}>
            高一化学
          </Typography>
          <Button color="inherit" variant="outlined" className={classes.button} onClick={handleClickOpen}>需加强的知识点</Button>
        </Toolbar>
      </AppBar>
      <Box m={5} pt={3}>
        <MemoryCard questions={questions}/>
      </Box >
      <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
        <AppBar className={classes.appBar} position="static" color="primary" style={{ background: '#1d6365' }}>
          <Toolbar>
            <Typography variant="h6" className={classes.title}>需加强的知识点</Typography>
            <Button color="inherit" variant="outlined" className={classes.button} onClick={handleClose}>关闭</Button>
          </Toolbar>
        </AppBar>
        <List>
          {[...questions].sort((a,b)=>(b['hardCount']-a['hardCount'])).map((question) => (
            question['hardCount']>0?(
            <>
              <ListItem button>
              <ListItemText primary={question['question']} secondary={"忘记"+ question['hardCount'] +"次"} />
              <ListItemText primary={question['answer'].split('@').map(ee => (
              <Grid item xs={12} align="left">
                <Typography>
                  {ee}
                </Typography>
              </Grid>
            ))} />
              
              
              </ListItem>
              <Divider />
            </>
          ):<></>
          ))}
        </List>
      </Dialog>
    </>
  );
}

export default App;
