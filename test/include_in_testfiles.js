const { expect } = require('chai')
const FEE = 200
const TOKEN_DEPLOYER_ACCOUNT = 0
const TOKEN_NAME = "Novem Token"
const TOKEN_SYMBOL = "NVM"
const MINTER_ROLE = "0x9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a6"
const PAUSER_ROLE = "0x65d7a28e3265b37a6474929f336521b332c1681b933f6cb9f3376673440d862a"
const FEE_EXCLUDED_ROLE = "0xbcaa5c4620c62b2fedc77ef4fe401724814aeef811d907416a737179a85b1ab2"
const ZERO_ADDRESS = "0x0000000000000000000000000000000000000000";


function expectEqualStringValues(value1, value2) {
  expect(value1.toString()).to.equal(value2.toString())
}

module.exports = {
  TOKEN_NAME,
  TOKEN_SYMBOL,
  TOKEN_DEPLOYER_ACCOUNT,
  FEE,
  FEE_EXCLUDED_ROLE,
  ZERO_ADDRESS,
  expectEqualStringValues
}
