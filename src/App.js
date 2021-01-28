import React, { useEffect, useState } from "react";
import "./App.css";

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
    <div className="App">
      {!banner && <p>Loading...</p>}
      {banner && (
        <div>
      <p>{banner.bannerContent}</p>
      <p>{banner.bannerCreator}</p>
      </div>
      )}

    </div>
  );
}

export default App;
