async function main() {
  const [deployer] = await ethers.getSigners();
  console.log('Deploying with account:', deployer.address);

  const DataNFT = await ethers.getContractFactory('DataNFT');
  const dataNFT = await DataNFT.deploy();
  await dataNFT.deployed();

  console.log('DataNFT deployed to:', dataNFT.address);
}

main().then(() => process.exit(0)).catch(err => { console.error(err); process.exit(1); });
