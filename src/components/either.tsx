import { PropsWithChildren, ReactNode } from 'react';

type EitherProps = PropsWithChildren<{
  condition: boolean;
  fallback: ReactNode;
}>;

function Either({ condition, children, fallback }: EitherProps) {
  return condition ? children : fallback;
}

export default Either;
