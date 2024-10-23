export type ChainConfig = {
  chainId: number;
  chainName: string;
  symbol: string;
  rpcUrls: string[];
  decimals: number;
  networkPath: string;
};

export const chainConfig = {
  chainId: 1213,
  chainName: "Popcateum",
  symbol: "POP",
  rpcUrls: ["https://dataseed.popcateum.org"],
  decimals: 18,
  networkPath: "",
};

export function useChainConfig(): ChainConfig {
  return chainConfig;
}
