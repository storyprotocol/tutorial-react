'use client';

import { useRegisterUmlPolicy } from '@story-protocol/react';
import Button from './Button';
import { zeroAddress } from 'viem';

export default function RegisterUMLPolicy() {
  const { writeContractAsync, isPending } = useRegisterUmlPolicy();

  const policyParameters = {
    transferable: true,
    attribution: true,
    commercialUse: true,
    commercialAttribution: false,
    commercializers: [],
    commercialRevShare: 0,
    derivativesAllowed: true,
    derivativesAttribution: true,
    derivativesApproval: false,
    derivativesReciprocal: false,
    derivativesRevShare: 0,
    territories: [],
    distributionChannels: [],
    contentRestrictions: [],
    royaltyPolicy: zeroAddress,
  };

  async function handleClick() {
    await writeContractAsync({
      functionName: 'registerPolicy',
      args: [{ ...policyParameters }],
    });
  }

  if (isPending) return <Button disabled>Pending...</Button>;

  return (
    <div>
      <Button onClick={() => handleClick()} disabled={isPending}>
        Register UML Policy
      </Button>
    </div>
  );
}
