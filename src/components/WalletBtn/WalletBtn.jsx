import React, { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import MetaMaskOnboarding from "@metamask/onboarding"

const WalletBtn = () => {
    const onboarding = new MetaMaskOnboarding()
    const [walletConnected, setWalletConnected] = useState(false);
    const [btnText, setBtnText] = useState("")
    const [account, setAccount] = useState('');
    const [installMetaMask, setInstallMetamask] = useState()

    const onClickInstallMetaMask = () => {
      onboarding.startOnboarding()
    }
  
    const isMetaMaskInstalled = () => {
      const {ethereum} = window;
      if(ethereum && ethereum.isMetaMask){
        setInstallMetamask(true)
      }else{
        setInstallMetamask(false)
      }
      // return Boolean(ethereum && ethereum.isMetaMask)
    }

    async function connectWallet () {
      await window.ethereum.request({ method: 'eth_requestAccounts' });
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const connectedAccount = await signer.getAddress();
      setBtnText("Connected")
      setAccount(connectedAccount);
      setWalletConnected(true);
    }

    const MetaMaskClientCheck = () => {
      if(!installMetaMask) {
        setBtnText("Please Install a MetaMask Wallet")
      }else {
        connectWallet()
        setBtnText(account)
      }
    }

    useEffect(() => {
      isMetaMaskInstalled()
      MetaMaskClientCheck();
    })
;

  return (
    <div>
      <button onClick = {!installMetaMask ? onClickInstallMetaMask : ""}>{btnText}</button>
    </div>
  );
};

export default WalletBtn;

