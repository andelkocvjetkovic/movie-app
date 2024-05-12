import { ButtonHTMLAttributes, forwardRef } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import cn from '@/utils/cn';

const buttonIconVariants = cva('', {
  variants: {
    variant: {
      primary: '',
    },
  },
});

type ButtonIconProps = VariantProps<typeof buttonIconVariants> & ButtonHTMLAttributes<HTMLButtonElement>;

const ButtonIcon = forwardRef<HTMLButtonElement, ButtonIconProps>(({ className, variant, ...props }, ref) => (
  <button ref={ref} className={cn('', variant, className)} {...props} />
));

ButtonIcon.displayName = 'ButtonIcon';

export default ButtonIcon;
