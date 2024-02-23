'use client';

import { useRegisterDerivativeIp } from '@story-protocol/react';
import Button from './Button';
import { stringToHex } from 'viem';
import TextAndButton from '@/utils/TextAndButton';

export default function RegisterDerivativeIp() {
  const {
    writeContractAsync,
    isPending,
    data: txHash,
  } = useRegisterDerivativeIp();

  // Update these
  const licenseIds = [undefined]; // An array of license IDs. In this case, just the single licenseId from MintLicense.tsx.
  // const licenseIds = [BigInt(3)]; // Example
  const nftTokenId = undefined; // The derivative IP's token ID.
  // const nftTokenId = BigInt(5); // The derivative IP's token ID.
  const nftContract = '0x7ee32b8b515dee0ba2f25f612a04a731eec24f49'; // The derivative IP's contract address

  const ipName = 'Derivative';
  const contentHash = stringToHex('0x', { size: 32 });
  const externalUrl = 'ipfs.io/derivative';
  const royaltyContext = '0x';

  async function handleClick() {
    if (licenseIds?.[0] === undefined || nftTokenId === undefined) {
      alert(
        'Please update licenseIds and nftTokenId in RegisterDerivativeIp.tsx'
      );
    }

    await writeContractAsync({
      functionName: 'registerDerivativeIp',
      args: [
        licenseIds,
        nftContract,
        nftTokenId,
        ipName,
        contentHash,
        externalUrl,
        royaltyContext,
      ],
    });
  }

  const text =
    '6. Use the minted license to register the derivative IP. The licenseId parameter is the token ID of the license';

  return (
    <TextAndButton
      description={text}
      Button={() => (
        <Button onClick={() => handleClick()} disabled={isPending}>
          {isPending ? 'Confirm in wallet' : 'Register Derivative IP'}
        </Button>
      )}
      txHash={txHash}
    />
  );
}
