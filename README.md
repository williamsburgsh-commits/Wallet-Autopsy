# Wallet Autopsy

A professional crypto trading analysis platform for Solana built with Next.js 14, TypeScript, and modern web technologies.

## Features

- 🔍 **Advanced Wallet Analysis** - Deep insights into Solana wallet behavior
- 📊 **Professional Charts** - Comprehensive analytics and visualizations
- 🛡️ **Risk Assessment** - AI-powered risk analysis and warnings
- 💼 **Multi-Wallet Support** - Manage and analyze multiple wallets
- 🔔 **Smart Alerts** - Real-time notifications for important activities
- 📈 **Performance Tracking** - Monitor P&L, ROI, and trading performance
- 🎨 **Modern UI** - Professional dark theme with responsive design

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS
- **Components**: Shadcn/ui
- **Authentication**: Clerk
- **Database**: Supabase
- **Blockchain**: Solana Web3.js
- **Charts**: Recharts
- **State Management**: Zustand
- **Notifications**: React Hot Toast

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Clerk account (for authentication)
- Supabase account (for database)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd wallet-autopsy
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

4. Configure your environment variables in `.env.local`:

```env
# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key_here
CLERK_SECRET_KEY=your_clerk_secret_key_here
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard

# Supabase Database
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url_here
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key_here
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key_here

# Solana RPC
NEXT_PUBLIC_SOLANA_RPC_URL=https://api.mainnet-beta.solana.com
NEXT_PUBLIC_SOLANA_WS_URL=wss://api.mainnet-beta.solana.com

# App Configuration
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

5. Set up the database schema in Supabase:

```sql
-- Users table
CREATE TABLE users (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  clerk_id TEXT UNIQUE NOT NULL,
  email TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Wallets table
CREATE TABLE wallets (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  address TEXT NOT NULL,
  name TEXT NOT NULL,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Analyses table
CREATE TABLE analyses (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  wallet_address TEXT NOT NULL,
  analysis_data JSONB NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE wallets ENABLE ROW LEVEL SECURITY;
ALTER TABLE analyses ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Users can view own data" ON users FOR ALL USING (clerk_id = auth.jwt() ->> 'sub');
CREATE POLICY "Users can view own wallets" ON wallets FOR ALL USING (user_id IN (SELECT id FROM users WHERE clerk_id = auth.jwt() ->> 'sub'));
CREATE POLICY "Users can view own analyses" ON analyses FOR ALL USING (user_id IN (SELECT id FROM users WHERE clerk_id = auth.jwt() ->> 'sub'));
```

6. Run the development server:
```bash
npm run dev
```

7. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── (auth)/            # Authentication pages
│   ├── dashboard/         # Main dashboard
│   ├── wallets/           # Wallet management
│   ├── settings/          # User settings
│   ├── pricing/           # Pricing page
│   └── api/               # API routes
├── components/            # React components
│   ├── ui/                # Shadcn/ui components
│   ├── charts/            # Chart components
│   └── dashboard/         # Dashboard-specific components
├── lib/                   # Utility libraries
│   ├── hooks/             # Custom React hooks
│   └── utils/             # Utility functions
└── types/                 # TypeScript type definitions
```

## Features Overview

### Dashboard
- Portfolio overview with key metrics
- Interactive charts and visualizations
- Recent transaction history
- Risk assessment scores
- Quick actions and shortcuts

### Wallet Management
- Add and manage multiple Solana wallets
- View wallet details and performance
- Risk scoring and analysis
- Tagging and organization

### Analytics
- Portfolio performance tracking
- Token distribution analysis
- Transaction volume charts
- Risk assessment reports

### Settings
- User profile management
- Notification preferences
- Security settings
- Billing and subscription

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

For support, email support@walletautopsy.com or join our Discord community.

## Roadmap

- [ ] Mobile app (React Native)
- [ ] Advanced trading signals
- [ ] Portfolio optimization suggestions
- [ ] Social trading features
- [ ] API for third-party integrations
- [ ] Advanced risk modeling
- [ ] Multi-chain support (Ethereum, Polygon, etc.)