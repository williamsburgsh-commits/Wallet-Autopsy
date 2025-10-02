import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, BarChart3, Shield, Zap, Users, TrendingUp, Wallet, Target } from 'lucide-react'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-purple rounded-lg flex items-center justify-center">
              <Wallet className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-foreground">Wallet Autopsy</span>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/pricing">
              <Button variant="ghost">Pricing</Button>
            </Link>
            <Link href="/sign-in">
              <Button variant="outline">Sign In</Button>
            </Link>
            <Link href="/sign-up">
              <Button className="gradient-purple">Get Started</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <Badge variant="secondary" className="mb-4">
            Professional Crypto Analysis Platform
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Advanced Solana
            <span className="bg-gradient-to-r from-purple-500 to-purple-700 bg-clip-text text-transparent">
              {' '}Wallet Analysis
            </span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Unlock deep insights into Solana wallet behavior with professional-grade analytics, 
            risk assessment, and trading intelligence for serious crypto traders.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/sign-up">
              <Button size="lg" className="gradient-purple text-lg px-8 py-6">
                Start Free Analysis
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link href="/dashboard">
              <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                View Demo
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-card/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Professional Trading Tools
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to analyze, track, and optimize your Solana trading strategy
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-card border-border hover:border-purple-500/50 transition-colors">
              <CardHeader>
                <BarChart3 className="w-12 h-12 text-purple-500 mb-4" />
                <CardTitle>Advanced Analytics</CardTitle>
                <CardDescription>
                  Deep dive into wallet performance with comprehensive charts and metrics
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-card border-border hover:border-purple-500/50 transition-colors">
              <CardHeader>
                <Shield className="w-12 h-12 text-purple-500 mb-4" />
                <CardTitle>Risk Assessment</CardTitle>
                <CardDescription>
                  Identify potential risks and opportunities with AI-powered analysis
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-card border-border hover:border-purple-500/50 transition-colors">
              <CardHeader>
                <Zap className="w-12 h-12 text-purple-500 mb-4" />
                <CardTitle>Real-time Monitoring</CardTitle>
                <CardDescription>
                  Track wallet activity and market movements in real-time
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-card border-border hover:border-purple-500/50 transition-colors">
              <CardHeader>
                <Users className="w-12 h-12 text-purple-500 mb-4" />
                <CardTitle>Multi-Wallet Support</CardTitle>
                <CardDescription>
                  Manage and analyze multiple Solana wallets from one dashboard
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-card border-border hover:border-purple-500/50 transition-colors">
              <CardHeader>
                <TrendingUp className="w-12 h-12 text-purple-500 mb-4" />
                <CardTitle>Performance Tracking</CardTitle>
                <CardDescription>
                  Monitor P&L, ROI, and trading performance over time
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-card border-border hover:border-purple-500/50 transition-colors">
              <CardHeader>
                <Target className="w-12 h-12 text-purple-500 mb-4" />
                <CardTitle>Smart Alerts</CardTitle>
                <CardDescription>
                  Get notified about important wallet activities and market changes
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Ready to Analyze Your Wallets?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of professional traders using Wallet Autopsy to gain deeper insights 
            into their Solana trading strategies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/sign-up">
              <Button size="lg" className="gradient-purple text-lg px-8 py-6">
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link href="/pricing">
              <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                View Pricing
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card/30 py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-purple rounded-lg flex items-center justify-center">
                  <Wallet className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-foreground">Wallet Autopsy</span>
              </div>
              <p className="text-muted-foreground">
                Professional crypto trading analysis platform for Solana.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold text-foreground mb-4">Product</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><Link href="/dashboard" className="hover:text-foreground">Dashboard</Link></li>
                <li><Link href="/wallets" className="hover:text-foreground">Wallets</Link></li>
                <li><Link href="/pricing" className="hover:text-foreground">Pricing</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-foreground mb-4">Support</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><Link href="#" className="hover:text-foreground">Documentation</Link></li>
                <li><Link href="#" className="hover:text-foreground">Help Center</Link></li>
                <li><Link href="#" className="hover:text-foreground">Contact</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-foreground mb-4">Legal</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><Link href="#" className="hover:text-foreground">Privacy Policy</Link></li>
                <li><Link href="#" className="hover:text-foreground">Terms of Service</Link></li>
                <li><Link href="#" className="hover:text-foreground">Cookie Policy</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 Wallet Autopsy. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}