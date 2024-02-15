'use client';

import React from 'react';
import { useWriteContract } from 'wagmi';
import Button from './Button';

export default function MintNft() {
  const { writeContractAsync, isPending, isSuccess } = useWriteContract();

  async function handleMintNft() {
    await writeContractAsync({
      address: process.env.NEXT_PUBLIC_MINT_NFT_ADDRESS as `0x${string}`,
      functionName: 'addTokens',
      args: [
        ['https://i.seadn.io/gcs/files/5db8fdd40e96a2789e49b6fed35f4182.png'],
      ],
      abi: [
        {
          inputs: [
            { internalType: 'string[]', name: 'uris', type: 'string[]' },
          ],
          name: 'addTokens',
          outputs: [],
          stateMutability: 'nonpayable',
          type: 'function',
        },
      ],
    });
  }

  if (isPending) return <Button disabled>Pending...</Button>;

  return <Button onClick={() => handleMintNft()}>Mint an NFT</Button>;
}
