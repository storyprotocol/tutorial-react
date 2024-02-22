import { createPublicClient, http } from 'viem';
import { sepolia } from 'viem/chains';

export const publicClient = createPublicClient({
  chain: sepolia,
  transport: http(),
});

export function waitForTransactionReceipt({ txHash }: { txHash: string }) {
  return publicClient.waitForTransactionReceipt({
    hash: txHash as `0x${string}`,
  });
}
