const MDAToken = artifacts.require("MDAToken");

module.exports = async function (done) {

    const mdaToken = await MDAToken.deployed()
    
    await mdaToken.transfer('0x45AdB2B996aF4146357E24Df6D52fdE1ba3e07AE', '100000000000000000000')
    
    done();
};
