import type { ChainConfig } from '../features/data/apis/config-types';

export const config: Record<ChainConfig['id'], Omit<ChainConfig, 'id'>> = {
 
  fantom: {
    name: 'Fantom',
    chainId: 250,
    rpc: ['https://rpc.ankr.com/fantom'],
    explorerUrl: 'https://ftmscan.com',
    multicallAddress: '0xC9F6b1B53E056fd04bE5a197ce4B2423d456B982',
    appMulticallContractAddress: '0xdd54c53d169aCFC53cAf08F1778A492Ff5Aea258',
    providerName: 'fantom',
    walletSettings: {
      chainId: `0x${parseInt('250', 10).toString(16)}`,
      chainName: 'Fantom Opera',
      nativeCurrency: {
        name: 'FTM',
        symbol: 'FTM',
        decimals: 18,
      },
      rpcUrls: ['https://rpc.ankr.com/fantom'],
      blockExplorerUrls: ['https://ftmscan.com/'],
    },
    gas: {
      type: 'eip1559',
      blocks: 100,
      percentile: 0.6,
      priorityMinimum: '1000000000',
      baseSafetyMargin: 0.1,
    },
    stableCoins: [
      'USDC',
      'USDT',
      'DAI',
      'fUSDT',
      'MIM',
      'FRAX',
      'MAI',
      'DOLA',
      'TUSD',
      'UST',
      'asUSDC',
      'LAMBDA',
      'sfUSDC',
      'USTw',
      'USTaxl',
      'USDL',
      'TOR',
      'BUSD',
      'alUSD',
    ],
  },
};

export const chains: string[] = Object.keys(config);
