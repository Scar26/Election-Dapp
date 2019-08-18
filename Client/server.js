const express = require('express');
const app = express();
const server = require('http').createServer(app);
const parser = require('body-parser');
const url = require('url');
const path = require('path');
const fs = require('fs');
const Web3 = require('web3');

server.listen(process.env.PORT || 2050);
console.log("Server listening on port 2050...");

app.use(parser.urlencoded({ extended: true}));

if (typeof web3 !== 'undefined') { web3 = new Web3(web3.currentProvider); }
else { web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:7545')); }

abi = '[  {    "constant": true,    "inputs": [      {        "name": "",        "type": "uint256"      }    ],    "name": "candidates",    "outputs": [      {        "name": "id",        "type": "uint32"      },      {        "name": "name",        "type": "string"      },      {        "name": "votes",        "type": "uint256"      }    ],    "payable": false,    "stateMutability": "view",    "type": "function"  },  {    "constant": true,    "inputs": [],    "name": "cancount",    "outputs": [      {        "name": "",        "type": "uint32"      }    ],    "payable": false,    "stateMutability": "view",    "type": "function"  },  {    "inputs": [],    "payable": false,    "stateMutability": "nonpayable",    "type": "constructor"  },  {    "constant": false,    "inputs": [      {        "name": "vid",        "type": "uint256"      },      {        "name": "cid",        "type": "uint256"      }    ],    "name": "castVote",    "outputs": [      {        "name": "",        "type": "string"      }    ],    "payable": false,    "stateMutability": "nonpayable",    "type": "function"  }]'

abiobj = JSON.parse(abi);
var defaultAccount = '0xEcebc654DC57ee532a63Ea6F2634D186963E7b24'; // Has to be updated according to the local blockchain
var contract_addr = '0x151512B893E5D418D1CB2d6bF77f0aB77CEc6200'; //Has to be updated everytime the contract is migrated
election = new web3.eth.Contract(abiobj, contract_addr , {from : defaultAccount});

console.log('web3 initialized');

constituencies = JSON.parse(fs.readFileSync('constituencies.json')); //We decided to go with json for storing the constituencies list because it will be faster to have the entire tree as a state variable of the server, and this is all public information anyway.

app.get('/',function(req,res){
  res.sendFile(__dirname + '/index.html');
});

app.post('/getcans',function(req,res){
  if(typeof req.body.con == 'string' && parseInt(req.body.con) >= 0 && allowedmachines.ips.includes(req.connection.remoteAddress) ){
    res.send(JSON.stringify(constituencies[parseInt(req.body.con)]));
  }
  else{
    res.status(400).send("Uh oh something went wrong");
  }
});

app.post('/voteapi',function(req,res){
  election.methods.castVote(78, 1).send({from : defaultAccount},function(e,r){ console.log(r) });
});
