/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  FeeController,
  FeeControllerInterface,
} from "../../contracts/FeeController";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IController",
        name: "_controller",
        type: "address",
      },
      {
        internalType: "contract Isettings",
        name: "_settings",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bool",
        name: "status",
        type: "bool",
      },
    ],
    name: "AddressExemptionStatusChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bool",
        name: "status",
        type: "bool",
      },
    ],
    name: "AssetIncentiveStatusChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "asset",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "oldIncentive",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newIncentive",
        type: "uint256",
      },
    ],
    name: "AssetIncentiveUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bool",
        name: "status",
        type: "bool",
      },
    ],
    name: "BrgHoldingIncentiveStatusChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "prevBrgHoldingIncentive",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newBrgHoldingIncentive",
        type: "uint256",
      },
    ],
    name: "BrgHoldingIncentiveUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "prevBrgHoldingThreshold",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newBrgHoldingThreshold",
        type: "uint256",
      },
    ],
    name: "BrgHoldingThresholdUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "prevVal",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newVal",
        type: "uint256",
      },
    ],
    name: "DefaultAssetIncentivePercentageUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "prevVal",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newVal",
        type: "uint256",
      },
    ],
    name: "DefaultUserIncentivePercentageUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bool",
        name: "status",
        type: "bool",
      },
    ],
    name: "UserIncentiveStatusChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "previousIncentive",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "currentIncentive",
        type: "uint256",
      },
    ],
    name: "UserIncentiveUpdate",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "exemptionStatus",
        type: "bool",
      },
    ],
    name: "userExemptStatusChanged",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "status",
        type: "bool",
      },
    ],
    name: "activateAddressExemption",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "status",
        type: "bool",
      },
    ],
    name: "activateAssetIncentive",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "status",
        type: "bool",
      },
    ],
    name: "activateBRDGHoldingIncentive",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "bool",
        name: "status",
        type: "bool",
      },
    ],
    name: "activateIndexedTokenIncentive",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
    ],
    name: "activateIndexedUserIncentive",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "status",
        type: "bool",
      },
    ],
    name: "activateUserIncentive",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "controller",
    outputs: [
      {
        internalType: "contract IController",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
    ],
    name: "deActivateIndexedUserIncentive",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "defaultAssetIncentivePercentage",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "defaultUserIncentivePercentage",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        internalType: "bool",
        name: "status",
        type: "bool",
      },
    ],
    name: "exemptAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "asset",
        type: "address",
      },
    ],
    name: "getBridgeFee",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "indexedUserIncentive",
    outputs: [
      {
        internalType: "uint256",
        name: "incentivePercentage",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "isActive",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "isExempted",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "settings",
    outputs: [
      {
        internalType: "contract Isettings",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "tokenHolderIncentive",
    outputs: [
      {
        internalType: "uint256",
        name: "incentivePercentage",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "threshold",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "asset",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "percentage",
        type: "uint256",
      },
    ],
    name: "updatIndexedTokenIncentivePercentage",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "tokenHoldingLevel",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "threshold",
        type: "uint256",
      },
    ],
    name: "updateBRDGHoldingIncentiveThreshold",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "percentage",
        type: "uint256",
      },
    ],
    name: "updateDefaultAssetIncentivePercentage",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "percentage",
        type: "uint256",
      },
    ],
    name: "updateDefaultUserIncentivePercentage",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "tokenHoldingLevel",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "percentage",
        type: "uint256",
      },
    ],
    name: "updateTokenHoldingIncentivePercentage",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "percentage",
        type: "uint256",
      },
    ],
    name: "updateUserExemptionPercentage",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "useAssetIncentive",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "useBRDGHoldingIncentive",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "useExemption",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "useUserIncentive",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60806040526521a7a6a6a7a760d11b600255634245544160e01b60035564414c50484160d81b600455600a600755600a6008553480156200003f57600080fd5b506040516200278b3803806200278b833981016040819052620000629162000132565b600080546001600160a01b039384166001600160a01b03199182161782556001805493909416921691909117825560408051808201825260038152690a968163f0a57b400000602080830191825260028054865260098083528587209451855592519387019390935583518085018552600781526a01a784379d99db420000008183019081528454875283835285872091518255519087015583518085018552600f81526a084595161401484a000000818301908152935486529190529190922090518155905191015562000189565b6000806040838503121562000145578182fd5b8251620001528162000170565b6020840151909250620001658162000170565b809150509250929050565b6001600160a01b03811681146200018657600080fd5b50565b6125f280620001996000396000f3fe608060405234801561001057600080fd5b50600436106101585760003560e01c80639b9d2455116100c3578063c00796051161007c578063c0079605146102de578063c548d9b7146102f1578063e06174e4146102fe578063f2b8040714610329578063f2dcc1eb1461033c578063f77c47911461034557610158565b80639b9d24551461026d578063a3019cf814610280578063aaddc3be14610293578063b306760d146102a6578063b43b5ebc146102b8578063ba9527fe146102cb57610158565b80633e8addf1116101155780633e8addf1146101fa5780635ebbc3301461020d578063632b73331461022057806368efca891461023457806383c2a8da1461024757806394018c4a1461025a57610158565b806302a03d361461015d578063079eb7fb1461017957806308fdf610146101ac57806312d5683d146101c157806322193f91146101d457806336a17d14146101e7575b600080fd5b61016660085481565b6040519081526020015b60405180910390f35b61019c61018736600461235e565b60056020526000908152604090205460ff1681565b6040519015158152602001610170565b6101bf6101ba366004612465565b610358565b005b6101bf6101cf366004612465565b61069b565b6101bf6101e236600461242d565b6109b0565b6101bf6101f536600461242d565b610b5c565b6101bf61020836600461235e565b610cfa565b6101bf61021b366004612486565b610ef7565b60065461019c906301000000900460ff1681565b6101bf61024236600461242d565b611097565b6101bf610255366004612402565b61122b565b6101bf6102683660046123d5565b61142b565b6101bf61027b36600461242d565b611645565b6101bf61028e3660046123d5565b6117e0565b6101bf6102a1366004612402565b611961565b60065461019c90610100900460ff1681565b60065461019c9062010000900460ff1681565b6101666102d936600461239d565b611b57565b6101bf6102ec366004612486565b611dbd565b60065461019c9060ff1681565b600154610311906001600160a01b031681565b6040516001600160a01b039091168152602001610170565b6101bf61033736600461235e565b611f5d565b61016660075481565b600054610311906001600160a01b031681565b60005460408051638da5cb5b60e01b8152905133926001600160a01b031691638da5cb5b916004808301926020929190829003018186803b15801561039c57600080fd5b505afa1580156103b0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103d49190612381565b6001600160a01b0316148061045f5750600054604051630935e01b60e21b81523360048201526001600160a01b03909116906324d7806c9060240160206040518083038186803b15801561042757600080fd5b505afa15801561043b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061045f9190612449565b6104845760405162461bcd60e51b815260040161047b906124b6565b60405180910390fd5b600254821480610495575060035482145b806104a1575060045482145b6104e95760405162461bcd60e51b8152602060048201526019602482015278696e76616c696420686f6c64696e6720496e63656e7469766560381b604482015260640161047b565b60006104f483612133565b90506004548114156105725760035460009081526009602052604090206001015482118015610545575060025460009081526009602052604080822060019081015460035484529190922090910154115b8015610564575060025460009081526009602052604090206001015415155b61056d57600080fd5b61063a565b6003548114156105d65760045460009081526009602052604090206001015482108015610545575060025460009081526009602052604090206001015482118015610564575060025460009081526009602052604090206001015461056d57600080fd5b60025481141561063a5760035460009081526009602052604080822060019081015460045484529190922090910154118015610625575060035460009081526009602052604090206001015482105b80156106315750600082115b61063a57600080fd5b6000818152600960209081526040918290206001015482519081529081018490527f380370fc16cb5de7ba98c093cb2abe6e49cccb3e3f001e519ebcfe82f5cf139a910160405180910390a160009081526009602052604090206001015550565b60005460408051638da5cb5b60e01b8152905133926001600160a01b031691638da5cb5b916004808301926020929190829003018186803b1580156106df57600080fd5b505afa1580156106f3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107179190612381565b6001600160a01b031614806107a25750600054604051630935e01b60e21b81523360048201526001600160a01b03909116906324d7806c9060240160206040518083038186803b15801561076a57600080fd5b505afa15801561077e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107a29190612449565b6107be5760405162461bcd60e51b815260040161047b906124b6565b6002548214806107cf575060035482145b806107db575060045482145b6108235760405162461bcd60e51b8152602060048201526019602482015278696e76616c696420686f6c64696e6720496e63656e7469766560381b604482015260640161047b565b600061082e83612133565b600081815260096020526040902054600454919250908214156108ad57600354600090815260096020526040902054831180156108835750600254600090815260096020526040808220546003548352912054115b801561089f575060025460009081526009602052604090205415155b6108a857600080fd5b61095f565b600354821415610908576004546000908152600960205260409020548310801561088357506002546000908152600960205260409020548311801561089f57506002546000908152600960205260409020546108a857600080fd5b60025482141561095f5760035460009081526009602052604080822054600454835291205411801561094a575060035460009081526009602052604090205483105b80156109565750600083115b61095f57600080fd5b60008481526009602090815260409182902085905581518381529081018590527f240772d6994e765d6a8e5bdf73ae5fff4eb4de779e7ae3b36ae4f458f590b552910160405180910390a150505050565b60005460408051638da5cb5b60e01b8152905133926001600160a01b031691638da5cb5b916004808301926020929190829003018186803b1580156109f457600080fd5b505afa158015610a08573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a2c9190612381565b6001600160a01b03161480610ab75750600054604051630935e01b60e21b81523360048201526001600160a01b03909116906324d7806c9060240160206040518083038186803b158015610a7f57600080fd5b505afa158015610a93573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ab79190612449565b610ad35760405162461bcd60e51b815260040161047b906124b6565b60065460ff63010000009091041615158115151415610b045760405162461bcd60e51b815260040161047b906124ed565b6006805482151563010000000263ff000000199091161790556040517fe5184386e7442a96171dfb41f23bdc78158de15c8dd9203ba44911d1b970d4f990610b5190831515815260200190565b60405180910390a150565b60005460408051638da5cb5b60e01b8152905133926001600160a01b031691638da5cb5b916004808301926020929190829003018186803b158015610ba057600080fd5b505afa158015610bb4573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bd89190612381565b6001600160a01b03161480610c635750600054604051630935e01b60e21b81523360048201526001600160a01b03909116906324d7806c9060240160206040518083038186803b158015610c2b57600080fd5b505afa158015610c3f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c639190612449565b610c7f5760405162461bcd60e51b815260040161047b906124b6565b60065460ff620100009091041615158115151415610caf5760405162461bcd60e51b815260040161047b906124ed565b60068054821515620100000262ff0000199091161790556040517f91165ce3ea12d2f38c117706dca0cfdeefca89338a64dff731ab3c30a7b890e390610b5190831515815260200190565b60005460408051638da5cb5b60e01b8152905133926001600160a01b031691638da5cb5b916004808301926020929190829003018186803b158015610d3e57600080fd5b505afa158015610d52573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d769190612381565b6001600160a01b03161480610e015750600054604051630935e01b60e21b81523360048201526001600160a01b03909116906324d7806c9060240160206040518083038186803b158015610dc957600080fd5b505afa158015610ddd573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e019190612449565b610e1d5760405162461bcd60e51b815260040161047b906124b6565b6001600160a01b0381166000908152600b602052604090206001015460ff1615610e7a5760405162461bcd60e51b815260206004820152600e60248201526d616c72656164792061637469766560901b604482015260640161047b565b6040805180820182526007548152600160208083018281526001600160a01b0386166000818152600b8452869020945185559051938301805460ff191694151594909417909355925190815290917f4cc34974eb9acb4b7c62e2ce960332b3bde023d0004e5f0bdeee9c458cc2aa9891015b60405180910390a250565b60005460408051638da5cb5b60e01b8152905133926001600160a01b031691638da5cb5b916004808301926020929190829003018186803b158015610f3b57600080fd5b505afa158015610f4f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f739190612381565b6001600160a01b03161480610ffe5750600054604051630935e01b60e21b81523360048201526001600160a01b03909116906324d7806c9060240160206040518083038186803b158015610fc657600080fd5b505afa158015610fda573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ffe9190612449565b61101a5760405162461bcd60e51b815260040161047b906124b6565b603281106110565760405162461bcd60e51b8152602060048201526009602482015268696e76616c6964202560b81b604482015260640161047b565b60075460408051918252602082018390527faee9027cd52cd36ed373913dcea55a98babe1ff97f4a046828a3b177ea49c305910160405180910390a1600755565b60005460408051638da5cb5b60e01b8152905133926001600160a01b031691638da5cb5b916004808301926020929190829003018186803b1580156110db57600080fd5b505afa1580156110ef573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111139190612381565b6001600160a01b0316148061119e5750600054604051630935e01b60e21b81523360048201526001600160a01b03909116906324d7806c9060240160206040518083038186803b15801561116657600080fd5b505afa15801561117a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061119e9190612449565b6111ba5760405162461bcd60e51b815260040161047b906124b6565b60065460ff16151581151514156111e35760405162461bcd60e51b815260040161047b906124ed565b60405181151581527fe41c88aff510062186556cad0aed9c7a0d4b346a62664358e69f4a40f43e9ca99060200160405180910390a16006805460ff1916911515919091179055565b60005460408051638da5cb5b60e01b8152905133926001600160a01b031691638da5cb5b916004808301926020929190829003018186803b15801561126f57600080fd5b505afa158015611283573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112a79190612381565b6001600160a01b031614806113325750600054604051630935e01b60e21b81523360048201526001600160a01b03909116906324d7806c9060240160206040518083038186803b1580156112fa57600080fd5b505afa15801561130e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113329190612449565b61134e5760405162461bcd60e51b815260040161047b906124b6565b6001600160a01b0382166000908152600a602052604090206001015460ff166113cb5760405162461bcd60e51b815260206004820152602960248201527f466565436f6e74726f6c6c65723a206173736574206578656d7074696f6e206e6044820152686f742061637469766560b81b606482015260840161047b565b6001600160a01b0382166000818152600a6020908152604091829020805490859055825181815291820185905292917f2c4b2f302ea040ab407534b2d7cc4bc99334eb41a2b3f2c6f363fd0a1648f5d491015b60405180910390a2505050565b60005460408051638da5cb5b60e01b8152905133926001600160a01b031691638da5cb5b916004808301926020929190829003018186803b15801561146f57600080fd5b505afa158015611483573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114a79190612381565b6001600160a01b031614806115325750600054604051630935e01b60e21b81523360048201526001600160a01b03909116906324d7806c9060240160206040518083038186803b1580156114fa57600080fd5b505afa15801561150e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115329190612449565b61154e5760405162461bcd60e51b815260040161047b906124b6565b6001600160a01b0382166000908152600a602052604090206001015460ff1615811515141561158f5760405162461bcd60e51b815260040161047b906124ed565b80156115c1576001600160a01b0382166000908152600a60205260409020600101805460ff191682151517905561160d565b604080518082018252600854815282151560208083019182526001600160a01b0386166000908152600a909152929092209051815590516001909101805460ff19169115159190911790555b604051600181527fe5184386e7442a96171dfb41f23bdc78158de15c8dd9203ba44911d1b970d4f99060200160405180910390a15050565b60005460408051638da5cb5b60e01b8152905133926001600160a01b031691638da5cb5b916004808301926020929190829003018186803b15801561168957600080fd5b505afa15801561169d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116c19190612381565b6001600160a01b0316148061174c5750600054604051630935e01b60e21b81523360048201526001600160a01b03909116906324d7806c9060240160206040518083038186803b15801561171457600080fd5b505afa158015611728573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061174c9190612449565b6117685760405162461bcd60e51b815260040161047b906124b6565b60065460ff61010090910416151581151514156117975760405162461bcd60e51b815260040161047b906124ed565b600680548215156101000261ff00199091161790556040517f4b35d602e0cd107e255cddff136a82aa52d7e52cbeb0add60ad2044ea6b1649190610b5190831515815260200190565b60005460408051638da5cb5b60e01b8152905133926001600160a01b031691638da5cb5b916004808301926020929190829003018186803b15801561182457600080fd5b505afa158015611838573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061185c9190612381565b6001600160a01b0316146118b25760405162461bcd60e51b815260206004820152601860248201527f2063616c6c6572206973206e6f7420746865206f776e65720000000000000000604482015260640161047b565b6001600160a01b03821660009081526005602052604090205460ff16151581151514156118f15760405162461bcd60e51b815260040161047b906124ed565b816001600160a01b03167f4cc34974eb9acb4b7c62e2ce960332b3bde023d0004e5f0bdeee9c458cc2aa988260405161192e911515815260200190565b60405180910390a26001600160a01b03919091166000908152600560205260409020805460ff1916911515919091179055565b60005460408051638da5cb5b60e01b8152905133926001600160a01b031691638da5cb5b916004808301926020929190829003018186803b1580156119a557600080fd5b505afa1580156119b9573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906119dd9190612381565b6001600160a01b03161480611a685750600054604051630935e01b60e21b81523360048201526001600160a01b03909116906324d7806c9060240160206040518083038186803b158015611a3057600080fd5b505afa158015611a44573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611a689190612449565b611a845760405162461bcd60e51b815260040161047b906124b6565b6001600160a01b0382166000908152600b602052604090206001015460ff16611b005760405162461bcd60e51b815260206004820152602860248201527f466565436f6e74726f6c6c65723a2075736572206578656d7074696f6e206e6f604482015267742061637469766560c01b606482015260840161047b565b6001600160a01b0382166000818152600b6020908152604091829020805490859055825181815291820185905292917f8d27423b5b97272ddd630edf11c97bddbc21ef3df22e50023ce38cb00d702446910161141e565b60015460408051633199692b60e11b815290516000926001600160a01b031691636332d256916004808301926020929190829003018186803b158015611b9c57600080fd5b505afa158015611bb0573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611bd49190612449565b611be057506000611db7565b60015460408051638375bb3960e01b815290516000926001600160a01b031691638375bb39916004808301926020929190829003018186803b158015611c2557600080fd5b505afa158015611c39573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611c5d919061249e565b60065490915060009060ff168015611c8d57506001600160a01b03851660009081526005602052604090205460ff165b15611c9d57600092505050611db7565b60065462010000900460ff1615611cf8576001600160a01b0384166000908152600a602052604090206001015460ff1615611cf8576001600160a01b0384166000908152600a6020526040902054611cf59082612512565b90505b6006546301000000900460ff1615611d54576001600160a01b0385166000908152600b602052604090206001015460ff1615611d54576001600160a01b0385166000908152600b6020526040902054611d519082612512565b90505b600654610100900460ff1615611d7f576000611d6f8661216f565b9050611d7b8183612512565b9150505b60648110611d9257600092505050611db7565b6064611d9e838361254a565b611da8919061252a565b611db29083612569565b925050505b92915050565b60005460408051638da5cb5b60e01b8152905133926001600160a01b031691638da5cb5b916004808301926020929190829003018186803b158015611e0157600080fd5b505afa158015611e15573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611e399190612381565b6001600160a01b03161480611ec45750600054604051630935e01b60e21b81523360048201526001600160a01b03909116906324d7806c9060240160206040518083038186803b158015611e8c57600080fd5b505afa158015611ea0573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611ec49190612449565b611ee05760405162461bcd60e51b815260040161047b906124b6565b60328110611f1c5760405162461bcd60e51b8152602060048201526009602482015268696e76616c6964202560b81b604482015260640161047b565b60085460408051918252602082018390527fb04bf79637ebb6d6a977766f7b02543d5d6607154feb1668c15e2c02c27ae047910160405180910390a1600855565b60005460408051638da5cb5b60e01b8152905133926001600160a01b031691638da5cb5b916004808301926020929190829003018186803b158015611fa157600080fd5b505afa158015611fb5573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611fd99190612381565b6001600160a01b031614806120645750600054604051630935e01b60e21b81523360048201526001600160a01b03909116906324d7806c9060240160206040518083038186803b15801561202c57600080fd5b505afa158015612040573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906120649190612449565b6120805760405162461bcd60e51b815260040161047b906124b6565b6001600160a01b0381166000908152600b602052604090206001015460ff166120e15760405162461bcd60e51b8152602060048201526013602482015272185b1c9958591e4819195858dd1a5d985d1959606a1b604482015260640161047b565b6001600160a01b0381166000818152600b60209081526040808320600101805460ff19169055519182527f4cc34974eb9acb4b7c62e2ce960332b3bde023d0004e5f0bdeee9c458cc2aa989101610eec565b6000600254821415612148575060025461216a565b60035482141561215b575060035461216a565b60045482141561015857506004545b919050565b600080600160009054906101000a90046001600160a01b03166001600160a01b0316635d911d126040518163ffffffff1660e01b815260040160206040518083038186803b1580156121c057600080fd5b505afa1580156121d4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906121f89190612381565b6040516370a0823160e01b81526001600160a01b03858116600483015291909116906370a082319060240160206040518083038186803b15801561223b57600080fd5b505afa15801561224f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612273919061249e565b60045460009081526009602052604090206001015490915081106122aa57505060045460009081526009602052604090205461216a565b600454600090815260096020526040902060010154811080156122e157506003546000908152600960205260409020600101548110155b156122ff57505060035460009081526009602052604090205461216a565b6003546000908152600960205260409020600101548110801561233657506002546000908152600960205260409020600101548110155b1561235457505060025460009081526009602052604090205461216a565b600091505061216a565b60006020828403121561236f578081fd5b813561237a81612596565b9392505050565b600060208284031215612392578081fd5b815161237a81612596565b600080604083850312156123af578081fd5b82356123ba81612596565b915060208301356123ca81612596565b809150509250929050565b600080604083850312156123e7578182fd5b82356123f281612596565b915060208301356123ca816125ae565b60008060408385031215612414578182fd5b823561241f81612596565b946020939093013593505050565b60006020828403121561243e578081fd5b813561237a816125ae565b60006020828403121561245a578081fd5b815161237a816125ae565b60008060408385031215612477578182fd5b50508035926020909101359150565b600060208284031215612497578081fd5b5035919050565b6000602082840312156124af578081fd5b5051919050565b60208082526018908201527f2063616c6c6572206973206e6f74207468652061646d696e0000000000000000604082015260600190565b6020808252600b908201526a185b1c9958591e481cd95d60aa1b604082015260600190565b6000821982111561252557612525612580565b500190565b60008261254557634e487b7160e01b81526012600452602481fd5b500490565b600081600019048311821515161561256457612564612580565b500290565b60008282101561257b5761257b612580565b500390565b634e487b7160e01b600052601160045260246000fd5b6001600160a01b03811681146125ab57600080fd5b50565b80151581146125ab57600080fdfea26469706673582212208c9b83f8a34a64130ab2a7acbc3378656d02edb457fbc2198697bc7e3d0d0b5e64736f6c63430008020033";

type FeeControllerConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: FeeControllerConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class FeeController__factory extends ContractFactory {
  constructor(...args: FeeControllerConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _controller: PromiseOrValue<string>,
    _settings: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<FeeController> {
    return super.deploy(
      _controller,
      _settings,
      overrides || {}
    ) as Promise<FeeController>;
  }
  override getDeployTransaction(
    _controller: PromiseOrValue<string>,
    _settings: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_controller, _settings, overrides || {});
  }
  override attach(address: string): FeeController {
    return super.attach(address) as FeeController;
  }
  override connect(signer: Signer): FeeController__factory {
    return super.connect(signer) as FeeController__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): FeeControllerInterface {
    return new utils.Interface(_abi) as FeeControllerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): FeeController {
    return new Contract(address, _abi, signerOrProvider) as FeeController;
  }
}
