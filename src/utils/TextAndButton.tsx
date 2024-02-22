import Link from 'next/link';
import React, { ReactNode } from 'react';

export default function TextAndButton({
  description,
  Button,
  txHash,
}: {
  description: string;
  Button: () => ReactNode;
  txHash?: string;
}) {
  return (
    <div className="flex flex-row gap-8 w-full justify-between">
      <p className="flex my-auto">{description}</p>
      <Button />
      {txHash ? (
        <Link
          href={`https://sepolia.etherscan.io/tx/${txHash}`}
          className="text-sm"
          target="_blank"
        >
          View on Etherscan
        </Link>
      ) : (
        // <div />
        <></>
      )}
    </div>
  );
}
