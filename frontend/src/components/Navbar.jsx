import React, { useState, useEffect } from 'react'
import { ethers } from 'ethers'
import { logo } from '../assets';

import TetherJSON from '../contracts/Tether.json';
const TetherABI = TetherJSON.abi;
import RWDJSON from '../contracts/RWD.json';
const RWDABI = RWDJSON.abi;
import DecentralBankJSON from '../contracts/DecentralBank.json';
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

	const tetherContractAddress = '0x204e4Db87ff1baB677bbFfD3bd28bB0876196672';
	const rwdContractAddress = '0x8fbe03b25B9e59C47E777850D0eC39956f965E60';
	const decentralBankContractAddress = '0xFFE0Db4c450c4A0Ab2FFCEb34f44216041f7fEbd';

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

				const provider = new ethers.providers.Web3Provider(window.ethereum);
				const signer = provider.getSigner();

				const tetherInstance = new ethers.Contract(tetherContractAddress, TetherABI, signer);
				setTetherContract(tetherInstance);

				const balance = await tetherInstance.balanceOf(result[0]);
				setTetherBalance(ethers.utils.formatUnits(balance, 18));
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
		// setRWDBalance(null);
		// setStakingBalance(null);
	};

	const accountChanged = (accountName) => {
		setDefaultAccount(accountName);
		console.log("Account changed:", accountName);
		//loadTetherBalance(accountName);
	};

	// const loadTetherBalance = async (account) => {
	// 	if (account && tetherContract) {
	// 		try {
	// 			const balance = await tetherContract.balanceOf(account);
	// 			setTetherBalance(ethers.utils.formatUnits(balance, 18));
	// 		} catch (error) {
	// 			console.error('Error fetching Tether balance:', error);
	// 		}
	// 	}
	// };

	// useEffect(() => {
	// 	const provider = new providers.Web3Provider(window.ethereum);
	// 	const signer = provider.getSigner();
	// 	const tetherInstance = new ethers.Contract(tetherContractAddress, TetherABI, signer);
	// 	setTetherContract(tetherInstance);
	// }, []);


	return (
		<nav className='w-full flex py-3 justify-between items-center'>
			<ul className='w-full list-none items-center flex flex-col sm:flex-row'>
				<div className='flex mb-1 sm:mb-0'>
					<img className='w-[35px] h-[35px] mr-3' src={ logo } alt="logo-img" />
					<li className='font-semibold text-xs text-white mt-2'>YieldVault (Decentralized Banking)</li>
				</div>
				<li className='mx-auto font-semibold text-xs text-white mb-3 sm:mb-0'>
					<span className='block sm:inline text-center'>Account Number: </span>
					<span className='block sm:inline'>{defaultAccount}</span>
				</li>
				{/* <li className='mx-auto font-semibold text-xs'>Tether Balance: {tetherBalance} mUSDT</li>
				<li className='mx-auto font-semibold text-xs'>RWD Balance: {rwdBalance} RWD</li>
				<li className='mx-auto font-semibold text-xs'>Staking Balance: {stakingBalance} mUSDT</li> */}

				<div className='inline sm:hidden'>
					{walletConnected ? (
						<button onClick={disconnectWallet} className='bg-white text-black font-medium rounded-xl px-4 whitespace-nowrap py-2'>
							Disconnect Wallet
						</button>
					) : (
						<button onClick={connectWallet} className='bg-white text-black font-medium rounded-xl px-4 whitespace-nowrap py-2'>
							Connect Wallet
						</button>
					)}
				</div>
			</ul>
			<div className='hidden sm:block'>
				{walletConnected ? (
					<button onClick={disconnectWallet} className='bg-white text-black font-medium rounded-xl px-6 whitespace-nowrap py-2'>
						Disconnect Wallet
					</button>
				) : (
					<button onClick={connectWallet} className='bg-white text-black font-medium rounded-xl px-6 whitespace-nowrap py-2'>
						Connect Wallet
					</button>
				)}
			</div>
		</nav>
	)
}

export default Navbar