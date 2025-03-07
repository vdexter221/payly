
import React from 'react';
import { Link as WouterLink } from 'wouter';

// This component prevents nested <a> tags when using Radix UI with wouter
export const SafeNavigationLink: React.FC<{
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}> = ({ href, children, className, onClick }) => {
  // For external links with http/https
  if (href.startsWith('http')) {
    return (
      <a 
        href={href} 
        className={className}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onClick}
      >
        {children}
      </a>
    );
  }
  
  // For internal routing
  return (
    <WouterLink href={href}>
      {(isActive) => (
        <span 
          className={`${className} ${isActive ? 'active' : ''} cursor-pointer`}
          onClick={onClick}
        >
          {children}
        </span>
      )}
    </WouterLink>
  );
};

// Use this component to wrap Radix UI NavigationMenu.Link components
export const NavigationMenuLinkWrapper: React.FC<{
  children: React.ReactNode;
  asChild?: boolean;
}> = ({ children, asChild }) => {
  // If asChild is true, the component is trying to use the children as the root
  // In this case, we need to ensure it doesn't create nested <a> tags
  if (asChild) {
    return <>{children}</>;
  }
  
  return (
    <span className="inline-block">
      {children}
    </span>
  );
};
