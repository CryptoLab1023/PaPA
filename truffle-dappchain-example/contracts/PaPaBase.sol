pragma solidity ^0.4.24;

import "../node_modules/openzeppelin-solidity/contracts/token/ERC20/StandardToken.sol";
import "../node_modules/openzeppelin-solidity/contracts/ownership/Ownable.sol";

contract PaPAToken is StandardToken, Ownable {
    string public name = "PaPA";
    string public symbol = "PPA";
    uint public decimals = 18;
}

contract PaPABase is PaPAToken {

    constructor(uint initialSupply) public {
        totalSupply_ = initialSupply;
        balances[msg.sender] = initialSupply;
        comment.push("");
    }

    string[] comment;
    mapping(uint => address) public commentToSender;
    mapping(uint => address) public commentToReceiver;

    mapping(address => uint) public sentCommentCounts;
    mapping(address => uint) public receivedCommentCounts;

    function _checkThePeople(address _to) private view returns(bool success) {
        return msg.sender != _to;
    }

    function _checkTheAmout(address sender, uint _amount) private view returns(bool success) {
        return balances[sender] > _amount;
    }

    function sendMessage(address _to, string _comment) external {
        require(_checkThePeople(_to));
        address sender = msg.sender;
        uint id = comment.push(_comment) - 1;
        commentToSender[id] = sender;
        commentToReceiver[id] = _to;
        sentCommentCounts[sender]++;
        receivedCommentCounts[_to]++;
    }

    function getComment(uint _index) external view onlyOwner returns(string) {
        return comment[_index];
    }

    function getEvaluation(address _from, uint _amount) external {
        transferFrom(_from, msg.sender, _amount);
    }

    function evaluation(address _receiver, uint _amount) external {
        require(_checkTheAmout(msg.sender, _amount));
        approve(_receiver, _amount);
    }

}
