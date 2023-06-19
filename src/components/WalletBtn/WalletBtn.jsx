import React, { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import MetaMaskOnboarding from "@metamask/onboarding"

const WalletBtn = () => {
    const onboarding = new MetaMaskOnboarding()
    const [walletConnected, setWalletConnected] = useState(false);
    const [btnText, setBtnText] = useState("")
    const [walletAddress, setWalletAddress] = useState();
    const [installMetaMask, setInstallMetamask] = useState()

    const onClickInstallMetaMask = () => {
      onboarding.startOnboarding()
    }
  
    const isMetaMaskInstalled = () => {
      const {ethereum} = window;
      if(ethereum && ethereum.isMetaMask){
        setInstallMetamask(true)
        setBtnText("Connect Wallet")
      }else{
        setInstallMetamask(false)
        setBtnText("Please Install a MetaMask Wallet")
      }
      // return Boolean(ethereum && ethereum.isMetaMask)
    }

    async function connectWallet () {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      // const walletAddress = accounts[0]
      // console.log(walletAddress)
        setWalletAddress(accounts[0])
        console.log(walletAddress)
        setBtnText(walletAddress)
      }catch (error){
        console.log("Error Connecting to Metamask", error)
      }
      
    }

    useEffect(() => {
      isMetaMaskInstalled()
      // MetaMaskClientCheck();
    }, [walletAddress])
;

  return (
    <div>
      <button onClick = {!installMetaMask ? onClickInstallMetaMask : connectWallet}>{btnText}</button>
      {/* <button onClick = {installMetaMask ? onClickInstal : ""}>{btnText}</button> */}
    </div>
  );
};

export default WalletBtn;

