import { FC, ReactNode } from 'react';
import { Link } from 'wouter';

interface NavigationLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
}

const NavigationLink: FC<NavigationLinkProps> = ({ href, children, className }) => {
  return (
    <Link href={href}>
      <a className={className}>
        {children}
      </a>
    </Link>
  );
};

export default NavigationLink;
