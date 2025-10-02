'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { 
  LayoutDashboard, 
  Wallet, 
  Settings, 
  CreditCard, 
  LogOut,
  Menu,
  X
} from 'lucide-react'
import { useState } from 'react'
import { useUser } from '@clerk/nextjs'

const navigation = [
  { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { name: 'Wallets', href: '/wallets', icon: Wallet },
  { name: 'Settings', href: '/settings', icon: Settings },
  { name: 'Pricing', href: '/pricing', icon: CreditCard },
]

export function Navigation() {
  const pathname = usePathname()
  const { user, isLoaded } = useUser()
  const [isOpen, setIsOpen] = useState(false)

  if (!isLoaded) {
    return null
  }

  return (
    <>
      {/* Mobile menu button */}
      <Button
        variant="ghost"
        size="sm"
        className="md:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </Button>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-background/95 backdrop-blur-sm">
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between p-4 border-b border-border">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-purple rounded-lg flex items-center justify-center">
                  <Wallet className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-foreground">Wallet Autopsy</span>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
              >
                <X className="w-5 h-5" />
              </Button>
            </div>
            
            <nav className="flex-1 p-4 space-y-2">
              {navigation.map((item) => {
                const Icon = item.icon
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors ${
                      isActive
                        ? 'bg-primary text-primary-foreground'
                        : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    <Icon className="w-5 h-5" />
                    <span>{item.name}</span>
                  </Link>
                )
              })}
            </nav>

            {user && (
              <div className="p-4 border-t border-border">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-8 h-8 bg-gradient-purple rounded-full flex items-center justify-center">
                    <span className="text-sm font-bold text-white">
                      {user.firstName?.charAt(0) || user.emailAddresses[0].emailAddress.charAt(0).toUpperCase()}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-foreground truncate">
                      {user.firstName ? `${user.firstName} ${user.lastName || ''}`.trim() : 'User'}
                    </p>
                    <p className="text-xs text-muted-foreground truncate">
                      {user.emailAddresses[0].emailAddress}
                    </p>
                  </div>
                </div>
                <Button variant="outline" className="w-full justify-start">
                  <LogOut className="w-4 h-4 mr-2" />
                  Sign Out
                </Button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Desktop navigation */}
      <nav className="hidden md:flex items-center space-x-1">
        {navigation.map((item) => {
          const Icon = item.icon
          const isActive = pathname === item.href
          return (
            <Link key={item.name} href={item.href}>
              <Button
                variant={isActive ? "default" : "ghost"}
                className={isActive ? "gradient-purple" : ""}
              >
                <Icon className="w-4 h-4 mr-2" />
                {item.name}
              </Button>
            </Link>
          )
        })}
      </nav>
    </>
  )
}
