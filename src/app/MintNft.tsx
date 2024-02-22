'use client';

import React from 'react';
import {
  useAccount,
  useWaitForTransactionReceipt,
  useWriteContract,
} from 'wagmi';
import Button from './Button';
import { waitForTransactionReceipt } from '@/utils/transaction';
import TextAndButton from '@/utils/TextAndButton';

export default function MintNft({
  text,
  buttonText,
}: {
  text?: string;
  buttonText?: string;
}) {
  const {
    writeContractAsync,
    isPending: isPendingInWallet,
    data,
  } = useWriteContract();

  const { address } = useAccount();

  async function handleMintNft() {
    await writeContractAsync({
      address: '0x7ee32b8b515dee0ba2f25f612a04a731eec24f49', // dummy ERC721 contract address to mint from
      functionName: 'mint',
      args: [address],
      abi: [
        {
          inputs: [{ internalType: 'address', name: 'to', type: 'address' }],
          name: 'mint',
          outputs: [
            { internalType: 'uint256', name: 'tokenId', type: 'uint256' },
          ],
          stateMutability: 'nonpayable',
          type: 'function',
        },
      ],
    });
  }

  return (
    <TextAndButton
      description={text ? text : "1. Mint an NFT if you don't have one already"}
      Button={() => (
        <Button onClick={() => handleMintNft()}>
          {isPendingInWallet
            ? 'Confirm in wallet'
            : buttonText
            ? buttonText
            : 'Mint an NFT'}
        </Button>
      )}
      txHash={data}
    />
  );
}
