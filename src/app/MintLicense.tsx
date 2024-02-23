'use client';
import { useMintLicense } from '@story-protocol/react';
import { Address, zeroAddress } from 'viem';
import Button from './Button';
import { useAccount } from 'wagmi';
import TextAndButton from '@/utils/TextAndButton';

export default function MintLicense() {
  const { writeContractAsync, isPending, data: txHash } = useMintLicense();
  const { address } = useAccount();

  //* NOTE: if the `policyId` has commercialUse = true, then this transaction below will fail because it requires payments.
  //* For the sake of this example, we will keep it simpler (non commercial)

  // Update these
  const ipId = undefined; // Update this with the IP ID address from RegisterRootIp.tsx
  // const ipId = '0x12591729eDd365807C48AC90dc857f6f28b5e448'; // Example
  const policyId = BigInt(4); // Update this with a policy that's attached to the IP Asset

  const amount = BigInt(1); // The amount of licenses to mint
  const minter = address as Address; // The recipient of the license
  const royaltyContext = '0x'; // Additional calldata for the royalty policy

  function handleClick() {
    if (ipId === undefined || minter === undefined) {
      alert('Please input the ipId and minter address');
    }

    writeContractAsync({
      functionName: 'mintLicense',
      args: [policyId, ipId, amount, minter, royaltyContext],
    });
  }

  const text = !txHash
    ? '4. Mint a license for your IP Asset. Update the `ipId` and `policyId` in MintLicense.tsx'
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
