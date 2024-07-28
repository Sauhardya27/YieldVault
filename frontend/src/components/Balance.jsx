import React from 'react'

const Balance = () => {
	return (
		<>
			<div className='w-full flex py-1 px-32 justify-between items-center'>
				<ul className='w-full list-none items-center flex'>
					<li className='font-medium text-2xl text-white'>Staking balance</li>
					<li className='ml-auto font-medium text-2xl text-white'>Reward balance</li>
				</ul>
			</div>
			<div className='custom-line bg-newPurple'></div>
			<div className='w-full flex py-3 px-56 justify-between items-center'>
				<ul className='w-full list-none items-center flex'>
					<li className='font-semibold text-lg text-white'>0 USDT</li>
					<li className='ml-auto font-semibold text-lg text-white'>0 RWD</li>
				</ul>
			</div>
		</>
	)
}

export default Balance