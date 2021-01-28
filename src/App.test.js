import { render, screen, waitFor } from "@testing-library/react";

import bannerContract from "./banner";

import App from "./App";



it("displays a banner with the latest message from contract, and the sender's address", async () => {

  // fetch the latest message from the contract
  const latestMsgIndex = await bannerContract.methods.getBannerCount().call() - 1
  const latestMessage = await bannerContract.methods.banners(latestMsgIndex).call()

  render(<App />)

  const Banner = await waitFor(() => screen.getByText(latestMessage.bannerContent));
  const Sender = await waitFor(() => screen.getByText(latestMessage.bannerCreator));


  expect(Banner).toBeTruthy()
  expect(Sender).toBeTruthy()

});


