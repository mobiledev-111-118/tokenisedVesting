async function main() {
	const [deployer] = await ethers.getSigners();

	console.log('Deploying contracts with the account:', deployer.address);

	console.log('Account balance:', (await deployer.getBalance()).toString());

	const Token = await ethers.getContractFactory('TokenisedVesting');
	const token = await Token.deploy(
        "0xf2d965c4bf5ff0dcc259a5f0662cdf0eee859f1a59e4ab2072a67e160c598bef",
        ( 24 * 60 * 60 ) * 30,
        "0x02aB62496EE0b0dF9ff58f181E237923d8Ad1cBb"
    );

	console.log('Token address:', token.address);
}

main()
	.then(() => process.exit(0))
	.catch((error) => {
		console.error(error);
		process.exit(1);
	});
