import { NextResponse } from 'next/server'

/**
 * GOOGLE AI STUDIO (GEMINI) INTEGRATION
 * Connects to Google AI Studio Gemini API for real-time editorial synthesis.
 * Uses GEMINI_API_KEY from environment or userApiKey from client.
 */
export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { idea, audience, platform, tone, creativity = 85, userApiKey } = body

    const apiKey =
      userApiKey ||
      process.env.GEMINI_API_KEY ||
      process.env.GOOGLE_API_KEY ||
      process.env.AI_API_KEY

    if (!apiKey) {
      return NextResponse.json({
        success: false,
        error: 'NO_API_KEY',
        message: 'No Gemini API key configured. Using local synthesis engine.',
      })
    }

    const systemPrompt = `You are NEOFORGE, an elite editorial AI engine that transforms raw ideas, domain notes, and technical concepts into high-impact, multi-platform publishing assets.
Never include generic conversational filler (such as "In today's fast-paced world", "Sure, here is your...", or pleasantries). Provide direct, high-signal, publish-ready content.

Target Audience: ${audience || 'Developers & Technical Leads'}
Target Platform: ${platform || 'Viral X/Twitter Thread'}
Voice/Tone: ${tone || 'Contrarian Neo-Brutalist'}
Voice Intensity: ${creativity}%

Return ONLY a valid JSON object matching this schema:
{
  "headline": "SHORT ALL-CAPS EDITORIAL HEADLINE",
  "summary": "1 concise sentence positioning the core thesis",
  "channels": [
    {
      "id": "primary",
      "platform": "${platform || 'Viral X/Twitter Thread'}",
      "format": "Thread Sequence or Structured Markdown",
      "title": "Title for this channel",
      "hook": "Attention-stopping opening hook (1-2 sentences)",
      "body": "The full substantive body text with numbered points, clean breaks, and zero fluff",
      "tags": ["#Tag1", "#Tag2", "#Tag3"],
      "metrics": [{"label": "Hook Velocity", "value": "97%"}, {"label": "Platform Fit", "value": "100%"}]
    },
    {
      "id": "linkedin",
      "platform": "LinkedIn Thought Leadership",
      "format": "Executive Essay",
      "title": "Professional angle title",
      "hook": "First 2 lines that stop the scroll",
      "body": "Substantive essay with clear tactical takeaways and a closing discussion question",
      "tags": ["#Tag1", "#Tag2"],
      "metrics": [{"label": "Audience Relevance", "value": "98%"}, {"label": "Readability", "value": "High"}]
    },
    {
      "id": "pitch",
      "platform": "Executive 1-Pager & Briefing",
      "format": "Executive Brief",
      "title": "Strategic Memo Title",
      "hook": "Executive summary thesis in caps",
      "body": "Problem Overview, Strategic Solution, Quantifiable Outcomes, and Next Steps",
      "tags": ["#ExecutiveBrief", "#Strategy"],
      "metrics": [{"label": "Strategic Clarity", "value": "10/10"}, {"label": "Actionability", "value": "98%"}]
    }
  ],
  "qualityScore": {
    "total": 98,
    "max": 100,
    "items": [
      {"category": "Hook Velocity", "score": 10, "maxScore": 10, "note": "High-tension opening with immediate value."},
      {"category": "Audience Calibration", "score": 10, "maxScore": 10, "note": "Nuance and terminology calibrated for target reader."},
      {"category": "Platform Fit", "score": 10, "maxScore": 10, "note": "Formatted specifically for channel constraints."},
      {"category": "Content Density", "score": 9, "maxScore": 10, "note": "High signal-to-noise ratio with zero generic filler."},
      {"category": "Clarity & Flow", "score": 10, "maxScore": 10, "note": "Crisp transitions and structured proofs."}
    ]
  },
  "suggestions": [
    "One-click copy any channel to your clipboard",
    "Calibrated specifically for target audience",
    "Ready for instant deployment"
  ]
}`

    const model = 'gemini-2.0-flash'
    const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`

    const geminiRes = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [
          {
            role: 'user',
            parts: [
              {
                text: `${systemPrompt}\n\nRAW CONCEPT / DOMAIN NOTES:\n"""${idea}"""`,
              },
            ],
          },
        ],
        generationConfig: {
          temperature: Math.max(0.2, Math.min(1.0, creativity / 100)),
          responseMimeType: 'application/json',
        },
      }),
    })

    if (!geminiRes.ok) {
      const errText = await geminiRes.text()
      console.warn(`[Gemini API Status ${geminiRes.status}]:`, errText)
      return NextResponse.json({
        success: false,
        error: 'API_ERROR',
        status: geminiRes.status,
        message: `Gemini API returned ${geminiRes.status}. Using local synthesis engine.`,
      })
    }

    const data = await geminiRes.json()
    const contentText = data?.candidates?.[0]?.content?.parts?.[0]?.text

    if (!contentText) {
      return NextResponse.json({
        success: false,
        error: 'EMPTY_RESPONSE',
        message: 'No response from Gemini. Using local synthesis engine.',
      })
    }

    const parsed = JSON.parse(contentText)
    return NextResponse.json({
      success: true,
      model,
      output: parsed,
    })
  } catch (err: any) {
    console.error('[AI Route Exception]:', err)
    return NextResponse.json({
      success: false,
      error: 'SERVER_EXCEPTION',
      message: err?.message || 'Error executing Gemini API',
    })
  }
}
