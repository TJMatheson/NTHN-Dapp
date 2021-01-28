import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';



const useStyles = makeStyles({
    root: {
      minWidth: 275,
      maxWidth: '70%',
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center"
    
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });
  

const InputCard = () => {
    const classes = useStyles();

    return (
        <Card  variant="outlined" raised={true} className={classes.root}>
        <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            Enter your message (please be nice, blockchain is immutable):
          </Typography>
          <TextField  label="Message" variant="outlined" data-testid="message-input" />

        </CardContent>
        <CardActions>
          <Button size="small" color="primary" variant="outlined">Send to contract</Button>
        </CardActions>
      </Card>
    )
}

export default InputCard
