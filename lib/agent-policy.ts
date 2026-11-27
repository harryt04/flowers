import type { AgentAction } from '@ui-sdk/react/agent'
import { navItems } from './navigation'

const inputLabels = new Set([
  'Your Name',
  'Email Address',
  'Your Email Address',
  'Phone (optional)',
  'Event Date (optional)',
  'Location (optional)',
  'Estimated Guests (optional)',
])

export function allowAgentAction({
  component,
  label,
  action,
  confirm,
}: Pick<AgentAction, 'component' | 'label' | 'action' | 'confirm'>) {
  if (confirm !== undefined || !label) return false
  if (component === 'button' && action === 'press')
    return navItems.some((item) => item.label === label)
  if (component === 'collapsible')
    return label === 'Menu' && (action === 'setOpen' || action === 'press')
  if (action !== 'setValue' && action !== 'clear') return false
  return (
    (component === 'input' && inputLabels.has(label)) ||
    (component === 'textarea' &&
      label === 'Tell Us About Your Event (optional)')
  )
}
