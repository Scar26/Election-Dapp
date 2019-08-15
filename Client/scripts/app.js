if (typeof web3 !== 'undefined') { web3 = new Web3(web3.currentProvider); }
else { web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:7545')); }

abi = '[    {      "constant": true,      "inputs": [        {          "name": "",          "type": "uint256"        }      ],      "name": "candidates",      "outputs": [        {          "name": "id",          "type": "uint32"        },        {          "name": "name",          "type": "string"        },        {          "name": "votes",          "type": "uint256"        },        {          "name": "constituency",          "type": "uint16"        }      ],      "payable": false,      "stateMutability": "view",      "type": "function"    },    {      "constant": true,      "inputs": [        {          "name": "",          "type": "uint256"        }      ],      "name": "constituencies",      "outputs": [        {          "name": "id",          "type": "uint16"        },        {          "name": "name",          "type": "string"        }      ],      "payable": false,      "stateMutability": "view",      "type": "function"    },    {      "constant": true,      "inputs": [        {          "name": "",          "type": "uint256"        }      ],      "name": "testarray",      "outputs": [        {          "name": "",          "type": "uint32"        }      ],      "payable": false,      "stateMutability": "view",      "type": "function"    },    {      "constant": true,      "inputs": [],      "name": "cancount",      "outputs": [        {          "name": "",          "type": "uint32"        }      ],      "payable": false,      "stateMutability": "view",      "type": "function"    },    {      "constant": true,      "inputs": [],      "name": "concount",      "outputs": [        {          "name": "",          "type": "uint16"        }      ],      "payable": false,      "stateMutability": "view",      "type": "function"    },    {      "constant": true,      "inputs": [],      "name": "test",      "outputs": [        {          "name": "",          "type": "string"        }      ],      "payable": false,      "stateMutability": "view",      "type": "function"    },    {      "inputs": [],      "payable": false,      "stateMutability": "nonpayable",      "type": "constructor"    },    {      "constant": false,      "inputs": [        {          "name": "vid",          "type": "uint256"        },        {          "name": "cid",          "type": "uint256"        }      ],      "name": "castVote",      "outputs": [        {          "name": "",          "type": "string"        }      ],      "payable": false,      "stateMutability": "nonpayable",      "type": "function"    }  ]'

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
