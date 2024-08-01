import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap transition-colors disabled:pointer-events-none disabled:text-disabled disabled:stroke-disabled focus:ring-2 focus:ring-offset-background focus:ring-offset-2 focus:ring-brand',
  {
    variants: {
      variant: {
        primary:
          'bg-brand text-white stroke-white hover:bg-brand-hover border-primary-shadow disabled:bg-disabled disabled:border-disabled',
        outline:
          'bg-background border border-subtle text-secondary stroke-secondary border-gray-shadow hover:bg-secondary-hover',
      },
      size: {
        sm: 'rounded-md py-md px-lg gap-xs',
        md: 'rounded-md py-2.5 px-3.5 gap-xs',
        lg: 'rounded-md py-2.5 px-xl gap-sm',
        xl: 'rounded-md py-lg px-[18px] gap-sm',
        '2xl': 'rounded-lg py-xl px-[22px] gap-2.5',
        'icon-sm': 'rounded-md p-md gap-md',
        'icon-md': 'rounded-md p-2.5 gap-md',
        'icon-lg': 'rounded-md p-lg gap-md',
        'icon-xl': 'rounded-md p-3.5 gap-md',
        'icon-2xl': 'rounded-lg p-xl gap-md',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'sm',
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = 'Button'

export { Button, buttonVariants }
