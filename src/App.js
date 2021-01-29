import React, { useEffect, useState } from "react";

import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

import TopBanner from "./components/TopBanner";
import InputCard from "./components/InputCard";
import Appbar from "./components/Appbar";
import Explainer from "./components/Explainer";

import bannerContract from "./banner";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

function App() {
  const [banner, setBanner] = useState({});

  const [isLoading, setIsLoading] = useState(false);

  const classes = useStyles();

  const getBanner = async (index) => {
    try {
      const banner = await bannerContract.methods.banners(index).call();

      return banner;
    } catch (error) {
      console.error(error);
      return {
        bannerContent:
          "Error fetching banner from contract, see console for details",
        bannerCreator: "Error.",
      };
    }
  };

  const manualRefresh = async () => {

    setIsLoading(true)
    setIsLoading(false)
    console.log('Manual refresh...')
  }

  const onLoad = async () => {
    // check how many banners have been published and subtract 1
    // to get the index of the most recent
    const latestMsgIndex =
      (await bannerContract.methods.getBannerCount().call()) - 1;

    const latestBanner = await getBanner(latestMsgIndex);

    setBanner(latestBanner);
  };

  useEffect(() => {
    onLoad();
  }, [isLoading]);

  if (!banner) {
    return <p>Loading...</p>;
  }

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Paper className={classes.paper}>
          <Appbar />
          <TopBanner message={banner} manualRefresh={manualRefresh}/>
        </Paper>
      </Grid>
      <Grid item xs={6}>
        <Paper className={classes.paper}>
          {" "}
          <Explainer />
        </Paper>
      </Grid>
      <Grid item xs={6}>
        <Paper className={classes.paper}>
          {" "}
          <InputCard isLoading={isLoading} setIsLoading={setIsLoading} />
        </Paper>
      </Grid>
    </Grid>
  );
}

export default App;
