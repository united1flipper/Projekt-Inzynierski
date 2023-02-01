import "@nomicfoundation/hardhat-toolbox";

const ALCHEMY_API_KEY = "zZr6lXqg5vhNcZ6cRWkWV-2Tjr6yjZVL";
const GOERLI_PRIVATE_KEY = '6afd5c25befbca0305b1fa4896e79c0f37e986207f1578f1c25feeaeb10e6c16';

module.exports = {
  solidity: "0.8.9",
  networks: {
    goerli: {
      url: `https://eth-goerli.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
      accounts: [GOERLI_PRIVATE_KEY]
    }
  }
};