import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Check, X, Zap, Crown, Building } from 'lucide-react'

export default function PricingPage() {
  const plans = [
    {
      name: 'Free',
      price: 0,
      period: 'month',
      description: 'Perfect for getting started with wallet analysis',
      icon: Zap,
      features: [
        'Up to 3 wallets',
        'Basic analytics',
        '7-day data retention',
        'Email support',
        'Standard risk assessment',
        'Basic charts and graphs'
      ],
      limitations: [
        'Limited to 100 transactions per wallet',
        'No API access',
        'No custom alerts',
        'No data export'
      ],
      cta: 'Get Started Free',
      popular: false
    },
    {
      name: 'Pro',
      price: 29,
      period: 'month',
      description: 'Advanced features for serious traders',
      icon: Crown,
      features: [
        'Up to 25 wallets',
        'Advanced analytics & insights',
        '90-day data retention',
        'Priority support',
        'AI-powered risk assessment',
        'Advanced charts & visualizations',
        'Custom alerts & notifications',
        'Data export (CSV, JSON)',
        'API access',
        'Real-time monitoring',
        'Portfolio tracking',
        'Performance analytics'
      ],
      limitations: [],
      cta: 'Start Pro Trial',
      popular: true
    },
    {
      name: 'Enterprise',
      price: 99,
      period: 'month',
      description: 'Full-featured solution for institutions',
      icon: Building,
      features: [
        'Unlimited wallets',
        'All Pro features',
        'Unlimited data retention',
        'Dedicated support',
        'Custom risk models',
        'White-label options',
        'Advanced API access',
        'Custom integrations',
        'Team collaboration',
        'Advanced security',
        'SLA guarantee',
        'Custom reporting'
      ],
      limitations: [],
      cta: 'Contact Sales',
      popular: false
    }
  ]

  const faqs = [
    {
      question: 'Can I change plans anytime?',
      answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we\'ll prorate any billing differences.'
    },
    {
      question: 'What happens to my data if I cancel?',
      answer: 'Your data is retained for 30 days after cancellation. You can export all your data before the retention period expires.'
    },
    {
      question: 'Do you offer refunds?',
      answer: 'We offer a 14-day money-back guarantee for all paid plans. If you\'re not satisfied, contact us for a full refund.'
    },
    {
      question: 'Is there a free trial?',
      answer: 'Yes! All paid plans come with a 14-day free trial. No credit card required to start.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, PayPal, and cryptocurrency payments including Bitcoin, Ethereum, and Solana.'
    },
    {
      question: 'Can I get a custom plan?',
      answer: 'Yes, we offer custom enterprise plans for large organizations. Contact our sales team to discuss your specific needs.'
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose the perfect plan for your trading needs. All plans include our core wallet analysis features.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan) => {
            const Icon = plan.icon
            return (
              <Card 
                key={plan.name} 
                className={`bg-card border-border relative ${
                  plan.popular 
                    ? 'border-purple-500 shadow-lg shadow-purple-500/20' 
                    : 'hover:border-purple-500/50'
                } transition-all duration-200`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="gradient-purple text-white">
                      Most Popular
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="text-center pb-8">
                  <div className="w-16 h-16 bg-gradient-purple rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <CardDescription className="text-base">
                    {plan.description}
                  </CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-foreground">
                      ${plan.price}
                    </span>
                    <span className="text-muted-foreground">/{plan.period}</span>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  <div className="space-y-3">
                    {plan.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-foreground">{feature}</span>
                      </div>
                    ))}
                    {plan.limitations.map((limitation, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <X className="w-4 h-4 text-red-500 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{limitation}</span>
                      </div>
                    ))}
                  </div>

                  <Link href={plan.name === 'Enterprise' ? '/contact' : '/sign-up'}>
                    <Button 
                      className={`w-full ${
                        plan.popular 
                          ? 'gradient-purple' 
                          : 'bg-primary hover:bg-primary/90'
                      }`}
                      size="lg"
                    >
                      {plan.cta}
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Feature Comparison */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-foreground mb-8">
            Feature Comparison
          </h2>
          <Card className="bg-card border-border">
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left p-4 font-semibold text-foreground">Features</th>
                      <th className="text-center p-4 font-semibold text-foreground">Free</th>
                      <th className="text-center p-4 font-semibold text-foreground">Pro</th>
                      <th className="text-center p-4 font-semibold text-foreground">Enterprise</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { feature: 'Wallet Analysis', free: true, pro: true, enterprise: true },
                      { feature: 'Transaction History', free: '100', pro: 'Unlimited', enterprise: 'Unlimited' },
                      { feature: 'Risk Assessment', free: 'Basic', pro: 'AI-Powered', enterprise: 'Custom' },
                      { feature: 'Data Retention', free: '7 days', pro: '90 days', enterprise: 'Unlimited' },
                      { feature: 'API Access', free: false, pro: true, enterprise: 'Advanced' },
                      { feature: 'Custom Alerts', free: false, pro: true, enterprise: true },
                      { feature: 'Data Export', free: false, pro: true, enterprise: true },
                      { feature: 'Priority Support', free: false, pro: true, enterprise: 'Dedicated' },
                      { feature: 'Team Collaboration', free: false, pro: false, enterprise: true },
                      { feature: 'White-label Options', free: false, pro: false, enterprise: true }
                    ].map((row, index) => (
                      <tr key={index} className="border-b border-border/50">
                        <td className="p-4 font-medium text-foreground">{row.feature}</td>
                        <td className="p-4 text-center text-muted-foreground">
                          {typeof row.free === 'boolean' ? (
                            row.free ? <Check className="w-4 h-4 text-green-500 mx-auto" /> : <X className="w-4 h-4 text-red-500 mx-auto" />
                          ) : (
                            row.free
                          )}
                        </td>
                        <td className="p-4 text-center text-muted-foreground">
                          {typeof row.pro === 'boolean' ? (
                            row.pro ? <Check className="w-4 h-4 text-green-500 mx-auto" /> : <X className="w-4 h-4 text-red-500 mx-auto" />
                          ) : (
                            row.pro
                          )}
                        </td>
                        <td className="p-4 text-center text-muted-foreground">
                          {typeof row.enterprise === 'boolean' ? (
                            row.enterprise ? <Check className="w-4 h-4 text-green-500 mx-auto" /> : <X className="w-4 h-4 text-red-500 mx-auto" />
                          ) : (
                            row.enterprise
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-foreground mb-8">
            Frequently Asked Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {faqs.map((faq, index) => (
              <Card key={index} className="bg-card border-border">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-muted-foreground">
                    {faq.answer}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of traders using Wallet Autopsy to optimize their Solana trading strategies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/sign-up">
              <Button size="lg" className="gradient-purple text-lg px-8 py-6">
                Start Free Trial
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                Contact Sales
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

