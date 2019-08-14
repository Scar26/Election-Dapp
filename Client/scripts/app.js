if (typeof web3 !== 'undefined') { web3 = new Web3(web3.currentProvider); }
else { web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:7545')); }

abi = '[  {    "constant": true,    "inputs": [      {        "name": "",        "type": "uint256"      }    ],    "name": "candidates",    "outputs": [      {        "name": "id",        "type": "uint256"      },      {        "name": "name",        "type": "string"      },      {        "name": "votes",        "type": "uint256"      }    ],    "payable": false,    "stateMutability": "view",    "type": "function"  },  {    "constant": true,    "inputs": [],    "name": "cancount",    "outputs": [      {        "name": "",        "type": "uint256"      }    ],    "payable": false,    "stateMutability": "view",    "type": "function"  },  {    "constant": true,    "inputs": [],    "name": "test",    "outputs": [      {        "name": "",        "type": "string"      }    ],    "payable": false,    "stateMutability": "view",    "type": "function"  },  {    "inputs": [],    "payable": false,    "stateMutability": "nonpayable",    "type": "constructor"  },  {    "constant": true,    "inputs": [      {        "name": "_packedBools",        "type": "uint256"      },      {        "name": "_boolNumber",        "type": "uint256"      }    ],    "name": "getbool",    "outputs": [      {        "name": "",        "type": "bool"      }    ],    "payable": false,    "stateMutability": "view",    "type": "function"  },  {    "constant": true,    "inputs": [      {        "name": "_packedBools",        "type": "uint256"      },      {        "name": "_boolNumber",        "type": "uint256"      },      {        "name": "_value",        "type": "bool"      }    ],    "name": "setbool",    "outputs": [      {        "name": "",        "type": "uint256"      }    ],    "payable": false,    "stateMutability": "view",    "type": "function"  },  {    "constant": false,    "inputs": [      {        "name": "_id",        "type": "uint256"      }    ],    "name": "vote",    "outputs": [],    "payable": false,    "stateMutability": "nonpayable",    "type": "function"  }]'

abiobj = JSON.parse(abi)
ElectionContract = web3.eth.contract(abiobj)
web3.eth.defaultAccount = '0xEcebc654DC57ee532a63Ea6F2634D186963E7b24';
contractInstance = ElectionContract.at('0x0BdCd02c7EC248f139D955F7EDe02896560D903e'); // has to be replaced by the contract address everytime it is deployed

var btn = document.getElementById('test');

btn.addEventListener("click",function(){
  vote(2)
});


function vote(i){
  contractInstance.castVote(21,i);
};
