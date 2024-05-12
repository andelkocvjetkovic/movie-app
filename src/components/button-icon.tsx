import { ButtonHTMLAttributes, forwardRef } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import cn from '@/utils/cn';

const buttonIconVariants = cva('', {
  variants: {
    variant: {
      primary:
        'w-8 h-8 bg-white text-black border border-black hover:bg-black hover:text-white hover:border-white inline-flex items-center justify-center transition-colors duration-200',
    },
  },
});

type ButtonIconProps = VariantProps<typeof buttonIconVariants> & ButtonHTMLAttributes<HTMLButtonElement>;

const ButtonIcon = forwardRef<HTMLButtonElement, ButtonIconProps>(({ className, variant, ...props }, ref) => (
  <button ref={ref} className={cn(buttonIconVariants({ variant, className }))} {...props} />
));

ButtonIcon.displayName = 'ButtonIcon';

export default ButtonIcon;
