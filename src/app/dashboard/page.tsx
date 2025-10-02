import { auth } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { 
  Wallet, 
  TrendingUp, 
  TrendingDown, 
  DollarSign, 
  Activity,
  AlertTriangle,
  CheckCircle,
  Clock,
  BarChart3
} from 'lucide-react'

export default async function DashboardPage() {
  const { userId } = await auth()
  
  if (!userId) {
    redirect('/sign-in')
  }

  // Mock data - in real app, this would come from your database
  const mockData = {
    totalValue: 125430.50,
    totalValueChange: 5230.75,
    totalValueChangePercent: 4.35,
    walletCount: 3,
    activeWallets: 2,
    totalTransactions: 1247,
    riskScore: 7.2,
    topTokens: [
      { name: 'SOL', value: 45000, change: 5.2, symbol: 'SOL' },
      { name: 'USDC', value: 35000, change: 0.1, symbol: 'USDC' },
      { name: 'RAY', value: 15000, change: -2.1, symbol: 'RAY' },
      { name: 'ORCA', value: 12000, change: 8.7, symbol: 'ORCA' },
    ],
    recentTransactions: [
      { id: '1', type: 'swap', amount: 1000, token: 'SOL', time: '2m ago', status: 'success' },
      { id: '2', type: 'transfer', amount: 500, token: 'USDC', time: '15m ago', status: 'success' },
      { id: '3', type: 'stake', amount: 2000, token: 'SOL', time: '1h ago', status: 'pending' },
    ],
    wallets: [
      { id: '1', name: 'Main Trading', address: '7xKXtg2CW87d97TXJSDpbD5jBkheTqA83TZRuJosgAsU', value: 85000, isActive: true },
      { id: '2', name: 'DeFi Operations', address: '9WzDXwBbmkg8ZTbNMqUxvQRAyrZzDsGYdLVL9zYtAWWM', value: 40430.50, isActive: true },
      { id: '3', name: 'Cold Storage', address: '5Q544fKrFoe6tsEbD57S2E4iWJcVzi8rheWwkNiWp3dY', value: 0, isActive: false },
    ]
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
              <p className="text-muted-foreground">Welcome back! Here&apos;s your wallet overview.</p>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline">
                <Activity className="w-4 h-4 mr-2" />
                Refresh Data
              </Button>
              <Button className="gradient-purple">
                <Wallet className="w-4 h-4 mr-2" />
                Add Wallet
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-card border-border">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Total Portfolio Value
              </CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">
                ${mockData.totalValue.toLocaleString()}
              </div>
              <div className="flex items-center text-xs text-green-500">
                <TrendingUp className="h-3 w-3 mr-1" />
                +{mockData.totalValueChangePercent}% (+${mockData.totalValueChange.toLocaleString()})
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Active Wallets
              </CardTitle>
              <Wallet className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">
                {mockData.activeWallets}/{mockData.walletCount}
              </div>
              <p className="text-xs text-muted-foreground">
                {mockData.walletCount - mockData.activeWallets} inactive
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Total Transactions
              </CardTitle>
              <Activity className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">
                {mockData.totalTransactions.toLocaleString()}
              </div>
              <p className="text-xs text-muted-foreground">
                All time
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Risk Score
              </CardTitle>
              <AlertTriangle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">
                {mockData.riskScore}/10
              </div>
              <p className="text-xs text-muted-foreground">
                Moderate risk
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Charts and Analysis */}
          <div className="lg:col-span-2 space-y-6">
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="tokens">Tokens</TabsTrigger>
                <TabsTrigger value="transactions">Transactions</TabsTrigger>
              </TabsList>
              
              <TabsContent value="overview" className="space-y-6">
                <Card className="bg-card border-border">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <BarChart3 className="w-5 h-5 mr-2" />
                      Portfolio Performance
                    </CardTitle>
                    <CardDescription>
                      Your portfolio value over the last 30 days
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-64 flex items-center justify-center text-muted-foreground">
                      Chart component will be implemented here
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-card border-border">
                  <CardHeader>
                    <CardTitle>Top Tokens</CardTitle>
                    <CardDescription>
                      Your highest value token holdings
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {mockData.topTokens.map((token, index) => (
                        <div key={index} className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-purple-500/20 rounded-full flex items-center justify-center">
                              <span className="text-xs font-bold text-purple-500">
                                {token.symbol.charAt(0)}
                              </span>
                            </div>
                            <div>
                              <p className="font-medium text-foreground">{token.name}</p>
                              <p className="text-sm text-muted-foreground">{token.symbol}</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="font-medium text-foreground">
                              ${token.value.toLocaleString()}
                            </p>
                            <div className={`flex items-center text-sm ${
                              token.change >= 0 ? 'text-green-500' : 'text-red-500'
                            }`}>
                              {token.change >= 0 ? (
                                <TrendingUp className="h-3 w-3 mr-1" />
                              ) : (
                                <TrendingDown className="h-3 w-3 mr-1" />
                              )}
                              {token.change >= 0 ? '+' : ''}{token.change}%
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="tokens" className="space-y-6">
                <Card className="bg-card border-border">
                  <CardHeader>
                    <CardTitle>Token Holdings</CardTitle>
                    <CardDescription>
                      Detailed breakdown of your token portfolio
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-64 flex items-center justify-center text-muted-foreground">
                      Token holdings chart will be implemented here
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="transactions" className="space-y-6">
                <Card className="bg-card border-border">
                  <CardHeader>
                    <CardTitle>Recent Transactions</CardTitle>
                    <CardDescription>
                      Your latest wallet activity
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {mockData.recentTransactions.map((tx) => (
                        <div key={tx.id} className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
                          <div className="flex items-center space-x-3">
                            <div className={`w-2 h-2 rounded-full ${
                              tx.status === 'success' ? 'bg-green-500' : 
                              tx.status === 'pending' ? 'bg-yellow-500' : 'bg-red-500'
                            }`} />
                            <div>
                              <p className="font-medium text-foreground capitalize">{tx.type}</p>
                              <p className="text-sm text-muted-foreground">{tx.time}</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="font-medium text-foreground">
                              {tx.amount} {tx.token}
                            </p>
                            <div className="flex items-center text-sm text-muted-foreground">
                              {tx.status === 'success' ? (
                                <CheckCircle className="h-3 w-3 mr-1 text-green-500" />
                              ) : tx.status === 'pending' ? (
                                <Clock className="h-3 w-3 mr-1 text-yellow-500" />
                              ) : (
                                <AlertTriangle className="h-3 w-3 mr-1 text-red-500" />
                              )}
                              {tx.status}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Right Column - Wallets and Quick Actions */}
          <div className="space-y-6">
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle>Your Wallets</CardTitle>
                <CardDescription>
                  Manage your connected Solana wallets
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockData.wallets.map((wallet) => (
                    <div key={wallet.id} className="p-4 bg-muted/30 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-medium text-foreground">{wallet.name}</h3>
                        <Badge variant={wallet.isActive ? "default" : "secondary"}>
                          {wallet.isActive ? 'Active' : 'Inactive'}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground font-mono mb-2">
                        {wallet.address.slice(0, 8)}...{wallet.address.slice(-8)}
                      </p>
                      <p className="text-lg font-bold text-foreground">
                        ${wallet.value.toLocaleString()}
                      </p>
                    </div>
                  ))}
                </div>
                <Button className="w-full mt-4" variant="outline">
                  <Wallet className="w-4 h-4 mr-2" />
                  Add New Wallet
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
                <CardDescription>
                  Common tasks and shortcuts
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full justify-start" variant="outline">
                  <BarChart3 className="w-4 h-4 mr-2" />
                  Analyze New Wallet
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <Activity className="w-4 h-4 mr-2" />
                  Export Data
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <AlertTriangle className="w-4 h-4 mr-2" />
                  Risk Assessment
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
