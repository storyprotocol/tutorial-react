'use client';
import { useMintLicense } from '@story-protocol/react';
import { zeroAddress } from 'viem';
import Button from './Button';
import { useAccount } from 'wagmi';

export default function MintLicense() {
  const { writeContractAsync, isPending } = useMintLicense();
  const { address } = useAccount();

  // Mint license inputs
  const policyId = BigInt(0); // Update this with the policy registered in RegisterUMLPolicy.tsx
  const licensorIp = address; // Update this with the IP ID address from RegisterRootIp.tsx
  const amount = BigInt(1); // The amount of licenses to mint
  const minter = address; // The recipient of the license

  function handleClick() {
    if (!minter || !licensorIp) return;

    writeContractAsync({
      functionName: 'mintLicense',
      args: [policyId, licensorIp, amount, minter],
    });
  }

  return (
    <div>
      <Button onClick={() => handleClick()} disabled={isPending}>
        Mint License
      </Button>
    </div>
  );
}
