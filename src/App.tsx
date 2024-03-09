import { useState, useEffect } from 'react';
import Web3 from 'web3';
import './App.css';

function App() {
  const [latestBlockNumber, setLatestBlockNumber] = useState<number | null>(null);
  const [usdtBalance, setUsdtBalance] = useState<number | null>(null);
  const usdtContractAddress: string = '0xdac17f958d2ee523a2206206994597c13d831ec7';
  const ali_infura_url: string = 'https://mainnet.infura.io/v3/64be81cefae846b6909e5557cccc514c';

  const web3 = new Web3(ali_infura_url);

  async function fetchLatestBlockNumber(): Promise<void> {
    try {
      const blockNumber: bigint = await web3.eth.getBlockNumber();
      const blockNumberAsNumber = Number(blockNumber);
      setLatestBlockNumber(blockNumberAsNumber);

    } catch (error) {
      console.error('Error fetching block number: ', error);
    }
  }

  async function fetchUsdtBalance(): Promise<void> {
    try {
      const balance: bigint = await web3.eth.getBalance(usdtContractAddress);
      const balanceAsString = Number(balance);
      setUsdtBalance(balanceAsString);
    } catch (error) {
      console.error('Error fetching USDT balance: ', error);
    }
  }

  useEffect(() => {
    fetchLatestBlockNumber();
    fetchUsdtBalance();
  }, [latestBlockNumber, usdtBalance]);

  return (
    <div className="App">
      <h1>Ethereum Mainnet</h1>
      {latestBlockNumber !== null ? (
        <>
          <p>Last block number: {latestBlockNumber}</p>
          {usdtBalance !== null && <p>USDT balance: {usdtBalance} USDT</p>}
        </>
      ) : (
        <div className="loading-message">
          <p>Loading...</p>
          <div className="loading-spinner"></div>
        </div>
      )}
    </div>
  );
}

export default App;