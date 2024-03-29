'use client';
import { useAccount } from 'wagmi';

import MintNft from './MintNft';
import RegisterPILPolicy from './RegisterPILPolicy';
import MintLicense from './MintLicense';
import ConnectWalletButton from './ConnectWalletButton';
import RegisterIpAsset from './RegisterIpAsset';
import AddPolicyToIp from './AddPolicyToIpAsset';
import RegisterDerivativeIp from './RegisterDerivativeIpAsset';
import { useEffect, useState } from 'react';

export default function Home() {
  const { isConnected } = useAccount();

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <main className="flex min-h-screen flex-col items-center p-8 lg:px-20 lg:py-12 gap-8 max-w-2xl lg:max-w-5xl mx-auto  bg-black text-white text-sm">
      <ConnectWalletButton />
      <div className="flex flex-col text-center text-white text-lg">
        {!isConnected ? (
          <>
            <p>
              This is a simple example of how to use the Story Protocol React
              SDK to interact with the protocol.
            </p>
            <p>Connect your wallet to get started.</p>
          </>
        ) : (
          <>
            {' '}
            Follow these steps to register an NFT as an IP asset, add licensing
            terms, and mint a license. Use Etherscan to look at the events
            emitted to get the necessary information.
          </>
        )}
      </div>
      {isConnected && (
        <div className="w-full flex flex-col gap-4">
          <MintNft />
          <RegisterIpAsset />
          <RegisterPILPolicy />
          <AddPolicyToIp />
          <MintLicense />

          <p className="text-center mt-8 text-lg">
            Continue with these steps to register a derivative NFT
          </p>
          <MintNft
            text={'6. Mint a new NFT to represent a derivative artwork NFT'}
            buttonText={'Mint derivative NFT'}
          />
          <RegisterDerivativeIp />

          {/* <TextAndButton
            description="5. Specify the licenseId and derivative NFT details in RegisterDerivativeIp.tsx"
            ActionComponent={RegisterDerivativeIp}
          />  */}
        </div>
      )}
    </main>
  );
}
