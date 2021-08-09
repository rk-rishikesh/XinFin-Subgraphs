var NFT= artifacts.require('NFT');
var MarketPlace = artifacts.require('Marketplace');
var Bid = artifacts.require('ERC721Bid')

module.exports = function(deployer) {
    //deployer.deploy(NFT, 'Solulab', 'SL')
    //deployer.deploy(MarketPlace, '0x63853F89ba59dC2610D8Fb375185e8bec3CB3f51', 1000);
    deployer.deploy(Bid, '0x63853F89ba59dC2610D8Fb375185e8bec3CB3f51', 1000);
    // Additional contracts can be deployed here
};