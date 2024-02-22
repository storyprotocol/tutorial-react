'use client';
import { useMintLicense } from '@story-protocol/react';
import { Address, zeroAddress } from 'viem';
import Button from './Button';
import { useAccount } from 'wagmi';
import TextAndButton from '@/utils/TextAndButton';

export default function MintLicense() {
  const { writeContractAsync, isPending, data: txHash } = useMintLicense();
  const { address } = useAccount();

  // Mint license inputs
  // const ipId = undefined; // Update this with the IP ID address from RegisterRootIp.tsx
  const ipId = '0x14142b6799C1227e1E03714CCCa71596a73059bd'; // Example
  const policyId = BigInt(1); // Update this with a policy that's attached to the IP Asset
  const amount = BigInt(1); // The amount of licenses to mint
  const minter = address; // The recipient of the license
  const royaltyContext = '0x'; // Additional calldata for the royalty policy

  function handleClick() {
    if (ipId === undefined || minter === undefined) {
      alert('Please input the ipId and minter address');
    }

    writeContractAsync({
      functionName: 'mintLicense',
      args: [policyId, ipId, amount, minter as Address, royaltyContext],
    });
  }

  const text = !txHash
    ? '4. Mint a license that allows for derivatives for your IP'
    : '4. Mint a license that allows for derivatives for your IP. A successful transaction will result in a `licenseId` value.';

  return (
    <TextAndButton
      description={text}
      Button={() => (
        <Button onClick={() => handleClick()} disabled={isPending}>
          Mint License
        </Button>
      )}
      txHash={txHash}
    />
  );
}
