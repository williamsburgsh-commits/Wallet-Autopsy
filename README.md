# Wallet AutoPsy 🚀

**Professional Solana Wallet Analysis Platform**

A comprehensive crypto trading analysis platform built for serious Solana traders. Analyze wallet behavior, track performance, and gain deep insights into your trading strategies.

![Wallet AutoPsy](https://img.shields.io/badge/Next.js-15.5.4-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)
![Solana](https://img.shields.io/badge/Solana-Web3-9945FF?style=for-the-badge&logo=solana)

## ✨ Features

- 🔐 **Secure Authentication** - Clerk integration with multiple sign-in options
- 📊 **Advanced Analytics** - Comprehensive wallet performance metrics
- 🎯 **Risk Assessment** - AI-powered analysis and risk scoring
- ⚡ **Real-time Monitoring** - Live wallet activity tracking
- 💼 **Multi-Wallet Support** - Manage multiple Solana wallets
- 📈 **Performance Tracking** - P&L, ROI, and trading insights
- 🔔 **Smart Alerts** - Customizable notifications
- 🌙 **Dark Theme** - Professional dark UI optimized for trading

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with Turbopack
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Authentication**: Clerk
- **Database**: Supabase
- **Blockchain**: Solana Web3.js
- **Charts**: Recharts
- **UI Components**: Radix UI + Custom Components

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/williamsburgsh-commits/Wallet-Autopsy.git
   cd Wallet-Autopsy
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Update `.env.local` with your credentials:
   ```env
   # Clerk Authentication
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
   CLERK_SECRET_KEY=your_clerk_secret_key
   
   # Supabase Database
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   
   # Solana RPC (optional)
   NEXT_PUBLIC_SOLANA_RPC_URL=https://api.mainnet-beta.solana.com
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🔧 Configuration

### Clerk Setup

1. Create a [Clerk account](https://dashboard.clerk.com/)
2. Create a new application
3. Copy the Publishable Key and Secret Key
4. Update your `.env.local` file

### Supabase Setup

1. Create a [Supabase project](https://supabase.com/dashboard)
2. Go to Settings → API
3. Copy the Project URL and anon key
4. Update your `.env.local` file

### Database Schema

The application uses the following Supabase tables:

- `users` - User profiles linked to Clerk
- `wallets` - Connected Solana wallets
- `analyses` - Wallet analysis data

## 📱 Pages & Features

- **Landing Page** - Professional marketing page
- **Dashboard** - Overview of all wallet metrics
- **Wallets** - Individual wallet management
- **Settings** - User preferences and configuration
- **Pricing** - Subscription plans and features

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect to Vercel**
   - Import your GitHub repository
   - Vercel will auto-detect Next.js

2. **Set Environment Variables**
   - Add all variables from `.env.local`
   - Deploy automatically on push

3. **Custom Domain** (Optional)
   - Configure in Vercel dashboard

### Other Platforms

- **Netlify**: Compatible with Next.js
- **Railway**: Full-stack deployment
- **AWS Amplify**: Enterprise deployment

## 🧪 Testing

```bash
# Run linting
npm run lint

# Build for production
npm run build

# Start production server
npm start
```

## 📊 Development Status

- ✅ **Core UI Components** - Complete
- ✅ **Authentication Flow** - Complete
- ✅ **Wallet Integration** - Complete
- ✅ **Database Schema** - Complete
- 🔄 **Real-time Data** - In Progress
- 🔄 **Advanced Analytics** - In Progress
- 🔄 **Mobile Optimization** - In Progress

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

- **Documentation**: [GitHub Wiki](https://github.com/williamsburgsh-commits/Wallet-Autopsy/wiki)
- **Issues**: [GitHub Issues](https://github.com/williamsburgsh-commits/Wallet-Autopsy/issues)
- **Discussions**: [GitHub Discussions](https://github.com/williamsburgsh-commits/Wallet-Autopsy/discussions)

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - React framework
- [Clerk](https://clerk.com/) - Authentication
- [Supabase](https://supabase.com/) - Database
- [Solana](https://solana.com/) - Blockchain platform
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Radix UI](https://www.radix-ui.com/) - UI components

---

**Built with ❤️ for the Solana community**

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/williamsburgsh-commits/Wallet-Autopsy)