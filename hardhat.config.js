/**
 * @type import('hardhat/config').HardhatUserConfig
 */
require('@nomiclabs/hardhat-waffle');
require('@nomiclabs/hardhat-ethers');
require('@nomiclabs/hardhat-etherscan');

const { mnemonic, api_key, account } = require('./secrets.json');

task('accounts', 'Prints the list of accounts', async () => {
	const accounts = await ethers.getSigners();

	for (const account of accounts) {
		console.log(account.address);
	}
});

module.exports = {
	defaultNetwork: 'mainnet',
	networks: {
		localhost: {
			url: 'http://127.0.0.1:8545',
		},
		hardhat: {},
		testnet: {
			url: 'https://data-seed-prebsc-1-s1.binance.org:8545',
			chainId: 97,
			gasPrice: 20000000000,
			accounts: { mnemonic: mnemonic },
		},
		mainnet: {
			url: 'https://bsc-dataseed.binance.org',
			chainId: 56,
			gasPrice: 20000000000,
			accounts: { mnemonic: mnemonic },
		},
	},
    etherscan: {
        // Your API key for Etherscan
        // Obtain one at https://bscscan.com/
        apiKey: api_key
    },
	solidity: {
		version: '0.8.0',
		settings: {
			optimizer: {
				enabled: true,
			},
		},
	},
	paths: {
		sources: './contracts',
		tests: './test',
		cache: './cache',
		artifacts: './artifacts',
	},
	mocha: {
		timeout: 2000000,
	},
};
