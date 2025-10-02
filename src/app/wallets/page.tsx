import { auth } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { 
  Wallet, 
  Plus, 
  Search, 
  MoreVertical, 
  Edit, 
  Trash2, 
  Eye,
  Copy,
  CheckCircle,
  AlertCircle
} from 'lucide-react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'

export default async function WalletsPage() {
  const { userId } = await auth()
  
  if (!userId) {
    redirect('/sign-in')
  }

  // Mock data - in real app, this would come from your database
  const mockWallets = [
    {
      id: '1',
      name: 'Main Trading Wallet',
      address: '7xKXtg2CW87d97TXJSDpbD5jBkheTqA83TZRuJosgAsU',
      isActive: true,
      totalValue: 85430.50,
      valueChange: 2340.25,
      valueChangePercent: 2.82,
      tokenCount: 12,
      lastActivity: '2 minutes ago',
      riskScore: 6.5,
      tags: ['Trading', 'High Volume']
    },
    {
      id: '2',
      name: 'DeFi Operations',
      address: '9WzDXwBbmkg8ZTbNMqUxvQRAyrZzDsGYdLVL9zYtAWWM',
      isActive: true,
      totalValue: 40000.00,
      valueChange: -1200.00,
      valueChangePercent: -2.91,
      tokenCount: 8,
      lastActivity: '1 hour ago',
      riskScore: 4.2,
      tags: ['DeFi', 'Staking']
    },
    {
      id: '3',
      name: 'Cold Storage',
      address: '5Q544fKrFoe6tsEbD57S2E4iWJcVzi8rheWwkNiWp3dY',
      isActive: false,
      totalValue: 0,
      valueChange: 0,
      valueChangePercent: 0,
      tokenCount: 0,
      lastActivity: 'Never',
      riskScore: 1.0,
      tags: ['Storage', 'Inactive']
    },
    {
      id: '4',
      name: 'NFT Collection',
      address: '3J98t1WpEZ73CNmQviecrnyiWrnqRhWNLy',
      isActive: true,
      totalValue: 12500.75,
      valueChange: 850.25,
      valueChangePercent: 7.30,
      tokenCount: 3,
      lastActivity: '3 days ago',
      riskScore: 8.1,
      tags: ['NFTs', 'Collectibles']
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-foreground">Wallet Management</h1>
              <p className="text-muted-foreground">Manage and analyze your Solana wallets</p>
            </div>
            <Button className="gradient-purple">
              <Plus className="w-4 h-4 mr-2" />
              Add Wallet
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Search and Filters */}
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input 
                  placeholder="Search wallets by name or address..." 
                  className="pl-10"
                />
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="outline">All Wallets</Button>
              <Button variant="outline">Active Only</Button>
              <Button variant="outline">High Value</Button>
            </div>
          </div>
        </div>

        {/* Wallets Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockWallets.map((wallet) => (
            <Card key={wallet.id} className={`bg-card border-border hover:border-purple-500/50 transition-colors ${
              !wallet.isActive ? 'opacity-60' : ''
            }`}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-purple rounded-lg flex items-center justify-center">
                      <Wallet className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{wallet.name}</CardTitle>
                      <div className="flex items-center space-x-2">
                        <Badge variant={wallet.isActive ? "default" : "secondary"}>
                          {wallet.isActive ? 'Active' : 'Inactive'}
                        </Badge>
                        <Badge variant="outline">
                          Risk: {wallet.riskScore}/10
                        </Badge>
                      </div>
                    </div>
                  </div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="sm">
                        <MoreVertical className="w-4 h-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>
                        <Eye className="w-4 h-4 mr-2" />
                        View Details
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Edit className="w-4 h-4 mr-2" />
                        Edit Wallet
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Copy className="w-4 h-4 mr-2" />
                        Copy Address
                      </DropdownMenuItem>
                      <DropdownMenuItem className="text-red-500">
                        <Trash2 className="w-4 h-4 mr-2" />
                        Remove Wallet
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-4">
                  {/* Address */}
                  <div>
                    <Label className="text-sm text-muted-foreground">Address</Label>
                    <div className="flex items-center space-x-2 mt-1">
                      <code className="text-sm font-mono bg-muted px-2 py-1 rounded flex-1">
                        {wallet.address.slice(0, 8)}...{wallet.address.slice(-8)}
                      </code>
                      <Button size="sm" variant="ghost">
                        <Copy className="w-3 h-3" />
                      </Button>
                    </div>
                  </div>

                  {/* Portfolio Value */}
                  <div>
                    <Label className="text-sm text-muted-foreground">Portfolio Value</Label>
                    <div className="mt-1">
                      <div className="text-2xl font-bold text-foreground">
                        ${wallet.totalValue.toLocaleString()}
                      </div>
                      <div className={`flex items-center text-sm ${
                        wallet.valueChange >= 0 ? 'text-green-500' : 'text-red-500'
                      }`}>
                        {wallet.valueChange >= 0 ? (
                          <CheckCircle className="w-3 h-3 mr-1" />
                        ) : (
                          <AlertCircle className="w-3 h-3 mr-1" />
                        )}
                        {wallet.valueChange >= 0 ? '+' : ''}{wallet.valueChangePercent.toFixed(2)}%
                        ({wallet.valueChange >= 0 ? '+' : ''}${Math.abs(wallet.valueChange).toLocaleString()})
                      </div>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label className="text-sm text-muted-foreground">Tokens</Label>
                      <div className="text-lg font-semibold text-foreground">
                        {wallet.tokenCount}
                      </div>
                    </div>
                    <div>
                      <Label className="text-sm text-muted-foreground">Last Activity</Label>
                      <div className="text-sm text-foreground">
                        {wallet.lastActivity}
                      </div>
                    </div>
                  </div>

                  {/* Tags */}
                  <div>
                    <Label className="text-sm text-muted-foreground">Tags</Label>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {wallet.tags.map((tag, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex space-x-2 pt-2">
                    <Button size="sm" className="flex-1" variant="outline">
                      <Eye className="w-3 h-3 mr-1" />
                      Analyze
                    </Button>
                    <Button size="sm" className="flex-1" variant="outline">
                      <Edit className="w-3 h-3 mr-1" />
                      Edit
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Add Wallet Card */}
        <Card className="bg-card border-dashed border-2 border-border hover:border-purple-500/50 transition-colors cursor-pointer">
          <CardContent className="flex flex-col items-center justify-center py-12">
            <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mb-4">
              <Plus className="w-8 h-8 text-muted-foreground" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Add New Wallet</h3>
            <p className="text-muted-foreground text-center mb-4">
              Connect a new Solana wallet to start analyzing its performance
            </p>
            <Button className="gradient-purple">
              <Plus className="w-4 h-4 mr-2" />
              Add Wallet
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
