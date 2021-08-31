const MDAToken = artifacts.require("MDAToken");

module.exports = async function (deployer) {
     deployer.deploy(MDAToken);
};
