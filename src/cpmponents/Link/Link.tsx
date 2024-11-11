'use client';

import NextLink from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Link.module.css';
import { ReactNode } from 'react';

interface LinkProps {
  href: string;
  children: ReactNode;
}

const Link: React.FC<LinkProps> = ({ href, children, ...props }) => {
  const pathname = usePathname();
  const isActive = pathname === href;
  const activeClassName = 'active';

  return (
    <NextLink href={href} {...props} className={`${styles.link} ${isActive ? activeClassName : ''}`}>
      {children}
    </NextLink>
  );
};

export default Link;
