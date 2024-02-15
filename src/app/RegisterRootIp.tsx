'use client';
import { useRegisterRootIp } from '@story-protocol/react';
import { stringToHex } from 'viem';
import Button from './Button';

export default function RegisterRootIp() {
  const { writeContract, isPending } = useRegisterRootIp();

  // Register root IP inputs
  const policyId = BigInt(0); // Policy ID from RegisterUMLPolicy.tsx
  const nftContract = process.env.NEXT_PUBLIC_MINT_NFT_ADDRESS as `0x${string}`; // Your IP's contract address
  const tokenId = BigInt(8); // Your IP's token ID
  const ipName = 'IP Man'; // Optional name for your IP
  const contentHash = stringToHex('foobar', { size: 32 }); // Optional content hash
  const externalURL = 'https://example.com'; // Optional external URL

  function handleClick() {
    writeContract({
      functionName: 'registerRootIp',
      args: [policyId, nftContract, tokenId, ipName, contentHash, externalURL],
    });
  }

  if (isPending) return <Button disabled>Pending...</Button>;

  return (
    <div>
      <Button onClick={() => handleClick()} disabled={isPending}>
        Register IP
      </Button>
    </div>
  );
}
