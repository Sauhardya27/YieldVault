import Navbar from './components/Navbar'
import Balance from './components/Balance'
import Card from './components/Card'
import { ethereumImg } from './assets'
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
          <h1 className='text-white font-bold text-3xl sm:text-custom-size header leading-custom-loose sm:-mt-3 ml-12 sm:ml-14'>Unlock Your Crypto Potential with YieldVault</h1>
          <h2 className='text-white font-medium text-lg sm:text-3xl ml-12 sm:ml-14 mb-2 mt-2 sm:mt-0'>Earn More with Every Stake at YieldVault</h2>
        </div>
        <div className='flex mt-10 sm:-mt-14 -ml-4 flex-col-reverse sm:flex-row'>
          <Card />
          <img className='w-[350px] h-[350px] desktop:w-[300px] desktop:h-[300px] md:w-[500px] md:h-[500px] ml-auto md:mr-16 animate-customBounce -mb-0 md:-mt-16' src={ ethereumImg } alt="eth-img" />
        </div>
      </div>


    </>
  )
}

export default App