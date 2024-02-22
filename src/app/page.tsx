'use client';
import { useAccount } from 'wagmi';

import MintNft from './MintNft';
import RegisterPILPolicy from './RegisterPILPolicy';
import MintLicense from './MintLicense';
import ConnectWalletButton from './ConnectWalletButton';
import RegisterIpAsset from './RegisterIpAsset';
import AddPolicyToIp from './AddPolicyToIpAsset';
import RegisterDerivativeIp from './RegisterDerivativeIpAsset';

export default function Home() {
  const { isConnected } = useAccount();

  return (
    <main className="flex min-h-screen flex-col items-center p-8 lg:px-20 lg:py-12 gap-8 max-w-2xl lg:max-w-5xl mx-auto bg-black text-white text-sm">
      <ConnectWalletButton />
      <div className="flex flex-col text-center text-white">
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
            terms, and mint a license
          </>
        )}
      </div>
      {isConnected && (
        <>
          <MintNft />
          <RegisterIpAsset />
          <RegisterPILPolicy />
          <AddPolicyToIp />
          <MintLicense />

          <p>Continue with these steps to register a derivative NFT</p>
          <MintNft
            text={'6. Mint a new NFT to represent a derivative artwork NFT'}
            buttonText={'Mint derivative NFT'}
          />
          <RegisterDerivativeIp />

          {/* <TextAndButton
            description="5. Specify the licenseId and derivative NFT details in RegisterDerivativeIp.tsx"
            ActionComponent={RegisterDerivativeIp}
          />  */}
        </>
      )}
    </main>
  );
}
