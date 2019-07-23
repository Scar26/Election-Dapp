pragma solidity ^0.5.0;

contract Election{

  struct Candidate{
    uint id;
    string name;
    uint votes;
  }

  mapping(uint => Candidate) public candidates;
  uint public cancount;
  string public test;

  constructor() public{
    newCandidate("Salad Ass");
    0newCandidate("Black Donald Trump");
    newCandidate("Keanu Reaves");
    vote(1);
    vote(1);
  }



  function newCandidate(string memory _name) private{
    candidates[cancount] = Candidate(cancount, _name, 0);
    cancount++;
  }

  function vote(uint _id) public{
    candidates[_id].votes++;
  }
}
