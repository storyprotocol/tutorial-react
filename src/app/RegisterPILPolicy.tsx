'use client';

import { useRegisterPILPolicy } from '@story-protocol/react';
import Button from './Button';
import { Address, zeroAddress } from 'viem';
import TextAndButton from '@/utils/TextAndButton';

export default function RegisterPILPolicy() {
  const {
    writeContractAsync,
    isPending,
    data: txHash,
  } = useRegisterPILPolicy();

  const policyParameters = {
    attribution: true, // Whether or not attribution is required when reproducing the work
    commercialUse: false, // Whether or not the work can be used commercially
    commercialAttribution: false, // Whether or not attribution is required when reproducing the work commercially
    commercializerChecker: zeroAddress, // commercializers that are allowed to commercially exploit the work. If zero address, then no restrictions is enforced
    commercializerCheckerData: '0x' as `0x${string}`, // Additional calldata for the commercializer checker
    commercialRevShare: 0, // Percentage of revenue that must be shared with the licensor
    derivativesAllowed: true, // Whether or not the licensee can create derivatives of his work
    derivativesAttribution: true, // Whether or not attribution is required for derivatives of the work
    derivativesApproval: false, // Whether or not the licensor must approve derivatives of the work before they can be linked to the licensor IP ID
    derivativesReciprocal: false, // Whether or not the licensee must license derivatives of the work under the same terms
    territories: ['USA', 'CANADA'], // List of territories where the license is valid. If empty, global
    distributionChannels: [], // List of distribution channels where the license is valid. Empty if no restrictions.
    contentRestrictions: [], //
  };

  const registrationParams = {
    transferable: true, // Whether or not attribution is required when reproducing the work
    royaltyPolicy: zeroAddress, // Address of a royalty policy contract that will handle royalty payments
    mintingFee: BigInt(0),
    mintingFeeToken: zeroAddress,
    policy: policyParameters,
  };

  async function handleClick() {
    await writeContractAsync({
      functionName: 'registerPolicy',
      args: [registrationParams],
    });
  }

  const text = !txHash
    ? '3. (Optional) Register a PIL Policy.'
    : '3. (Optional) Register a PIL Policy. A successful transaction will result in a `policyId` value.';

  return (
    <TextAndButton
      description={text}
      Button={() => (
        <Button onClick={() => handleClick()} disabled={isPending}>
          {isPending ? 'Confirm in wallet' : 'Register PIL Policy'}
        </Button>
      )}
      txHash={txHash}
    />
  );
}
