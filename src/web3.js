import Web3 from 'web3'

// const web3 = new Web3(window.web3.currentProvider)

const provider = new Web3.providers.HttpProvider(
    'https://rinkeby.infura.io/v3/0a0af1d9069e4b30afb642e1606829bb'
     )

const web3 = new Web3(provider);

export default web3