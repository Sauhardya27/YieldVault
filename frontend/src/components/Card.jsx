import React, { useRef } from 'react'
import { tetherImg } from '../assets'
import { ethers } from 'ethers'

const Card = ({ tetherBalance, stakeTokens, unstakeTokens }) => {
	const inputRef = useRef(null);

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(inputRef.current); // Check if this is null
		if (inputRef.current) {
			let amount = inputRef.current.value;
			stakeTokens(ethers.parseUnits(amount, 18));
		} else {
			console.error("inputRef.current is null");
		}
	}

	const handleWithdraw = (e) => {
		e.preventDefault();
		unstakeTokens();
	};

	return (
		<div className='h-[250px] w-[330px] sm:h-[350px] sm:w-[500px] card bg-lightPurple'>
			<form onSubmit={handleSubmit}>
				<div className='w-full flex py-3 px-6 justify-between items-center'>
					<ul className='w-full list-none items-center flex'>
						<li className='font-semibold'>Stake tokens</li>
						<li className='ml-auto font-semibold'>Balance: {tetherBalance}</li>
					</ul>
				</div>
				<div className='custom-line-1 bg-newPurple'></div>
				<div className='w-full flex py-2 px-10 justify-between items-center'>
					<ul className='w-full list-none items-center flex'>
						<input ref={inputRef} type="text" placeholder='0' required className='bg-lightPurple border-none focus:outline-none font-semibold text-base text-white w-20 h-8 px-2 py-1' />
						<div className='flex-grow'></div>
						<img className='w-[30px] h-[30px]' src={tetherImg} alt="tether-logo" />
						<li className='ml-2 font-semibold text-base'>USDT</li>
					</ul>
				</div>
				<div className='custom-line-1 bg-newPurple'></div>
				<div className='px-5 mt-5 sm:mt-10'>
					<button type="submit" className='w-full button-1 rounded-lg flex-1 px-2 mb-3 sm:mb-6 py-2 font-semibold'>Deposit</button>
					<button onClick={handleWithdraw} className='w-full button-2 rounded-lg flex-1 px-2 py-2 font-semibold'>Withdraw</button>
				</div>
			</form>
		</div>
	)
}

export default Card