import { agency } from './agency'
import { tool } from './tool'
import { dashboard } from './dashboard'
import { saas } from './saas'
import { event } from './event'
import type { Preset } from '../types'

export const presets: Record<string, Preset> = {
  agency,
  tool,
  dashboard,
  saas,
  event,
}

export function getPreset(id: string): Preset {
  return presets[id] ?? presets.agency
}
