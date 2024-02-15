'use client';
import MintNft from './MintNft';
import RegisterDerivativeIp from './RegisterDerivativeIp';
import RegisterRootIp from './RegisterRootIp';
import RegisterUMLPolicy from './RegisterUMLPolicy';
import { Suspense } from 'react';
import MintLicense from './MintLicense';
import { ConnectKitButton } from 'connectkit';
import { ReactNode } from 'react';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 gap-8 max-w-4xl mx-auto">
      <Suspense fallback={<div>Loading...</div>}>
        <ConnectKitButton />
        <div className="flex flex-col text-center text-white">
          <p>
            Modify the values in each components file to interact with the SDK.
          </p>
        </div>

        <TextAndButton
          description="1. Mint an NFT if you don't have one yet"
          ActionComponent={MintNft}
        />

        <TextAndButton
          description="2. Update the contract address and token ID in RegisterRootIp.tsx"
          ActionComponent={RegisterRootIp}
        />

        <TextAndButton
          description="3. Configure a desired policy in RegisterUMLPolicy.tsx"
          ActionComponent={RegisterUMLPolicy}
        />

        <TextAndButton
          description="4. Specify the policyId and recipient in MintLicense.tsx"
          ActionComponent={MintLicense}
        />

        <TextAndButton
          description="5. Mint a derivative NFT if you don't have one yet"
          ActionComponent={MintNft}
        />

        <TextAndButton
          description="5. Specify the licenseId and derivative NFT details in RegisterDerivativeIp.tsx"
          ActionComponent={RegisterDerivativeIp}
        />
      </Suspense>
    </main>
  );
}

const TextAndButton = ({
  description,
  ActionComponent,
}: {
  description: string;
  ActionComponent: () => ReactNode;
}) => {
  return (
    <div className="flex flex-row gap-4 w-full justify-between">
      <p className="flex my-auto">{description}</p>
      <ActionComponent />
    </div>
  );
};
