import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';
import { cn } from '../utils/classname';

const buttonVariants = cva(
  'duration-300 inline-flex items-center justify-center rounded-md text-base font-bold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 cursor-pointer disabled:opacity-50 disabled:pointer-events-none',
  {
    variants: {
      variant: {
        primary: 'bg-future-teal text-white hover:bg-future-teal/90 focus:ring-future-teal',
        outlined:
          'border border-future-teal text-future-teal hover:bg-future-teal/20 focus:ring-future-teal',
        ghost: 'text-future-teal hover:bg-future-teal/10 focus:ring-future-teal',
      },
      size: {
        default: 'px-4 py-2',
        sm: 'px-3 text-sm',
        lg: 'px-8 text-base',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button ref={ref} className={cn(buttonVariants({ variant, size }), className)} {...props} />
    );
  }
);

Button.displayName = 'Button';

export { Button };
