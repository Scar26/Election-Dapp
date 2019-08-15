pragma solidity ^0.5.0;

contract Election{

  struct Candidate{
    uint32 id;
    string name;
    uint votes;
    uint16 constituency; // The constituency that candidate is running for
  }

  struct Constituency{
    uint16 id;
    string name;
    uint64[] cans; //will hold the IDs of all candidates for that constituency
  }

  mapping(uint => bool) private voted;
  mapping(uint => Constituency) public constituencies;
  mapping(uint => Candidate) public candidates;
  uint32 public cancount = 1;
  uint16 public concount;
  string public test;
  uint32[] public testarray = [1,2,3];

  constructor() public{
    newConstituency("Bikini Bottom");
    constituencies[0].cans = [1,2,3];
    newCandidate("Salad Ass", 0);
    newCandidate("Black Donald Trump", 0);
    newCandidate("Keanu Reaves", 0);
  }

  function verifyVoter(uint voterid) private returns(bool){
    return true;
  }

  function castVote(uint vid, uint cid) public returns(string memory){
    if (verifyVoter(vid) == false){
      return "Not a valid Voter ID";
    }

    else{
      if(voted[vid] != true){
        voted[vid] = true;
        recordVote(cid);
      }
      return "Your vote has been recorded successfully";
  }
}

  function newConstituency(string memory _name) private{
    uint64[] memory tmp;
    constituencies[concount] = Constituency(concount, _name, tmp);
    concount++;
  }

  function newCandidate(string memory _name, uint16 c_id) private{
    candidates[cancount] = Candidate(cancount, _name, 0, c_id);
    constituencies[c_id].cans.push(cancount);
    cancount++;
  }

  function recordVote(uint _id) private{
    candidates[_id].votes++;
  }
}
