import { PropsWithChildren } from 'react';

type MaybeProps = PropsWithChildren<{
  condition: boolean;
}>;

function Maybe({ condition, children }: MaybeProps) {
  return condition ? children : null;
}

export default Maybe;
