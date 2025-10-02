'use client'

import { useWallet } from '@solana/wallet-adapter-react'
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Wallet, Copy, ExternalLink } from 'lucide-react'
import { formatAddress } from '@/lib/solana'

export function WalletConnect() {
  const { wallet, publicKey, connected, disconnect } = useWallet()

  if (!connected || !publicKey) {
    return (
      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Wallet className="w-5 h-5 mr-2" />
            Connect Wallet
          </CardTitle>
          <CardDescription>
            Connect your Solana wallet to start analyzing
          </CardDescription>
        </CardHeader>
        <CardContent>
          <WalletMultiButton className="gradient-purple" />
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="bg-card border-border">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <div className="flex items-center">
            <Wallet className="w-5 h-5 mr-2" />
            Connected Wallet
          </div>
          <Badge variant="default" className="bg-green-500">
            Connected
          </Badge>
        </CardTitle>
        <CardDescription>
          {wallet?.adapter.name} wallet is connected
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <label className="text-sm font-medium text-muted-foreground">
            Wallet Address
          </label>
          <div className="flex items-center space-x-2">
            <code className="flex-1 p-2 bg-muted rounded text-sm font-mono">
              {formatAddress(publicKey.toString())}
            </code>
            <Button size="sm" variant="outline">
              <Copy className="w-3 h-3" />
            </Button>
            <Button size="sm" variant="outline">
              <ExternalLink className="w-3 h-3" />
            </Button>
          </div>
        </div>
        
        <div className="flex space-x-2">
          <Button 
            variant="outline" 
            className="flex-1"
            onClick={() => window.open(`https://solscan.io/account/${publicKey.toString()}`, '_blank')}
          >
            View on Solscan
          </Button>
          <Button 
            variant="destructive" 
            onClick={disconnect}
          >
            Disconnect
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

