var PaPaBase = artifacts.require("./PaPaBase.sol");

module.exports = async function(deployer) {
  const INIT_SUPPLY = 10000 * 10 ** 18; 
  await deployer.deploy(PaPaBase, INIT_SUPPLY);
};
