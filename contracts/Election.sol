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

  function verifyVoter(uint voterid) private returns(bool){
    return true;
  }

  function castVote(uint vid, uint cid) public returns(string){
    if (verifyVoter(vid) == false){
      return "Not a valid Voter ID";
    }

    else{
      if(voted[vid] == true){
        return "Specified user has already voted once";
      }
      else{
        voted[vid] = true;
        addVote(cid);
        return "Your vote has been recorded successfully";
      }
    }
  }

  function newCandidate(string memory _name) private{
    candidates[cancount] = Candidate(cancount, _name, 0);
    cancount++;
  }

  function addVote(uint _id) private{
    candidates[_id].votes++;
  }

}
