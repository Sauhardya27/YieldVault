# YieldVault DeFi Application

## Introduction

YieldVault is a decentralized finance (DeFi) application that allows users to stake their tokens and earn rewards. The application is built using modern web technologies, including:

* React.js for the frontend
* Hardhat-Ignition for smart contract deployment and testing
* Solidity for smart contract development
* TailwindCSS for styling

## Features

* Connect Wallet: Users can connect their Ethereum wallet (e.g., MetaMask) to interact with the application.
* Stake Tokens: Users can stake Tether (mUSDT) tokens to earn rewards.
* Unstake Tokens: Users can unstake their tokens at any time.
* View Balances: Users can view their Tether balance, staked balance, and reward balance.
* Issue Reward Tokens: The contract owner can issue reward tokens to stakers.

## Tech Stack

**Frontend:** React.js, TailwindCSS<br>
**Backend:** Solidity, Hardhat-Ignition<br>
**Blockchain:** Ethereum

## Installation

### Prerequisites

* Node.js
* Yarn or npm
* MetaMask or any Ethereum wallet
* EVM compatible testnets

### Clone the Repository

Bash<br><br>
```git clone https://github.com/your-username/yieldvault-defi.git```<br>
```cd yieldvault-defi```

### Install dependencies

```npm install```

### Set Up Environment Variables

Create a .env file in the root directory and add the following:

PRIVATE_KEY=your_private_key<br>
SEPOLIA_URL=https://rpc.sepolia.org<br>
SEPOLIA_API_KEY=derived_from_the_above_url<br><br>
Note: Replace your_private_key with your actual private key, (never commit this to version control!)

### Compile, Test and Deploy Contracts

Bash<br><br>
```npx hardhat compile```<br>
```npx hardhat run scripts/deploy.js --network sepolia```<br>
```npx hardhat ignition deploy ./ignition/modules/Deploy.js --network sepolia```<br>

### Run the Application

Bash<br><br>
```npm run dev```<br><br>

## Usage
* Connect Wallet: Click on the "Connect Wallet" button to connect your MetaMask wallet.
* Stake Tokens: Enter the amount of Tether (mUSDT) tokens you want to stake and click "Stake".
* Unstake Tokens: Click "Unstake" to withdraw your staked tokens.
* View Balances: Your Tether balance, staked balance, and reward balance will be displayed.
* Issue Reward Tokens: If you are the contract owner, click "Issue Rewards" to distribute reward tokens to stakers.

## Project Structure

yieldvault-defi/<br>
├── frontend/<br>
│   ├── public/<br>
│   └── src/<br>
│       ├── assets/<br>
│       ├── components/<br>
│       ├── contracts/<br>
│       ├── App.jsx<br>
│       └── index.js<br>
├── contracts/<br>
├── scripts/<br>
├── test/<br>
├── .env<br>
├── hardhat.config.js<br>

## Smart Contracts

* Tether.sol: ERC-20 token contract for Tether (mUSDT).
* RWD.sol: ERC-20 token contract for reward tokens (RWD).
* DecentralBank.sol: Contract for staking and issuing reward tokens.

## UI Components
* Navbar.jsx: Component for the navigation bar.
* Balance.jsx: Component to display user balances.
* Card.jsx: Component for staking and unstaking tokens.

### Responsive Design

The application uses TailwindCSS for responsive design, ensuring a seamless experience on both desktop and mobile devices.<br><br>

### Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes
