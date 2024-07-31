import React from 'react'

const Balance = ({stakingBalance, rwdBalance}) => {
	return (
		<>
			<div className='w-full flex py-1 px-10 sm:px-32 justify-between items-center'>
				<ul className='w-full list-none items-center flex justify-between'>
					<li className='font-medium text-lg sm:text-2xl text-white flex-grow text-left'>Staking balance</li>
					<li className='font-medium text-lg sm:text-2xl text-white flex-grow text-right'>Reward balance</li>
				</ul>
			</div>
			<div className='custom-line bg-newPurple'></div>
			<div className='w-full flex py-3 px-14 sm:px-44 justify-between items-center'>
				<ul className='w-full list-none items-center justify-between flex'>
					<li className='font-semibold text-xs sm:text-lg text-white'>{stakingBalance} USDT</li>
					<li className='font-semibold text-xs sm:text-lg text-white'>{rwdBalance} RWD</li>
				</ul>
			</div>
		</>
	)
}

export default Balance