import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from '@clerk/nextjs';
import { Toaster } from '@/components/ui/sonner';
import { WalletContextProvider } from '@/lib/wallet-provider';
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Wallet Autopsy - Professional Crypto Trading Analysis",
  description: "Advanced Solana wallet analysis and trading insights platform for professional crypto traders.",
  keywords: ["crypto", "solana", "wallet", "analysis", "trading", "defi"],
  authors: [{ name: "Wallet Autopsy Team" }],
  openGraph: {
    title: "Wallet Autopsy - Professional Crypto Trading Analysis",
    description: "Advanced Solana wallet analysis and trading insights platform for professional crypto traders.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wallet Autopsy - Professional Crypto Trading Analysis",
    description: "Advanced Solana wallet analysis and trading insights platform for professional crypto traders.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Check if Clerk keys are available
  const hasClerkKeys = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY && 
                       process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY !== 'your_clerk_publishable_key_here';

  if (hasClerkKeys) {
    return (
      <ClerkProvider>
        <html lang="en" className="dark">
          <body className={inter.className}>
            <WalletContextProvider>
              <div className="min-h-screen bg-background text-foreground">
                {children}
              </div>
              <Toaster />
            </WalletContextProvider>
          </body>
        </html>
      </ClerkProvider>
    );
  }

  // Fallback layout without Clerk for testing
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <WalletContextProvider>
          <div className="min-h-screen bg-background text-foreground">
            {children}
          </div>
          <Toaster />
        </WalletContextProvider>
      </body>
    </html>
  );
}