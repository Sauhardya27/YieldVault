import React, { useState, useEffect } from 'react'
import { ethers } from 'ethers'
import { logo } from '../assets';

const Navbar = ({ defaultAccount, walletConnected, connectWallet, disconnectWallet }) => {
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