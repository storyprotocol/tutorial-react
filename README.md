This is a simple React example repo to demonstrate the React SDK. This repo uses NextJS, TypeScript, wagmi, and Tailwind.

## Getting Started

First, make sure you have a [WalletConnect](https://walletconnect.com/) ID and store that in a `.env.local` file:

```.env.local
NEXT_PUBLIC_WC_PROJECT_ID=<YOUR_WC_PROJECT_ID>
NEXT_PUBLIC_RPC_PROVIDER_URL=https://rpc.ankr.com/eth_sepolia // Optionally use your own RPC provider
```

Next, install the packages:

```bash
npm i
# or
yarn
# or
pnpm i
```

You can now run the repo:

```bash
npm run dev
# or
yarn dev
# or
pnpm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Note
If you are having issues with types not importing correctly, change `"moduleResolution": "bundler",` to `"moduleResolution": "node",` in your `tsconfig.json`


## Following the tutorial

In this tutorial, we will:

1. (Optional) Create an NFT, if you don't have one already
2. Register that NFT onto the IP Asset registry, as an IP Asset (IPA) (`RegisterIpAsset.tsx`)
3. (Optional) Create a [Policy](https://docs.storyprotocol.xyz/docs/licensing-presets-flavors), if you don't want to use a pre-existing Policy (`.tsx`). Note: You want to set commercialUse = false, and derivativesAllowed = true to keep this demonstration easier.
4. Attach the Policy terms to your IPA (`AddPolicyToIpAsset.tsx`)
5. Mint a License NFT for your IPA

Next, using the License NFT you can register another NFT as a derivative 6. (Optional) Create an NFT, if you don't have one already 7. Register another NFT as a derivative of the original one by specifying the ipId and licenseId
