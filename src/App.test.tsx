import { render, screen } from '@testing-library/react';
import App from './App';
import Web3 from 'web3';

describe('renders App component with block number and USDT balance', () => {
  it('renders', () => {
    render(<App />);

    const learnReactLink = screen.getByText(/Ethereum Mainnet/i);
    expect(learnReactLink).toBeInTheDocument();

    const loadingMessage = screen.getByText(/Loading.../);
    expect(loadingMessage).toBeInTheDocument();

    const blockNumber = screen.getByText(/Last block number: \d+/);
    expect(blockNumber).toBeInTheDocument();

    const usdtBalance = screen.getByText(/USDT balance: \d+ USDT/);
    expect(usdtBalance).toBeInTheDocument();
  });
});