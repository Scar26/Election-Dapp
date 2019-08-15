const express = require('express');
const app = express();
const server = require('http').createServer(app);
const parser = require('body-parser');
const url = require('url');
const path = require('path');
const Web3 = require('web3');

server.listen(process.env.PORT || 2050);
console.log("Server listening on port 2050...");

app.use(parser.json());
app.use(parser.urlencoded({ extended: true}));

if (typeof web3 !== 'undefined') { web3 = new Web3(web3.currentProvider); }
else { web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:7545')); }

abi = '[    {      "constant": true,      "inputs": [        {          "name": "",          "type": "uint256"        }      ],      "name": "candidates",      "outputs": [        {          "name": "id",          "type": "uint32"        },        {          "name": "name",          "type": "string"        },        {          "name": "votes",          "type": "uint256"        },        {          "name": "constituency",          "type": "uint16"        }      ],      "payable": false,      "stateMutability": "view",      "type": "function"    },    {      "constant": true,      "inputs": [        {          "name": "",          "type": "uint256"        }      ],      "name": "constituencies",      "outputs": [        {          "name": "id",          "type": "uint16"        },        {          "name": "name",          "type": "string"        }      ],      "payable": false,      "stateMutability": "view",      "type": "function"    },    {      "constant": true,      "inputs": [        {          "name": "",          "type": "uint256"        }      ],      "name": "testarray",      "outputs": [        {          "name": "",          "type": "uint32"        }      ],      "payable": false,      "stateMutability": "view",      "type": "function"    },    {      "constant": true,      "inputs": [],      "name": "cancount",      "outputs": [        {          "name": "",          "type": "uint32"        }      ],      "payable": false,      "stateMutability": "view",      "type": "function"    },    {      "constant": true,      "inputs": [],      "name": "concount",      "outputs": [        {          "name": "",          "type": "uint16"        }      ],      "payable": false,      "stateMutability": "view",      "type": "function"    },    {      "constant": true,      "inputs": [],      "name": "test",      "outputs": [        {          "name": "",          "type": "string"        }      ],      "payable": false,      "stateMutability": "view",      "type": "function"    },    {      "inputs": [],      "payable": false,      "stateMutability": "nonpayable",      "type": "constructor"    },    {      "constant": false,      "inputs": [        {          "name": "vid",          "type": "uint256"        },        {          "name": "cid",          "type": "uint256"        }      ],      "name": "castVote",      "outputs": [        {          "name": "",          "type": "string"        }      ],      "payable": false,      "stateMutability": "nonpayable",      "type": "function"    }  ]';

abiobj = JSON.parse(abi);
var defaultAccount = '0xEcebc654DC57ee532a63Ea6F2634D186963E7b24';
var contract_addr = '0xE5Bf51bE3B1a52E57C462D85b6BfbD6b7EF21f76'; //Has to be updated everytime the contract is migrated
election = new web3.eth.Contract(abiobj, contract_addr , {from : defaultAccount});

console.log('web3 initialized');

app.get('/',function(req,res){
  res.sendFile(__dirname + '/index.html')
});

app.post('/api',function(req,res){
  election.methods.castVote(78, 1).send({from : defaultAccount},function(e,r){ console.log(r) });
});

election.methods.constituencies.cans(0).call({from : defaultAccount},function(e,r){ console.log(r) })
