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
  const ipId = undefined; // Update this with the IP ID address you registered from RegisterRootIp.tsx
  // const ipId = '0x12591729eDd365807C48AC90dc857f6f28b5e448' as Address; // Example
  const policyId = BigInt(4); // Update this with the policy registered in RegisterPILPolicy.tsx, or use a pre-existing policy that allows for derivatives

  function handleClick() {
    if (policyId === undefined || ipId === undefined) {
      alert('Please input the policyId and ipId');
    }

    writeContractAsync({
      functionName: 'addPolicyToIp',
      args: [ipId, policyId],
    });
  }

  const text =
    ipId === undefined
      ? '4. Update `ipId` and `policyId` in AddPolicyToIpAsset.tsx. You can use an existing `policyId` if you did not create one. '
      : '4. Attach the Policy to your IP Asset';

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
