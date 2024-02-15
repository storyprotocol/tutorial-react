'use client';

import { useRegisterDerivativeIp } from '@story-protocol/react';
import Button from './Button';
import { stringToHex } from 'viem';

export default function RegisterDerivativeIp() {
  const { writeContractAsync, isPending } = useRegisterDerivativeIp();

  const licenseIds = [BigInt(0)]; // The license ID from MintLicense.tsx
  const nftContract = process.env.NEXT_PUBLIC_MINT_NFT_ADDRESS as `0x${string}`; // The derivative IP's contract address
  const nftTokenId = BigInt(5); // The derivative IP's token ID
  const ipName = 'Derivative';
  const contentHash = stringToHex('0xderivative', { size: 32 });
  const uri = 'ipfs.io/derivative';
  const minRoyalty = 5;

  async function handleClick() {
    await writeContractAsync({
      functionName: 'registerDerivativeIp',
      args: [
        licenseIds,
        nftContract,
        nftTokenId,
        ipName,
        contentHash,
        uri,
        minRoyalty,
      ],
    });
  }

  if (isPending) return <Button disabled>Pending...</Button>;

  return (
    <div>
      <Button onClick={() => handleClick()} disabled={isPending}>
        Register Derivative IP
      </Button>
    </div>
  );
}
