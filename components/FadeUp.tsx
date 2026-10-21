import { ReactNode } from 'react';

interface FadeUpProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

// ponytail: Rock-solid CSS fade-up ensuring content is 100% visible immediately without JS hydration blank screens
export default function FadeUp({ children, className = '' }: FadeUpProps) {
  return <div className={`animate-fade-up ${className}`}>{children}</div>;
}
