import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'

import { Typography } from '@/components/ui/typography/typography'

const meta = {
  title: 'ui/Typography',
  component: Typography,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        'display-xs',
        'display-sm',
        'display-md',
        'display-lg',
        'display-xl',
        'display-2xl',
      ],
    },
    className: {
      control: 'radio',
      options: ['font-normal', 'font-semibold', 'font-bold'],
    },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof Typography>

export default meta
type Story = StoryObj<typeof meta>

export const Template: Story = {
  args: {
    variant: 'lg',
    children: 'Typography',
  },
}
