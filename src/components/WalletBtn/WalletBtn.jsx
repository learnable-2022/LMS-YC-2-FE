import React, { useContext, useEffect, useState } from 'react';
import { ethers } from 'ethers';
import MetaMaskOnboarding from "@metamask/onboarding"
import styles from "./walletBtn.module.css"
import AppContext from '../../context/Appcontext';

const WalletBtn = () => {
    const onboarding = new MetaMaskOnboarding()
    const [btnText, setBtnText] = useState("")
    const [walletAddress, setWalletAddress] = useState();
    const [installMetaMask, setInstallMetamask] = useState()
    const {setWalletConnected} = useContext(AppContext)

    const onClickInstallMetaMask = () => {
      onboarding.startOnboarding()
    }
  
    const isMetaMaskInstalled = () => {
      const {ethereum} = window;
      if(ethereum && ethereum.isMetaMask){
        setInstallMetamask(true)
        walletAddress === undefined || walletAddress === null || walletAddress == "" ? setBtnText("Connect Wallet") : setBtnText(walletAddress)
      }else{
        setInstallMetamask(false)
        setBtnText("Please Install a MetaMask Wallet")
      }
      // return Boolean(ethereum && ethereum.isMetaMask)
    }

    async function connectWallet () {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        setWalletAddress(accounts[0])
        console.log(walletAddress)
        setBtnText(walletAddress)
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

