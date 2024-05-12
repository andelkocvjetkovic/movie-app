import cn from '@/utils/cn';
import { ComponentProps } from 'react';

type SearchFieldProps = ComponentProps<'input'>;

function SearchField({ className, ...props }: SearchFieldProps) {
  return <input {...props} className={cn('border', className)} />;
}

export default SearchField;
