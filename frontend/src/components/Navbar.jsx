import React, { useState, useEffect } from 'react'
import { ethers } from 'ethers'

import TetherJSON from '../../../truffle_abis/Tether.json';
const TetherABI = TetherJSON.abi;
import RWDJSON from '../../../truffle_abis/RWD.json';
const RWDABI = RWDJSON.abi;
import DecentralBankJSON from '../../../truffle_abis/DecentralBank.json';
const DecentralBankABI = DecentralBankJSON.abi;

const Navbar = () => {
	const [defaultAccount, setDefaultAccount] = useState(null);
	const [userBalance, setUserBalance] = useState(null);
	const [walletConnected, setWalletConnected] = useState(false);

	const [tetherBalance, setTetherBalance] = useState(null);
	// const [rwdBalance, setRWDBalance] = useState(null);
	// const [stakingBalance, setStakingBalance] = useState(null);
	const [tetherContract, setTetherContract] = useState(null);
	// const [rwdContract, setRWDContract] = useState(null);
	// const [decentralBankContract, setDecentralBankContract] = useState(null);

	const tetherContractAddress = '0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512';
	const rwdContractAddress = '0x5FbDB2315678afecb367f032d93F642f64180aa3';
	const decentralBankContractAddress = '0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0';

	const connectWallet = async () => {
		if (window.ethereum) {
			await window.ethereum.request({
				method: 'wallet_requestPermissions',
				params: [{ eth_accounts: {} }],
			});
			const result = await window.ethereum.request({ method: 'eth_requestAccounts' }); accountChanged(result[0]);
			setWalletConnected(true);
		}
		else {
			window.alert("Please Install MetaMask!!!")
		}
	}

	const disconnectWallet = () => {
		setDefaultAccount(null);
		setWalletConnected(false);

		setTetherBalance(null);
		// setRWDBalance(null);
		// setStakingBalance(null);
	};

	const accountChanged = (accountName) => {
		setDefaultAccount(accountName);
		console.log("Account changed:", accountName);
		loadTetherBalance(accountName);
	};

	const loadTetherBalance = async (account) => {
		if (account && tetherContract) {
			try {
				const balance = await tetherContract.balanceOf(account);
				setTetherBalance(ethers.utils.formatUnits(balance, 18));
			} catch (error) {
				console.error('Error fetching Tether balance:', error);
			}
		}
	};

	// useEffect(() => {
	// 	const provider = new ethers.providers.Web3Provider(window.ethereum);
	// 	const signer = provider.getSigner();
	// 	const tetherInstance = new ethers.Contract(tetherContractAddress, TetherABI, signer);
	// 	setTetherContract(tetherInstance);
	// }, []);


	return (
		<nav className='w-full flex py-3 justify-between items-center'>
			<img className='w-[35px] h-[35px] mr-3' src="../assets/logo.png" alt="logo-img" />
			<ul className='w-full list-none items-center flex'>
				<li className='font-semibold text-xs text-white'>YieldVault (Decentralized Banking)</li>
				<li className='mx-auto font-semibold text-xs text-white'>Account Nunmber: {defaultAccount}</li>
				{/* <li className='mx-auto font-semibold text-xs'>Tether Balance: {tetherBalance} mUSDT</li>
				<li className='mx-auto font-semibold text-xs'>RWD Balance: {rwdBalance} RWD</li>
				<li className='mx-auto font-semibold text-xs'>Staking Balance: {stakingBalance} mUSDT</li> */}
			</ul>
			{walletConnected ? (
				<button onClick={disconnectWallet} className='bg-white text-black font-medium rounded-xl px-6 whitespace-nowrap py-2'>
					Disconnect Wallet
				</button>
			) : (
				<button onClick={connectWallet} className='bg-white text-black font-medium rounded-xl px-6 whitespace-nowrap py-2'>
					Connect Wallet
				</button>
			)}
		</nav>
	)
}

export default Navbar
