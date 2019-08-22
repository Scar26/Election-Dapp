pragma solidity ^0.5.0;
import "./provable.sol";

contract Election is usingProvable{

  address private _owner;
  string private secert = "f4Q2t@1$^";
  string public voterRecord;
  string public ETHUSD;
  modifier onlyOwner {
    require(msg.sender == _owner);
    _;
  }

  struct Candidate{
    uint32 id;
    string name;
    uint votes;
  }
  event LogConstructorInitiated(string nextStep);
   event LogPriceUpdated(string price);
   event LogNewProvableQuery(string description);


  mapping(uint => bool) private voted;
  mapping(uint => Candidate) public candidates;
  uint32 public cancount;

  event temp(string response);

  constructor() public{
    OAR = OracleAddrResolverI(0xe273B3DB6Ec4aB4869C9aE92A3AfD6A770Ce68B5);
    _owner = msg.sender;
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

  function newCandidate(string memory _name) private{
    candidates[cancount] = Candidate(cancount, _name, 0);
    cancount++;
  }

  function recordVote(uint _id) private{
    candidates[_id].votes++;
  }

    function __callback(bytes32 myid, string memory result) public{
        if (msg.sender != provable_cbAddress()) revert();
        ETHUSD = result;
        emit LogPriceUpdated(result);
     }

  function testOracle() public payable{
    emit LogNewProvableQuery("Provable query was sent, standing by for the answer..");
    provable_query("URL", "json(https://api.pro.coinbase.com/products/ETH-USD/ticker).price");
  }
}
