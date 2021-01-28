import web3 from "./web3";

const address = "0x4560ca081b73c7c1a00b83ca28718b2a78fc4abd";

const abi = [
  {
    constant: true,
    inputs: [],
    name: "getBalance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "withdraw",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "string",
        name: "_bannerMessage",
        type: "string",
      },
    ],
    name: "submitBanner",
    outputs: [],
    payable: true,
    stateMutability: "payable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "uint256",
        name: "_bannerIndex",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_modifiedContent",
        type: "string",
      },
    ],
    name: "modifyBanner",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "banners",
    outputs: [
      {
        internalType: "string",
        name: "bannerContent",
        type: "string",
      },
      {
        internalType: "address",
        name: "bannerCreator",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "bannerIndex",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "getBannerCount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_cost",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "constructor",
  },
];


export default new web3.eth.Contract(abi, address)