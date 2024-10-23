export type ChainConfig = {
  chainId: number;
  chainName: string;
  symbol: string;
  rpcUrls: string[];
  decimals: number;
  networkPath: string;
};

export const chainConfig = {
  chainId: 7171,
  chainName: "Bitrock",
  symbol: "BROCK",
  rpcUrls: ["https://connect.bit-rock.io"],
  decimals: 18,
  networkPath: "/bitrock/mainnet/",
};

export function useChainConfig(): ChainConfig {
  return chainConfig;
}
