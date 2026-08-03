'use client';

import { useRouter } from 'next/navigation';
import { ReactNode, useTransition } from 'react';
import Link from 'next/link';

interface TransitionLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
}

export default function TransitionLink({ href, children, className }: TransitionLinkProps) {
  const router = useRouter();
  const [, startTransition] = useTransition();

  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    startTransition(() => {
      router.push(href);
    });
  };

  return (
    <Link href={href} onClick={handleNavigation} className={className}>
      {children}
    </Link>
  );
}