'use client';
import { useRegisterRootIp } from '@story-protocol/react';
import { stringToHex } from 'viem';
import Button from './Button';
import TextAndButton from '@/utils/TextAndButton';

export default function RegisterIpAsset() {
  const {
    writeContractAsync,
    isPending: isPendingInWallet,
    data: txHash,
  } = useRegisterRootIp();

  // Register root IP inputs
  const tokenId = undefined; // Your NFT token ID as BigInt
  // const tokenId = BigInt(13); // Example
  const nftContract = '0x7ee32b8B515dEE0Ba2F25f612A04a731eEc24F49'; // Update if using your own NFT

  const policyId = BigInt(0); // Policy ID from RegisterPILPolicy.tsx, if want to attach policy in same transaction
  const ipName = 'IP Man'; // Name of your IP, if applicable
  const contentHash = stringToHex('0x', { size: 32 }); // Content hash of your NFT, if applicable
  const externalURL = 'https://example.com'; // External URL for your IP, if applicable

  async function handleClick() {
    if (tokenId === undefined) {
      alert('Please update tokenId in RegisterRootIp.tsx');
    }

    await writeContractAsync({
      functionName: 'registerRootIp',
      args: [policyId, nftContract, tokenId, ipName, contentHash, externalURL],
    });
  }

  if (isPendingInWallet) return <Button disabled>Confirm in wallet...</Button>; // This

  const text =
    tokenId === undefined
      ? '2. Update the tokenId value in RegisterRootIp.tsx'
      : '2. Register your NFT as an IP Asset. A successful transaction will result in a `ipId` value, emitted as an event, that represents your IPA ID.';

  return (
    <TextAndButton
      description={text}
      Button={() => (
        <Button onClick={() => handleClick()} disabled={isPendingInWallet}>
          Register IP Asset
        </Button>
      )}
      txHash={txHash}
    />
  );
}
