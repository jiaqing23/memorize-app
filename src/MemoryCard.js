import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import 'katex/dist/katex.min.css';
import {RiEmotionHappyFill, RiEmotionUnhappyFill} from 'react-icons/ri'

const useStyles = makeStyles((theme) => ({
  root: {
    height: 500,
    width: 700,
    display: "flex",
    flexDirection: "column",
  },
  top: {
    flex: 1,
    background: '#ddd8ab',
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
    marginLeft: 'auto',
    width: '50%'
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

function MemoryCard({questions}) {
  const [showAnswer, setShowAnswer] = useState(false);
  const classes = useStyles();

  const handleShowAnswer = (event) => {
    setShowAnswer(!showAnswer);
  };

  const [currentQuestion, setCurrentQuestion] = useState({'question':'', 'answer':''})
  const [nextQuestionIndex, setNextQuestionIndex] = useState(0);
  const [randomSeq] = useState([...Array(questions.length).keys()]);

  const handleNext = (event) => {
    setShowAnswer(false);
    if (nextQuestionIndex === 0) {
      shuffleArray(randomSeq);
    }
    setCurrentQuestion(questions[randomSeq[nextQuestionIndex]]);
    setNextQuestionIndex((nextQuestionIndex + 1) % questions.length);
  }

  const handleHard = (event) => {
    currentQuestion['hardCount'] += 1;
    handleNext(event);
  }

  useEffect(() => {
    handleNext();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Grid container justifyContent="center" spacing={2}>
      {/* {s1chemistry.map(ques => ( */}
          
<Card className={classes.root}>
        <CardContent className={classes.top}>
          <Grid container>
            {currentQuestion['question'].split('@').map(ee => (
              <Grid item xs={12}>
                <Typography align="center" variant="h6" component="h1" className={classes.question}>
                  {ee}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </CardContent>
        <CardActionArea className={classes.action} onClick={handleShowAnswer}>
          <CardContent>
            <Typography align="center" variant="body1" component="h1" className={classes.answer}>
              {showAnswer ? (currentQuestion['answer'].split('@').map(ee => (
              <Grid item xs={12}>
                <Typography align="center" variant="body1" component="h1" className={classes.question}>
                  {ee}
                </Typography>
              </Grid>
            ))) : ""}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button style={{ background: '#ff7b7b' }} size="large" variant="contained" color="primary" className={classes.button} startIcon={<RiEmotionUnhappyFill />} onClick={handleHard}>
            很不行
          </Button>
          <Button style={{ background: '#1c8d79' }} size="large" variant="contained" color="primary" className={classes.button} startIcon={<RiEmotionHappyFill />} onClick={handleNext}>
            简单
          </Button>
        </CardActions>
      </Card>
      
    </Grid>
  );
}

export default MemoryCard;
