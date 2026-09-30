import { NextResponse } from 'next/server'

/**
 * Mock API route — returns sample data after a delay.
 * Used for testing loading/error states.
 * Toggle ?error=true to simulate errors.
 */
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const shouldError = searchParams.get('error') === 'true'
  const delay = 600 + Math.random() * 600

  await new Promise((r) => setTimeout(r, delay))

  if (shouldError) {
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    )
  }

  return NextResponse.json({
    metrics: [
      { label: 'Total Revenue', value: 284500, change: '+12.5%', trend: 'up' },
      { label: 'Active Users', value: 14832, change: '+8.2%', trend: 'up' },
      { label: 'Conversion Rate', value: 3.42, change: '-0.3%', trend: 'down' },
      { label: 'Avg. Session', value: 4.7, change: '+1.1%', trend: 'up' },
    ],
    chartData: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      revenue: [42000, 38000, 51000, 47000, 55000, 51500],
      users: [1200, 1400, 1100, 1800, 2100, 2400],
    },
    recentActivity: [
      { id: '1', action: 'New signup', user: 'alex@example.com', time: '2 min ago' },
      { id: '2', action: 'Purchase completed', user: 'sarah@example.com', time: '5 min ago' },
      { id: '3', action: 'Support ticket opened', user: 'mike@example.com', time: '12 min ago' },
      { id: '4', action: 'Feature request', user: 'anna@example.com', time: '18 min ago' },
      { id: '5', action: 'Account upgraded', user: 'john@example.com', time: '25 min ago' },
    ],
    timestamp: new Date().toISOString(),
  })
}

export async function POST(request: Request) {
  const body = await request.json()
  const delay = 600 + Math.random() * 600
  await new Promise((r) => setTimeout(r, delay))

  return NextResponse.json({
    success: true,
    message: 'Data received successfully',
    receivedFields: Object.keys(body),
    timestamp: new Date().toISOString(),
  })
}
