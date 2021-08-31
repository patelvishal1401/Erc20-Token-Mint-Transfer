const MDAToken = artifacts.require("MDAToken");

module.exports = async function (done) {

    const mdaToken = await MDAToken.deployed()
    
    await mdaToken.transfer('0x', '100000000000000000000')  // trsanfer 100 MDA, Pass your receiver account in first parameter
    
    done();
};
