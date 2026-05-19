import { ethers } from 'ethers';

const abi = ['function storePropertyHash(string calldata propertyHash) external returns (bytes32)'];

export const writeHashToBlockchain = async (propertyHash) => {
  const { ETH_RPC_URL, ETH_PRIVATE_KEY, PROPERTY_REGISTRY_CONTRACT } = process.env;
  if (!ETH_RPC_URL || !ETH_PRIVATE_KEY || !PROPERTY_REGISTRY_CONTRACT) return null;

  const provider = new ethers.JsonRpcProvider(ETH_RPC_URL);
  const wallet = new ethers.Wallet(ETH_PRIVATE_KEY, provider);
  const contract = new ethers.Contract(PROPERTY_REGISTRY_CONTRACT, abi, wallet);

  const tx = await contract.storePropertyHash(propertyHash);
  const receipt = await tx.wait();
  return receipt?.hash || tx.hash;
};
