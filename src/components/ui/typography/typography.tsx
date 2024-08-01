import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'

import { cn } from '@/lib/utils'

const textVariants = cva('', {
  variants: {
    variant: {
      xs: 'text-xs leading-xs',
      sm: 'text-sm leading-sm',
      md: 'text-md leading-md',
      lg: 'text-lg leading-lg',
      xl: 'text-xl leading-xl',
      'display-xs': 'text-display-xs leading-display-xs tracking-display',
      'display-sm': 'text-display-sm leading-display-sm tracking-display',
      'display-md': 'text-display-md leading-display-md tracking-display',
      'display-lg': 'text-display-lg leading-display-lg tracking-display',
      'display-xl': 'text-display-xl leading-display-xl tracking-display',
      'display-2xl': 'text-display-2xl leading-display-2xl tracking-display',
    },
  },

  defaultVariants: {
    variant: 'lg',
  },
})

export interface ITextProps
  extends React.BaseHTMLAttributes<HTMLBaseElement>,
    VariantProps<typeof textVariants> {
  asChild?: boolean
}

const Typography = React.forwardRef<HTMLBaseElement, ITextProps>(
  ({ className, variant, asChild = false, ...props }, ref) => {
    const format = (variant?.startsWith('display') && 'display') || 'text'
    const Comp = asChild ? Slot : formats[format]
    return (
      <Comp
        className={cn(textVariants({ variant, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Typography.displayName = 'Typography'

const formats = {
  text: 'p',
  display: 'h1',
}

export { textVariants, Typography }
