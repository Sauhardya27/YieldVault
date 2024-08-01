import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Balance from './components/Balance'
import Card from './components/Card'
import { ethereumImg } from './assets'
import './index.css'
import { ethers } from 'ethers'

import TetherJSON from './contracts/Tether.json';
const TetherABI = TetherJSON.abi;
import RWDJSON from './contracts/RWD.json';
const RWDABI = RWDJSON.abi;
import DecentralBankJSON from './contracts/DecentralBank.json';
const DecentralBankABI = DecentralBankJSON.abi;

function App() {

  const [defaultAccount, setDefaultAccount] = useState(null);
  const [userBalance, setUserBalance] = useState(null);
  const [walletConnected, setWalletConnected] = useState(false);

  const [tetherBalance, setTetherBalance] = useState(null);
  const [rwdBalance, setRWDBalance] = useState(null);
  const [stakingBalance, setStakingBalance] = useState(null);

  const [tetherContract, setTetherContract] = useState(null);
  const [rwdContract, setRWDContract] = useState(null);
  const [decentralBankContract, setDecentralBankContract] = useState(null);

  const tetherContractAddress = '0xD407Ddc69b8dCb3EbD7785fCE34f0fE4f224d7c1';
  const rwdContractAddress = '0x907d6b01eE3B1754E434bD75A8730878974A15ab';
  const decentralBankContractAddress = '0xF08353C30936bce6ab770babB4f3d8021037EaBD';

  const connectWallet = async () => {
    try {
      if (window.ethereum) {
        await window.ethereum.request({
          method: 'wallet_requestPermissions',
          params: [{ eth_accounts: {} }],
        });
        const result = await window.ethereum.request({ method: 'eth_requestAccounts' });
        accountChanged(result[0]);
        setWalletConnected(true);

        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();

        const tetherInstance = new ethers.Contract(tetherContractAddress, TetherABI, signer);
        setTetherContract(tetherInstance);

        const balance = await tetherInstance.balanceOf(result[0]);
        setTetherBalance(ethers.formatUnits(balance, 18));

        const rwdInstance = new ethers.Contract(rwdContractAddress, RWDABI, signer);
        setRWDContract(rwdInstance);

        const rwdBalance = await rwdInstance.balanceOf(result[0]);
        setRWDBalance(ethers.formatUnits(rwdBalance, 18));

        const decentralBankInstance = new ethers.Contract(decentralBankContractAddress, DecentralBankABI, signer);
        setDecentralBankContract(decentralBankInstance);

        const stakingBalance = await fetchStakingBalance(result[0], decentralBankInstance);
        setStakingBalance(stakingBalance);
      } else {
        window.alert("Please Install MetaMask!!!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const disconnectWallet = () => {
    setDefaultAccount(null);
    setWalletConnected(false);

    setTetherBalance(null);
    setRWDBalance(null);
    setStakingBalance(null);
  };

  const accountChanged = (accountName) => {
    setDefaultAccount(accountName);
    console.log("Account changed:", accountName);
  };

  const fetchStakingBalance = async (account, decentralBankInstance) => {
    const staking_Balance = await decentralBankInstance.stakingBalance(account);
    console.log("Fetched staking balance:", ethers.formatUnits(staking_Balance, 18));
    return ethers.formatUnits(staking_Balance, 18);
  };

  const updateBalances = async () => {
    const updatedStakingBalance = await fetchStakingBalance(defaultAccount, decentralBankContract);
    setStakingBalance(updatedStakingBalance);

    const balance = await tetherContract.balanceOf(defaultAccount);
    setTetherBalance(ethers.formatUnits(balance, 18));
  };

  const stakeTokens = async (amount) => {
    console.log("Staking tokens with amount:", amount);
    const approveTx = await tetherContract.approve(decentralBankContractAddress, amount);
    await approveTx.wait();

    const depositTx = await decentralBankContract.depositTokens(amount);
    await depositTx.wait();

    await updateBalances();
  };

  const unstakeTokens = async () => {
    console.log("Unstaking tokens");
    const unstakeTx = await decentralBankContract.unstakeTokens();
    await unstakeTx.wait();

    await updateBalances();
  };

  return (
    <>
      <div className='poppins-regular'>
        <div className='w-full px-6 flex'>
          <Navbar
            defaultAccount={defaultAccount}
            walletConnected={walletConnected}
            connectWallet={connectWallet}
            disconnectWallet={disconnectWallet} />
        </div>
        <div className='custom-line bg-newPurple'></div>
        <div className='w-full'>
          <Balance
            rwdBalance={rwdBalance}
            stakingBalance={stakingBalance} />
        </div>
        <div>
          <h1 className='text-white font-bold text-3xl sm:text-custom-size header leading-custom-loose sm:-mt-3 ml-12 sm:ml-14'>Unlock Your Crypto Potential with YieldVault</h1>
          <h2 className='text-white font-medium text-lg sm:text-3xl ml-12 sm:ml-14 mb-2 mt-2 sm:mt-0'>Earn More with Every Stake at YieldVault</h2>
        </div>
        <div className='flex mt-10 sm:-mt-14 -ml-4 flex-col-reverse sm:flex-row'>
          <Card tetherBalance={tetherBalance} stakeTokens={stakeTokens} unstakeTokens={unstakeTokens} />
          <img className='w-[350px] h-[350px] desktop:w-[300px] desktop:h-[300px] md:w-[500px] md:h-[500px] ml-auto md:mr-16 animate-customBounce -mb-0 md:-mt-16' src={ethereumImg} alt="eth-img" />
        </div>
      </div>
    </>
  )
}

export default App