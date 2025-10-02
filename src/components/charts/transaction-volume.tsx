'use client'

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

interface TransactionVolumeProps {
  data: Array<{
    date: string
    volume: number
    count: number
  }>
  className?: string
}

export function TransactionVolume({ data, className }: TransactionVolumeProps) {
  return (
    <Card className={`bg-card border-border ${className}`}>
      <CardHeader>
        <CardTitle>Transaction Volume</CardTitle>
        <CardDescription>
          Daily transaction volume and count
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--muted))" />
              <XAxis 
                dataKey="date" 
                stroke="hsl(var(--muted-foreground))"
                fontSize={12}
              />
              <YAxis 
                stroke="hsl(var(--muted-foreground))"
                fontSize={12}
                tickFormatter={(value) => `$${value.toLocaleString()}`}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'hsl(var(--card))',
                  border: '1px solid hsl(var(--border))',
                  borderRadius: '6px',
                  color: 'hsl(var(--foreground))'
                }}
                formatter={(value: number, name: string) => [
                  name === 'volume' ? `$${value.toLocaleString()}` : value,
                  name === 'volume' ? 'Volume' : 'Count'
                ]}
                labelFormatter={(label) => `Date: ${label}`}
              />
              <Bar 
                dataKey="volume" 
                fill="#8b5cf6" 
                radius={[4, 4, 0, 0]}
                opacity={0.8}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}

