// Wallet types
export interface Wallet {
  id: string
  address: string
  name: string
  isActive: boolean
  createdAt: string
  updatedAt: string
}

// Transaction types
export interface Transaction {
  signature: string
  slot: number
  blockTime: number
  fee: number
  accounts: string[]
  instructions: Instruction[]
  logs: string[]
  status: 'success' | 'failed'
}

export interface Instruction {
  programId: string
  accounts: string[]
  data: string
}

// Token types
export interface Token {
  mint: string
  symbol: string
  name: string
  decimals: number
  supply: number
  price?: number
  marketCap?: number
  logoURI?: string
}

export interface TokenBalance {
  mint: string
  amount: number
  decimals: number
  uiAmount: number
  token: Token
}

// Analysis types
export interface WalletAnalysis {
  id: string
  walletAddress: string
  totalValue: number
  totalValueChange: number
  totalValueChangePercent: number
  tokenCount: number
  nftCount: number
  transactionCount: number
  firstTransactionDate: string
  lastTransactionDate: string
  topTokens: TokenBalance[]
  recentTransactions: Transaction[]
  riskScore: number
  riskFactors: string[]
  createdAt: string
  updatedAt: string
}

export interface AnalysisMetrics {
  totalVolume: number
  totalFees: number
  averageTransactionSize: number
  transactionFrequency: number
  topDexes: string[]
  topTokens: string[]
  riskScore: number
  riskFactors: string[]
}

// Chart data types
export interface ChartData {
  name: string
  value: number
  change?: number
  changePercent?: number
}

export interface TimeSeriesData {
  date: string
  value: number
  volume?: number
}

// User types
export interface User {
  id: string
  email: string
  firstName?: string
  lastName?: string
  imageUrl?: string
  createdAt: string
  updatedAt: string
}

// Subscription types
export interface Subscription {
  id: string
  userId: string
  plan: 'free' | 'pro' | 'enterprise'
  status: 'active' | 'canceled' | 'past_due'
  currentPeriodStart: string
  currentPeriodEnd: string
  cancelAtPeriodEnd: boolean
  createdAt: string
  updatedAt: string
}

// API response types
export interface ApiResponse<T> {
  data: T
  success: boolean
  message?: string
  error?: string
}

export interface PaginatedResponse<T> {
  data: T[]
  pagination: {
    page: number
    limit: number
    total: number
    totalPages: number
  }
}

// Filter and sort types
export interface FilterOptions {
  dateRange?: {
    start: string
    end: string
  }
  minValue?: number
  maxValue?: number
  tokens?: string[]
  transactionTypes?: string[]
}

export interface SortOptions {
  field: string
  direction: 'asc' | 'desc'
}

// Error types
export interface AppError {
  code: string
  message: string
  details?: Record<string, unknown>
}

// Notification types
export interface Notification {
  id: string
  type: 'success' | 'error' | 'warning' | 'info'
  title: string
  message: string
  duration?: number
  action?: {
    label: string
    onClick: () => void
  }
}
