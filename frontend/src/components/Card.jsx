import React from 'react'
import { tetherImg } from '../assets'

const Card = () => {
	return (
		<div className='h-[250px] w-[350px] sm:h-[350px] sm:w-[500px] card bg-lightPurple'>
			<div className='w-full flex py-3 px-6 justify-between items-center'>
				<ul className='w-full list-none items-center flex'>
					<li className='font-semibold'>Stake tokens</li>
					<li className='ml-auto font-semibold'>Balance: 100</li>
				</ul>
			</div>
			<div className='custom-line-1 bg-newPurple'></div>
			<div className='w-full flex py-2 px-10 justify-between items-center'>
				<ul className='w-full list-none items-center flex'>
					<li className='font-semibold text-base'>0</li>
					<div className='flex-grow'></div>
					<img className='w-[30px] h-[30px]' src={ tetherImg } alt="tether-logo" />
					<li className='ml-2 font-semibold text-base'>USDT</li>
				</ul>
			</div>
			<div className='custom-line-1 bg-newPurple'></div>
			<div className='px-5 mt-5 sm:mt-10'>
				<button className='w-full button-1 rounded-lg flex-1 px-2 mb-3 sm:mb-6 py-2 font-semibold'>Deposit</button>
				<button className='w-full button-2 rounded-lg flex-1 px-2 py-2 font-semibold'>Withdraw</button>
			</div>

		</div>
	)
}

export default Card