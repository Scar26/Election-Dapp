const express = require('express');
const app = express();
const server = require('http').createServer(app);
const parser = require('body-parser');
const Web3 = require('web3');

server.listen(process.env.PORT || 2050);

if (typeof web3 !== 'undefined') { web3 = new Web3(web3.currentProvider); }
else { web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:7545')); }

abi = '[    {      "constant": true,      "inputs": [        {          "name": "",          "type": "uint256"        }      ],      "name": "candidates",      "outputs": [        {          "name": "id",          "type": "uint256"        },        {          "name": "name",          "type": "string"        },        {          "name": "votes",          "type": "uint256"        }      ],      "payable": false,      "stateMutability": "view",      "type": "function"    },    {      "constant": true,      "inputs": [],      "name": "cancount",      "outputs": [        {          "name": "",          "type": "uint256"        }      ],      "payable": false,      "stateMutability": "view",      "type": "function"    },    {      "constant": true,      "inputs": [],      "name": "test",      "outputs": [        {          "name": "",          "type": "string"        }      ],      "payable": false,      "stateMutability": "view",      "type": "function"    },    {      "inputs": [],      "payable": false,      "stateMutability": "nonpayable",      "type": "constructor"    },    {      "constant": false,      "inputs": [        {          "name": "vid",          "type": "uint256"        },        {          "name": "cid",          "type": "uint256"        }      ],      "name": "castVote",      "outputs": [        {          "name": "",          "type": "string"        }      ],      "payable": false,      "stateMutability": "nonpayable",      "type": "function"    },    {      "constant": false,      "inputs": [        {          "name": "_id",          "type": "uint256"        }      ],      "name": "vote",      "outputs": [],      "payable": false,      "stateMutability": "nonpayable",      "type": "function"    }  ]'

abiobj = JSON.parse(abi);
var defaultAccount = '0xEcebc654DC57ee532a63Ea6F2634D186963E7b24';
var contract_addr = '0x0BdCd02c7EC248f139D955F7EDe02896560D903e'; //Has to be updated everytime the contract is migrated
election = new web3.eth.Contract(abiobj, contract_addr , {from : defaultAccount});

console.log('web3 initialized');
election.methods.castVote(78, 1).send({from : defaultAccount},function(e,r){ console.log(r) });
console.log('all 3 votes cast to Black Donald Trump');
