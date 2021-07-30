import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import test from './images/rotating_card_thumb.jpg'
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';
import Box from '@material-ui/core/Box';
import s1chemistry from './s1chemistry'
import {RiEmotionHappyLine, RiEmotionHappyFill, RiEmotionUnhappyFill, RiEmotionUnhappyLine} from 'react-icons/ri'


const useStyles = makeStyles((theme) => ({
  root: {
    height: 500,
    width: 700,
    display: "flex",
    flexDirection: "column",
  },
  top: {
    flex: 1,
    background: '#A6C0CD',
    display: 'flex',
    alignItems: 'center'
  },
  action: {
    flex: 2,
  },
  question: {
    fontFamily: 'Noto Sans SC',
    width: '100%'
  },
  answer: {
    fontFamily: 'Noto Sans SC',
  },
  button: {
    marginLeft: 'auto'
  }
}));

function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}

function MemoryCard() {
  const [showAnswer, setShowAnswer] = useState(false);
  const classes = useStyles();
  const inlineFormula = `\\mathrm{CO^{2+} + C \\rightarrow      2 C_0}`;
  const blockFormula = `\\int_0^\\infty x^2 dx`;

  const handleShowAnswer = (event) => {
    setShowAnswer(!showAnswer);
  };

  const [currentQuestion, setCurrentQuestion] = useState({})
  const [nextQuestionIndex, setNextQuestionIndex] = useState(0);
  const [randomSeq, setRandomSeq] = useState([...Array(s1chemistry.length).keys()]);
  const [hardCount, setHardCount] = useState(new Array(s1chemistry.length).fill(0));

  const handleNext = (event) => {
    if (nextQuestionIndex == 0){
      shuffleArray(randomSeq);
    }
    setCurrentQuestion(s1chemistry[randomSeq[nextQuestionIndex]]);
    setNextQuestionIndex((nextQuestionIndex + 1) % s1chemistry.length);
  }

  useEffect(() => {
    handleNext();
  }, []);

  return (
    <Grid container justifyContent="center" spacing={2}>
      <Card className={classes.root}>
        <CardContent className={classes.top}>
          <Typography align="center" variant="body1" component="h1" className={classes.question}>
          {currentQuestion['question']}
          </Typography>
        </CardContent>
        <CardActionArea className={classes.action} onClick={handleShowAnswer}>
          <CardContent>
            <Typography align="center" variant="body1" component="h1" className={classes.answer}>
            {currentQuestion['answer']}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="large" variant="contained" color="primary" className={classes.button} startIcon={<RiEmotionHappyFill/>} onClick={handleNext}>
            Next
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}

export default MemoryCard;
