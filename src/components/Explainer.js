import { Typography } from "@material-ui/core";
import React from "react";
import EditIcon from "@material-ui/icons/Edit";

import bannerContract from "../banner";

const Explainer = () => {
  return (
    <div style={{ marginRight: "10px", padding: "10px" }}>
      <Typography gutterBottom={true} variant="h6">
        <EditIcon /> Interact With This Smart Contract
      </Typography>

      <Typography gutterBottom={true} variant="body1">
        {" "}
        This page is an interface for a simple smart contract written in 
        Solidity. The text in the message at the top of this
        page is being read from a smart contract at{" "}
        <em>{bannerContract.options.address}</em> on the Rinkeby Ethereum test
        network. You can look it up on {" "}
        <a href="https://rinkeby.etherscan.io/address/0x4560ca081b73c7c1a00b83ca28718b2a78fc4abd">
          Etherscan
        </a>
        .
      </Typography>

      <Typography gutterBottom={true} variant="body1">
        {" "}
        This simple React web app uses the web3 javascript library to read
        messages from the contract. The latest one is displayed at the top of
        this page and the previous messages are in the section below.
      </Typography>

      <Typography gutterBottom={true} variant="body1">
        {" "}
        If you have <a href="https://metamask.io/">Meta-Mask</a> installed, you
        can interact with this contract and change the message using the form to
        the right. You will need to be signed into Meta Mask and set to the
        Rinkeby test network. Please do NOT attempt to send real Ether, only
        test Ether from the Rinkeby network!
      </Typography>

      <Typography gutterBottom={true} variant="body1">
        {" "}
        If you need to top up your Rinkeby Ether, you can visit the{" "}
        <a href="https://faucet.rinkeby.io/">faucet</a>.
      </Typography>

    
    </div>
  );
};

export default Explainer;
