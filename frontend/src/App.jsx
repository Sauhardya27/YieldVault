import Navbar from './components/Navbar'
import Balance from './components/Balance'
import Card from './components/Card'
import './index.css'

function App() {

  return (
    <>
      <div className='poppins-regular'>
        <div className='w-full px-6 flex'>
          <Navbar />
        </div>
        <div className='custom-line bg-newPurple'></div>
        <div className='w-full'>
          <Balance />
        </div>
        <div>
          <h1 className='text-white font-bold text-custom-size header leading-custom-loose -mt-3 ml-14'>Unlock Your Crypto Potential with YieldVault</h1>
          <h2 className='text-white font-medium text-3xl ml-14 mb-2'>Earn More with Every Stake at YieldVault</h2>
        </div>
        <div className='flex -mt-14 -ml-4'>
          <Card />
          <img className='w-[500px] h-[500px] -mt-16 ml-auto mr-16 animate-customBounce' src="src/assets/Ethereum.png" alt="eth-img" />
        </div>
      </div>


    </>
  )
}

export default App