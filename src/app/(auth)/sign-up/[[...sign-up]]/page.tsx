import { SignUp } from '@clerk/nextjs'

export default function SignUpPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-dark">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Get Started
          </h1>
          <p className="text-muted-foreground">
            Create your Wallet Autopsy account
          </p>
        </div>
        <SignUp 
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

