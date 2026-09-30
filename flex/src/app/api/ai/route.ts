import { NextResponse } from 'next/server'

/**
 * AI API stub — shows where an LLM call would go.
 * Returns a canned response when no API key is configured.
 * Set OPENAI_API_KEY or AI_API_KEY in .env.local to enable.
 */
export async function POST(request: Request) {
  const body = await request.json()
  const apiKey = process.env.OPENAI_API_KEY ?? process.env.AI_API_KEY

  if (!apiKey) {
    // Return canned response when no key is configured
    await new Promise((r) => setTimeout(r, 500))
    return NextResponse.json({
      response: `This is a placeholder AI response. To enable real AI responses, set OPENAI_API_KEY or AI_API_KEY in your .env.local file. Your prompt was: "${String(body.prompt ?? '').slice(0, 100)}"`,
      model: 'placeholder',
      usage: { promptTokens: 0, completionTokens: 0 },
    })
  }

  // >>> WIRE YOUR AI PROVIDER HERE <<<
  // Example with OpenAI:
  // const response = await fetch('https://api.openai.com/v1/chat/completions', {
  //   method: 'POST',
  //   headers: { 'Authorization': `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
  //   body: JSON.stringify({ model: 'gpt-4', messages: [{ role: 'user', content: body.prompt }] }),
  // })
  // const data = await response.json()
  // return NextResponse.json({ response: data.choices[0].message.content })

  return NextResponse.json({
    response: 'AI endpoint configured but not yet implemented. Wire your provider in src/app/api/ai/route.ts.',
    model: 'stub',
  })
}
