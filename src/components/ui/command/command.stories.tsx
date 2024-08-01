import type { Meta, StoryObj } from '@storybook/react'
import { useCallback, useRef, useState } from 'react'

import { IconSearchLg } from '@/assets/icons'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandShortcut,
} from '@/components/ui/command/command'

import { Badge } from '../badge/badge'

const meta = {
  title: 'ui/Command',
  component: Command,
  tags: ['autodocs'],
} satisfies Meta<typeof Command>

export default meta
type Story = StoryObj<typeof meta>

const Component = (args: Story['args']) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [inputValue, setInputValue] = useState('')
  const [value, setValue] = useState('')

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>) => {
      const input = inputRef.current
      if (input) {
        if (e.key === 'Delete' || e.key === 'Backspace') {
          if (input.value === '') {
            setValue('')
          }
        }
        // This is not a default behaviour of the <input /> field
        if (e.key === 'Escape') {
          input.blur()
        }
      }
    },
    []
  )

  return (
    <Command
      {...args}
      onKeyDown={handleKeyDown}
      className="rounded-lg shadow-md w-max h-full"
    >
      <CommandInput
        ref={inputRef}
        value={inputValue}
        placeholder="Type a command or search..."
        onValueChange={(value) => setInputValue(value)}
      >
        <IconSearchLg width={20} className="min-w-5" />
        {value && <Badge variant="outline">{value}</Badge>}
      </CommandInput>
      <CommandList className="px-2 py-2 bg-background shadow-sm max-h-32 rounded-md">
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions">
          {commands.map((command) => (
            <CommandItem
              key={command.name}
              value={command.name}
              onSelect={(value) => setValue(value)}
            >
              <span>{command.name}</span>
              <span className="ml-auto">
                <CommandShortcut>{command.shortcut}</CommandShortcut>
              </span>
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </Command>
  )
}
export const Template: Story = {
  decorators: [
    (Story) => (
      <div className="w-full ml-auto grid place-content-center py-20">
        <Story />
      </div>
    ),
  ],
  render: Component,
}

const commands = [
  {
    name: 'calendar',
    description: 'Open calendar',
    shortcut: '⌘K',
  },
  {
    name: 'profile',
    description: 'Open profile',
    shortcut: '⌘P',
  },
  {
    name: 'mail',
    description: 'Open mail',
    shortcut: '⌘B',
  },
  {
    name: 'settings',
    description: 'Open settings',
    shortcut: '⌘S',
  },
  {
    name: 'launch',
    description: 'Launch',
    shortcut: '⌘L',
  },
]
