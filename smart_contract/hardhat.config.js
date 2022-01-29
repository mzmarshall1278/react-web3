// https://eth-ropsten.alchemyapi.io/v2/3ejevWa3eXi36bExkEqj2wSgJByS--zS

require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: "0.8.0",
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/3ejevWa3eXi36bExkEqj2wSgJByS--zS',
      accounts: ['0f9f89a70de6c6ada1b75f3cc3800f677cbc685bc2cd6e5e72501e5e12aaab4f']
    }
  }
}