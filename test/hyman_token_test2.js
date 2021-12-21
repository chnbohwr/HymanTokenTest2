const HymanTokenTest2 = artifacts.require("HymanTokenTest2");

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("HymanTokenTest2", function (/* accounts */) {
  let accounts = [];
  before(async () => {
    accounts = await web3.eth.getAccounts();
  });
  it("should assert true", async function () {
    const instance = await HymanTokenTest2.deployed();
    console.log(accounts);
    var result = await instance.adminMint();
    var result2 = await instance.userMint({from: accounts[1], value: web3.utils.toWei('0.1', 'ether')});
    const bal1 = await web3.eth.getBalance(accounts[1]);
    console.log(result2)
    return assert.isTrue(true);
  });
});
