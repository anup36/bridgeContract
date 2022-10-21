// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy
  const validator1 = "0x774D40e94296De89CB0e097fabc9359fd29fF3a8" //
  const validator2 = "0x038d7262b22bf58a19C07a2c431B0558252D524C" //
  const validator3 = "0xbf07d7C2613188E3b403D9fbdca7872D0ff1e5aF" //
  const validator4 = "0x4CC53774D9102CB724a84ED9263E51f71AA3e1F0" //
  const validator5 = "0x4B2759e3DbFa0a1292aba505cF21147158447654" //

  const oracle1 = "0x45a48dCb9607A2F2210e68ABe04A4D9fd49AAb47" //
  const oracle2 = "0x662e184103eEEadcdbcf6BfEA6F3611225d60C09" //

  const oracle3 = "0xE10D2d514116BECD1cBabF86a83ca932351334b6" //1654515c088e6db2617794a63c355ee627a8058d14b63119640357806af76ef8
  const oracle4 = "0x71c686F8699D8df2C23DCFd6735647B522547c38" //9c0ba90bbb4c6fa081b08660b7134bd55fa8d76321071215a567779d9fee2660
  const oracle5 = "0x269A4Ba2Ce7075ACf2271515Ded99DdD2139A0F5" //d8b741917e0d3a8785824d97201fe1e593245db0b25547aea1b395c6375538cf

  const registrar = "0x015E79eea7e8326FCe138B875183970771414e77" //
  const feeAccount = "0x96168Aa9d041EE3eae824bAd6f5189D95B23B21E"
 
  const controllerContract = await hre.ethers.getContractFactory("Controller");
  // const controller = await controllerContract.deploy();
  const controller = await controllerContract.attach("0x0063ACf0DA200f1AcE050e22A21BC613AF64c92C");
  // await controller.deployed();
  console.log("controller : " , controller.address)
  const settingsContract = await hre.ethers.getContractFactory("Settings");
  // const settings = await settingsContract.deploy(controller.address , feeAccount);
    const settings = await settingsContract.attach("0xA4f578bb7218a6eC553c50b442A1eFcDFCE4eb63");
  // await settings.deployed();
  console.log("settings : " , settings.address)
  const deployerContract = await hre.ethers.getContractFactory("Deployer");
  // const deployer = await deployerContract.deploy(controller.address);
  const deployer = await deployerContract.attach("0x4F77c1a7E26834DD427EE909A24890a933A0F843");
  // await deployer.deployed();
  console.log("deployer : " , deployer.address)
  const feeControllerContract = await hre.ethers.getContractFactory("FeeController");
  // const feeController = await feeControllerContract.deploy(controller.address , settings.address);
  const feeController = await feeControllerContract.attach("0xF098016671cdA0AC45C639e96614C964A70D2C46");
  // await feeController.deployed();
  console.log("feeController : " , feeController.address)
  const registryContract = await hre.ethers.getContractFactory("Registry");
  const registry = await registryContract.deploy();
  // await registry.deployed();
  console.log("registry : " , registry.address)
 

  const BridgePool = await hre.ethers.getContractFactory("BridgePool");
  const pool = await BridgePool.deploy(controller.address);
  // const pool = await BridgePool.attach("0xe826d9d90268f39DB8E70a91EFA412c29dd346E9");
  console.log("pool : " , pool.address)

  const bridgeContract = await hre.ethers.getContractFactory("Bridge");
  const bridge = await bridgeContract.deploy(controller.address , settings.address, registry.address , deployer.address ,feeController.address , pool.address ,"0x0000000000000000000000000000000000000000");
  // const bridge = await bridgeContract.deploy( "0x87bD0823901B3A4108E62EC35D86B461dD3ab516" , "0x212FFBcb4211763f1370515d17bA8B756026A611", "0x0218eE37d75434289F3FE4E2C9D4bce1daCB1aF7" , "0x8551122099e2A5A3A7A015a1Db1Ad45703a26EFf" ,"0x08f4C1d2191464d8b2FCc466e2cF621cAF560604" ,"0x0000000000000000000000000000000000000000");
    await bridge.deployed();
    console.log("bridge : " , bridge.address)

  await registry.transferOwnership(bridge.address);
  console.log("transfering ownership" )

  // await deployer.udpadateBridge(bridge.address);

  await pool.initializePool(bridge.address);

  // await controller.addRegistrar(registrar , true);
  // console.log("adding oracles" )
  // await controller.addOracle(oracle1 , true); 
  // await controller.addOracle(oracle2 , true);
  // await controller.addOracle(oracle3 , true);
  // await controller.addOracle(oracle4 , true);
  // await controller.addOracle(oracle5 , true);
  // console.log("adding validators" )

  // await controller.addValidator(validator1 , true);
  // await controller.addValidator(validator2 , true);
  // await controller.addValidator(validator3 , true);
  // await controller.addValidator(validator4 , true);
  // await controller.addValidator(validator5 , true);

  // console.log("setting chains " )
  // await settings.setMinValidationPercentage(80);
  // await settings.setNetworkSupportedChains(
   
  //   [ 43288 , 1338 ,2000 ,42170 ,1666600000 ,66 ,288 , 56 ,43114 ,250 ,137 ,321  , 10 ,1 ,42161],
  //   [0,"5100000000000000000" ,"5100000000000000000", "8500000000000000000" , "8500000000000000000" ,"5100000000000000000", "20000000000000000000" , "27000000000000000000" , "12000000000000000000" , "12000000000000000000" , "12000000000000000000" , "10000000000000000000" , "17000000000000000000" , "551000000000000000000" ,"17000000000000000000"]
  //   ,true
  //   );


    // bsc ["0" , "7000000000000000" , "5000000000000000" , "5000000000000000" , "5000000000000000" , "10000000000000000" , "200000000000000000" , "10000000000000000"]
    // avax ["140000000000000000" , "0" , "50000000000000000" , "50000000000000000" , "50000000000000000" , "100000000000000000" , "2000000000000000000" , "100000000000000000"]
    // ftm ["12000000000000000000" , "6280000000000000000" , "0" , "4300000000000000000" , "4300000000000000000" , "8600000000000000000" , "185000000000000000000" , "8600000000000000000"]
    // matic ["6500000000000000000" , "3400000000000000000" , "2300000000000000000" , "0" , "2300000000000000000" , "4600000000000000000" , "5500000000000000000" , "4600000000000000000"]
    // kcc ["270000000000000000" , "150000000000000000" , "100000000000000000" , "100000000000000000" , "0" , "200000000000000000" , "5200000000000000000" , "200000000000000000"]
    // opt ["2000000000000000" , "1000000000000000" , "800000000000000" , "800000000000000" , "800000000000000" , "0" , "38000000000000000" , "1500000000000000"]
    // eth ["2000000000000000" , "1000000000000000" , "800000000000000" , "800000000000000" , "800000000000000" , "1500000000000000" , "0" , "1500000000000000"]
    // arb ["2000000000000000" , "1000000000000000" , "800000000000000" , "800000000000000" , "800000000000000" , "1500000000000000" , "38000000000000000" , "0"]
    // boba [ 0, "2000000000000000" , "1000000000000000" , "800000000000000" , "800000000000000" , "800000000000000" , "1500000000000000" , "5000000000000000" , "5000000000000000"]
    // okc [ 0 ,"200000000000000000", "300000000000000000" , "125000000000000000" , "100000000000000000" , "100000000000000000" , "100000000000000000" , "200000000000000000" , "3200000000000000000" , "200000000000000000"]
    // one [ 0 , "6500000000000000000" ,"1300000000000000000", "50000000000000000000" , "26000000000000000000" , "23000000000000000000" , "23000000000000000000" , "23000000000000000000" , "33000000000000000000" , "1215000000000000000000" , "33000000000000000000"]
    
  

  
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});