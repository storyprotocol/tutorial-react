// 'use client';

// import { useSetPermission } from '@story-protocol/react';
// import Button from './Button';

// export default function SetPermissions() {
//   const { writeContractAsync, isPending } = useSetPermission();

//   // Register derivative IP inputs
//   const licenseIds = [BigInt(0)];
//   const nftContract = process.env.NEXT_PUBLIC_MINT_NFT_ADDRESS as `0x${string}`;
//   const nftTokenId = BigInt(5);
//   const ipName = '';
//   const contentHash = '0x';
//   const uri = '';
//   const minRoyalty = 5;

//   function handleClick() {
//     writeContract({
//       args: [
//         licenseIds,
//         nftContract,
//         nftTokenId,
//         ipName,
//         contentHash,
//         uri,
//         minRoyalty,
//       ],
//     });
//   }

//   if (isPending) return <Button disabled>Pending...</Button>;

//   return (
//     <div>
//       <Button onClick={() => handleClick()} disabled={isPending}>
//         Register Derivative IP
//       </Button>
//     </div>
//   );
// }
