
export type NetworkType = "EVM" | "SOLANA" | "TON";

export type BlockchainNetwork = {
  id: string;
  name: string;
  type: NetworkType;
  chainId?: number;
  explorer: string;
  nativeCurrency: string;
};

export const BLOCKCHAINS: BlockchainNetwork[] = [
  {
    id: "ethereum",
    name: "Ethereum",
    type: "EVM",
    chainId: 1,
    explorer: "https://etherscan.io",
    nativeCurrency: "ETH"
  },
  {
    id: "bsc",
    name: "BNB Chain",
    type: "EVM",
    chainId: 56,
    explorer: "https://bscscan.com",
    nativeCurrency: "BNB"
  },
  {
    id: "polygon",
    name: "Polygon",
    type: "EVM",
    chainId: 137,
    explorer: "https://polygonscan.com",
    nativeCurrency: "POL"
  },
  {
    id: "arbitrum",
    name: "Arbitrum",
    type: "EVM",
    chainId: 42161,
    explorer: "https://arbiscan.io",
    nativeCurrency: "ETH"
  },
  {
    id: "base",
    name: "Base",
    type: "EVM",
    chainId: 8453,
    explorer: "https://basescan.org",
    nativeCurrency: "ETH"
  },
  {
    id: "optimism",
    name: "Optimism",
    type: "EVM",
    chainId: 10,
    explorer: "https://optimistic.etherscan.io",
    nativeCurrency: "ETH"
  },
  {
    id: "avalanche",
    name: "Avalanche",
    type: "EVM",
    chainId: 43114,
    explorer: "https://snowtrace.io",
    nativeCurrency: "AVAX"
  },
  {
    id: "solana",
    name: "Solana",
    type: "SOLANA",
    explorer: "https://solscan.io",
    nativeCurrency: "SOL"
  },
  {
    id: "ton",
    name: "TON",
    type: "TON",
    explorer: "https://tonscan.org",
    nativeCurrency: "TON"
  }
];

export function getNetwork(id: string) {
  return BLOCKCHAINS.find((network) => network.id === id);
}
