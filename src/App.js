import React, { useEffect, useState } from "react";

import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Container";


import TopBanner from "./components/TopBanner";
import InputCard from "./components/InputCard";
import Appbar from "./components/Appbar";
import Explainer from "./components/Explainer";


import bannerContract from "./banner";

function App() {
  const [banner, setBanner] = useState(null);

  const [isLoading, setIsLoading] = useState(false)

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
    console.log({isLoading})
  }, [isLoading]);

 

  return (
    <Container style={{ flexDirection: "column", alignItems: "center" }}>
      <Appbar />
      {!banner && <p>Loading...</p>}
      {banner && <TopBanner message={banner} />}
<Box style={{display: "flex", flexDirection: "row"}}>
      <Explainer />
      <InputCard isLoading={isLoading} setIsLoading={setIsLoading} />

</Box>
    </Container>
  );
}

export default App;
