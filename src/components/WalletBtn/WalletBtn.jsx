import React, { useContext, useEffect, useState } from 'react';
import { ethers } from 'ethers';
import MetaMaskOnboarding from "@metamask/onboarding"
import styles from "./walletBtn.module.css"
import AppContext from '../../context/Appcontext';

const WalletBtn = () => {
    const onboarding = new MetaMaskOnboarding()
    const [btnText, setBtnText] = useState("")
    const [installMetaMask, setInstallMetamask] = useState()
    const {setWalletConnected, walletAddress, setWalletAddress} = useContext(AppContext)

    const onClickInstallMetaMask = () => {
      onboarding.startOnboarding()
    }
  
    const isMetaMaskInstalled = () => {
      const {ethereum} = window;
      if(ethereum && ethereum.isMetaMask){
        setInstallMetamask(true)
        walletAddress === undefined || walletAddress === null || walletAddress == "" ? setBtnText("Connect Wallet") : setBtnText("Wallet Connected")
      }else{
        setInstallMetamask(false)
        setBtnText("Install a MetaMask Wallet")
      }
      // return Boolean(ethereum && ethereum.isMetaMask)
    }

    async function connectWallet () {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        setWalletAddress(accounts[0])
        console.log(walletAddress)
        setWalletConnected(true)
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
      <button onClick = {!installMetaMask ? onClickInstallMetaMask : connectWallet} className = {styles.walletBtn}>{btnText}</button>
    </div>
  );
};

export default WalletBtn;

