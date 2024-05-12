import cn from '@/utils/cn';
import { ComponentProps } from 'react';

type SearchFieldProps = ComponentProps<'input'>;

function SearchField({ className, ...props }: SearchFieldProps) {
  return <input {...props} className={cn('border border-black shadow py-2 px-4', className)} />;
}

export default SearchField;
