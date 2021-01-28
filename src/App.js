import React, { useEffect, useState } from "react";

import Container from '@material-ui/core/Container'

import TopBanner from './components/TopBanner'


import web3 from "./web3";

import bannerContract from "./banner";



function App() {
  const [banner, setBanner] = useState(null);

  const onLoad = async () => {
    const latestMsgIndex =
      (await bannerContract.methods.getBannerCount().call()) - 1;

    const latestBanner = await bannerContract.methods
      .banners(latestMsgIndex)
      .call();

    setBanner(latestBanner);
  };

  useEffect(() => {
    onLoad();
  }, []);

  return (
    <Container  >
      {!banner && <p>Loading...</p>}
      {banner && (
    <TopBanner message={banner} />
      )}

    </Container>
  );
}

export default App;
