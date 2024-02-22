'use client';
import { useAddPolicyToIp, useMintLicense } from '@story-protocol/react';
import { Address, zeroAddress } from 'viem';
import Button from './Button';
import { useAccount } from 'wagmi';
import TextAndButton from '@/utils/TextAndButton';

export default function AddPolicyToIp() {
  const { writeContractAsync, isPending, data: txHash } = useAddPolicyToIp();

  const { address } = useAccount();

  // Add Policy to IP Asset inputs
  // const ipAssetId = undefined; // Update this with the IP ID address you registered from RegisterRootIp.tsx
  const ipAssetId = '0x14142b6799C1227e1E03714CCCa71596a73059bd' as Address; // Example
  const policyId = BigInt(1); // Update this with the policy registered in RegisterPILPolicy.tsx, or use a pre-existing policy that allows for derivatives

  function handleClick() {
    if (policyId === undefined || ipAssetId === undefined) {
      alert('Please input the policyId and ipAssetId');
    }

    writeContractAsync({
      functionName: 'addPolicyToIp',
      args: [ipAssetId, policyId],
    });
  }

  const text = '4. Attach the Policy to your IP Asset';

  return (
    <TextAndButton
      description={text}
      Button={() => (
        <Button onClick={() => handleClick()} disabled={isPending}>
          Add Policy to IP Asset
        </Button>
      )}
      txHash={txHash}
    />
  );
}
