pragma solidity ^0.5.11;


contract SmartBanner {

    // Manager has special powers to modify content of banners and withdraw money

    address payable manager;

    uint bannerFee;

    uint bannerCount;

    struct Banner {

        string bannerContent;
        address bannerCreator;
        uint bannerIndex;
    }

    Banner[] public banners;


    constructor (uint _cost) public {

        manager = msg.sender;
        bannerFee = _cost;

    }

    function submitBanner(string memory _bannerMessage) public payable {

        require(msg.value >= bannerFee);

        Banner memory newBanner = Banner({
            bannerContent: _bannerMessage,
            bannerCreator: msg.sender,
            bannerIndex: bannerCount
        });

        banners.push(newBanner);

        bannerCount++;

    }


    function getBannerCount() public view returns(uint) {

        return bannerCount;
    }


    modifier restricted() {
        require(msg.sender == manager);

        _;
    }

    function modifyBanner(uint _bannerIndex, string memory _modifiedContent) public restricted {

        banners[_bannerIndex].bannerContent =  _modifiedContent;

    }


    function getBalance() public view returns(uint){

        return address(this).balance;
    }


    function withdraw(uint _amount) public restricted {

        manager.transfer(_amount);
    }



}
