import { parseEther } from 'ethers/lib/utils';
import fs from 'fs';
import { ethers } from "hardhat";
import fetch from "isomorphic-unfetch"
async function main() {
    const response = await fetch("https://mainnet.bridgeserver.online/")
    const data = await response.json()
    const network = data.networks
    let settingAddress;
    for(let i = 0; i < network.length; i++) {
        if(network[i].chain_id == "10"){
            settingAddress = network[i].settings_address;
        }
    }
    const fees = fs.readFileSync("./netWorkFees/eth.json")
    const config = JSON.parse(fees.toString())
    const chainId = []
    const bnbValue = []
    /// making sure you don't add the chainId of the chain
    for(let i = 0; i < config.length; i++){
        if(config[i].chainId != "10"){
            chainId.push(Number(config[i].chainId))
            bnbValue.push(parseEther(config[i].bnbValue.toFixed(8)))
        }
    }
    const settingsContract = await ethers.getContractAt("Settings", settingAddress)
    await settingsContract.setNetworkSupportedChains(
        chainId,bnbValue,true
    )
    console.log("updated fee on Optimism successfully")
}


main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});