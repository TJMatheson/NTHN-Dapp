import Web3 from "web3";

let provider;

if(typeof window !== 'undefined' && typeof window !== undefined && window.web3 !== 'undefined' && window.web3 !== undefined) {
    provider = window.web3.currentProvider;
} else {
  provider = new Web3.providers.HttpProvider(
    "https://rinkeby.infura.io/v3/0a0af1d9069e4b30afb642e1606829bb"
  );
}

const web3 = new Web3(provider);

export default web3;
