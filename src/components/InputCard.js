import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import CircularProgress from "@material-ui/core/CircularProgress";

import web3 from "../web3";
import bannerContract from "../banner";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    maxWidth: "50%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const InputCard = ({ isLoading, setIsLoading }) => {
  const classes = useStyles();

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [status, setStatus] = useState("Ready...");

  const onSubmit = async (event) => {
    event.preventDefault();

    setIsLoading(true);
    setError("");

    try {
      const accounts = await web3.eth.getAccounts();

      setStatus(
        "Thanks for submitting your message! Please wait approx 30 seconds."
      );

      await bannerContract.methods.submitBanner(message).send({
        from: accounts[0],
        value: web3.utils.toWei("0.0012", "ether"),
      });

      setStatus(
        "Transaction complete! Please refresh the page to see your message on the banner."
      );
    } catch (err) {
      setError(err.message);
    }

    setIsLoading(false);
  };

  if (isLoading) {
    return (
        <Card variant="outlined" raised={true} className={classes.root}>
        {" "}
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          Sending transaction, please wait...
        </Typography>{" "}
        <CircularProgress />
      </Card>
    );
  }

  return (
    <Card variant="outlined" raised={true} className={classes.root}>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          Enter your message (please be nice, blockchain is immutable 😂 ):
        </Typography>
        <TextField
          label="Message"
          variant="outlined"
          data-testid="message-input"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          style={{marginTop:"20px"}}
        />
      </CardContent>
      <CardActions>
        <Button
          size="small"
          color="primary"
          variant="outlined"
          onClick={onSubmit}
        >
          Send to contract
        </Button>
      </CardActions>
    </Card>
  );
};

export default InputCard;
