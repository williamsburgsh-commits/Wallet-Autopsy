import { SignIn } from '@clerk/nextjs'

export default function SignInPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-dark">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Welcome Back
          </h1>
          <p className="text-muted-foreground">
            Sign in to your Wallet Autopsy account
          </p>
        </div>
        <SignIn 
          appearance={{
            elements: {
              rootBox: "w-full",
              card: "bg-card border border-border shadow-lg",
            },
            variables: {
              colorPrimary: "#8b5cf6",
            },
          }}
        />
      </div>
    </div>
  )
}

