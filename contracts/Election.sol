pragma solidity ^0.5.0;

contract Election{

  struct Candidate{
    uint id;
    string name;
    uint votes;
  }

  mapping(uint => bool) private voted;
  mapping(uint => Candidate) public candidates;
  uint public cancount;
  string public test;
  
  constructor() public{
    newCandidate("Salad Ass");
    newCandidate("Black Donald Trump");
    newCandidate("Keanu Reaves");
  }

  function newCandidate(string memory _name) private{
    candidates[cancount] = Candidate(cancount, _name, 0);
    cancount++;
  }

  function vote(uint _id) public{
    candidates[_id].votes++;
  }

  function debug() public returns(uint256) {
    return 69;
  }
}
