'use client';

import { WagmiProvider, createConfig, http } from 'wagmi';
import { mainnet, sepolia } from 'wagmi/chains';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ConnectKitProvider, getDefaultConfig } from 'connectkit';
import { ReactNode } from 'react';

const config = createConfig(
  getDefaultConfig({
    // Your dApps chains
    chains: [sepolia],
    transports: {
      [sepolia.id]: http(
        `https://eth-sepolia.g.alchemy.com/v2/${process.env.NEXT_PUBLIC_ALCHEMY_ID}`
      ),
    },
    ssr: true,
    // Required API Keys
    walletConnectProjectId: process.env.NEXT_PUBLIC_WC_PROJECT_ID!,

    // Required App Info
    appName: 'Your App Name',

    // Optional App Info
    appDescription: 'Your App Description',
    appUrl: 'https://family.co', // your app's url
    appIcon: 'https://family.co/logo.png', // your app's icon, no bigger than 1024x1024px (max. 1MB)
  })
);

const queryClient = new QueryClient();

export const Web3Provider = ({ children }: { children: ReactNode }) => {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <ConnectKitProvider>{children}</ConnectKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
};
