import { ConnectKitButton } from 'connectkit';
import React from 'react';

export default function ConnectWalletButton() {
  return (
    <ConnectKitButton.Custom>
      {({ isConnected, show, truncatedAddress, ensName }) => {
        return (
          <button
            onClick={show}
            className="bg-gradient-to-r from-pink-500 to-yellow-500 px-4 py-2 rounded-lg hover:scale-105 transition-all duration-200 text-white shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-500"
          >
            {isConnected ? ensName ?? truncatedAddress : 'Connect Wallet'}
          </button>
        );
      }}
    </ConnectKitButton.Custom>
  );
}
