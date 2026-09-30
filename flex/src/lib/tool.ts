/**
 * Tool pipeline for the FLEX template.
 * This is the single file to edit when wiring custom logic.
 *
 * >>> WIRE YOUR LOGIC HERE <<<
 *
 * The reference implementation is a weighted-score calculator.
 * Replace runTool() with your own logic on hackathon day.
 */

export type ToolInput = Record<string, unknown>

export type ToolOutput = {
  score?: number
  headline: string
  breakdown: { label: string; value: number; unit?: string }[]
  suggestions?: string[]
  raw?: unknown
}

/**
 * Reference implementation: Weighted Score Calculator
 *
 * Takes numeric inputs, applies weights, and returns a composite score.
 * Replace this function body with your own logic.
 */
export async function runTool(input: ToolInput): Promise<ToolOutput> {
  // Simulate network delay for realistic UX
  await new Promise((r) => setTimeout(r, 800 + Math.random() * 400))

  // --- REFERENCE IMPLEMENTATION: Weighted Score Calculator ---
  const budget = Number(input.budget ?? 50)
  const timeline = Number(input.timeline ?? 3)
  const teamSize = Number(input.teamSize ?? 5)
  const complexity = Number(input.complexity ?? 50)

  // Weighted scoring
  const budgetScore = Math.min(100, budget * 1.2)
  const timelineScore = Math.min(100, timeline * 15)
  const teamScore = Math.min(100, teamSize * 12)
  const complexityPenalty = complexity * 0.8

  const rawScore = (budgetScore * 0.3 + timelineScore * 0.25 + teamScore * 0.25) - (complexityPenalty * 0.2)
  const finalScore = Math.round(Math.max(0, Math.min(100, rawScore)))

  const breakdown = [
    { label: 'Budget Efficiency', value: Math.round(budgetScore), unit: '%' },
    { label: 'Timeline Feasibility', value: Math.round(timelineScore), unit: '%' },
    { label: 'Team Capacity', value: Math.round(teamScore), unit: '%' },
    { label: 'Complexity Factor', value: Math.round(complexityPenalty), unit: '%' },
  ]

  const suggestions: string[] = []
  if (budgetScore < 50) suggestions.push('Consider increasing your budget allocation for better outcomes.')
  if (timelineScore < 50) suggestions.push('A longer timeline would significantly improve feasibility.')
  if (teamScore < 50) suggestions.push('Adding team members could boost delivery capacity.')
  if (complexityPenalty > 60) suggestions.push('Break the project into smaller phases to reduce complexity risk.')
  if (finalScore >= 75) suggestions.push('Strong project fundamentals — proceed with confidence.')

  let headline: string
  if (finalScore >= 80) headline = 'Excellent Project Viability'
  else if (finalScore >= 60) headline = 'Good Potential with Room to Optimize'
  else if (finalScore >= 40) headline = 'Moderate Risk — Review Key Factors'
  else headline = 'High Risk — Significant Adjustments Needed'

  return {
    score: finalScore,
    headline,
    breakdown,
    suggestions,
    raw: { budget, timeline, teamSize, complexity, rawScore },
  }
}
