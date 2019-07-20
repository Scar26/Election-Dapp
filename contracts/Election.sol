pragma solidity ^0.5.0;

contract Election{

  struct Candidate{
    uint id;
    string name;
    uint votes;
  }

  mapping(uint => Candidate) public candidates;
  uint public cancount;

  constructor() public{
    newCandidate("Black Donald Trump");
    newCandidate("Keanu Reaves");
  }

  function newCandidate(string memory _name) private{
    cancount ++;
    candidates[cancount] = Candidate(cancount, _name, 0);
  }
}
