import { cva, type VariantProps } from 'class-variance-authority';
import cn from '@/utils/cn';
import { forwardRef } from 'react';

const buttonVariants = cva('', {
  variants: {
    variant: {
      tab: '',
    },
  },
});

type ButtonProps = VariantProps<typeof buttonVariants> & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ className, variant, ...props }, ref) => (
  <button ref={ref} className={cn('button', variant, className)} {...props} />
));

Button.displayName = 'Button';

export default Button;
