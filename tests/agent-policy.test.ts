import { describe, expect, it } from 'vitest'
import { allowAgentAction } from '../lib/agent-policy'

describe('WebMCP action policy', () => {
  it.each([
    ['button', 'Pricing', 'press', true],
    ['input', 'Your Name', 'setValue', true],
    ['textarea', 'Tell Us About Your Event (optional)', 'clear', true],
    ['button', 'Send Booking Request', 'press', false],
    ['button', 'Join Our Sunshine List', 'press', false],
    ['checkbox', 'SMS consent', 'setChecked', false],
    ['input', 'Account email', 'setValue', false],
    ['button', 'Your Name', 'press', false],
    ['input', 'Your Name', 'submit', false],
    ['button', 'Delete', 'press', false],
    ['collapsible', 'Menu', 'setOpen', true],
    ['collapsible', 'Menu', 'press', true],
    ['collapsible', 'Menu', 'setValue', false],
    ['collapsible', 'Billing', 'setOpen', false],
    ['button', 'Menu', 'press', false],
  ] as const)('%s %s %s', (component, label, action, allowed) => {
    expect(allowAgentAction({ component, label, action })).toBe(allowed)
  })
  it('refuses a confirmation mark on the mobile menu', () => {
    expect(
      allowAgentAction({
        component: 'collapsible',
        label: 'Menu',
        action: 'setOpen',
        confirm: 'Opens the menu',
      }),
    ).toBe(false)
  })
  it('refuses a confirmation mark even on approved navigation', () => {
    expect(
      allowAgentAction({
        component: 'button',
        label: 'Pricing',
        action: 'press',
        confirm: 'Confirm payment',
      }),
    ).toBe(false)
  })
})
