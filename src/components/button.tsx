import { cva, type VariantProps } from 'class-variance-authority';
import cn from '@/utils/cn';
import { forwardRef } from 'react';
import { Slot } from '@radix-ui/react-slot';

const buttonVariants = cva('font-medium text-base px-4 py-2', {
  variants: {
    variant: {
      tab: 'data-[active=true]:bg-blue-200 border border-black shadow hover:bg-blue-100',
      primary:
        'bg-white text-black border border-black hover:bg-black hover:text-white hover:border-white transition-colors duration-200',
    },
  },
});

type ButtonProps = VariantProps<typeof buttonVariants> &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    isActive?: boolean;
    asChild?: boolean;
  };

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ className, variant, isActive, asChild, ...props }, ref) => {
  const Component = asChild ? Slot : 'button';
  return <Component ref={ref} className={cn(buttonVariants({ variant }), className)} {...props} data-active={isActive} />;
});

Button.displayName = 'Button';

export default Button;
