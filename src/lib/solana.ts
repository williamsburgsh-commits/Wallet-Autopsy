import { Connection, PublicKey, clusterApiUrl } from '@solana/web3.js'

// Solana connection configuration
export const SOLANA_RPC_URL = process.env.NEXT_PUBLIC_SOLANA_RPC_URL || clusterApiUrl('mainnet-beta')
export const SOLANA_WS_URL = process.env.NEXT_PUBLIC_SOLANA_WS_URL || 'wss://api.mainnet-beta.solana.com'

// Create Solana connection
export const connection = new Connection(SOLANA_RPC_URL, {
  commitment: 'confirmed',
  wsEndpoint: SOLANA_WS_URL,
})

// Common Solana addresses
export const SOLANA_TOKEN_PROGRAM_ID = new PublicKey('TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA')
export const SOLANA_ASSOCIATED_TOKEN_PROGRAM_ID = new PublicKey('ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL')

// Utility functions
export const isValidSolanaAddress = (address: string): boolean => {
  try {
    new PublicKey(address)
    return true
  } catch {
    return false
  }
}

export const formatAddress = (address: string, chars = 4): string => {
  if (address.length <= chars * 2) return address
  return `${address.slice(0, chars)}...${address.slice(-chars)}`
}

export const formatSOL = (lamports: number): string => {
  return (lamports / 1e9).toFixed(4)
}

export const formatTokenAmount = (amount: number, decimals: number): string => {
  return (amount / Math.pow(10, decimals)).toFixed(4)
}

