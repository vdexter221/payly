import React from 'react';
import { Link } from 'wouter';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { cn } from "@/lib/utils";

/**
 * Safe navigation link that prevents nested <a> tags when using wouter Link with Radix UI
 */
export const NavigationMenuSafeLink: React.FC<{
  href: string;
  children: React.ReactNode;
  className?: string;
  activeClassName?: string;
}> = ({ href, children, className, activeClassName = "" }) => {
  // For external links (starting with http or https)
  if (href.startsWith('http')) {
    return (
      <NavigationMenu.Item>
        <NavigationMenu.Link
          className={className}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </NavigationMenu.Link>
      </NavigationMenu.Item>
    );
  }
  
  // For internal routing
  return (
    <NavigationMenu.Item>
      <Link href={href}>
        {({ isActive }) => (
          <span 
            className={cn(
              className,
              isActive && activeClassName,
              "cursor-pointer"
            )}
          >
            {children}
          </span>
        )}
      </Link>
    </NavigationMenu.Item>
  );
};

/**
 * Wrapper for Radix UI NavigationMenu.Link that prevents nested <a> tags
 */
export const SafeNavigationMenuLink: React.FC<
  React.ComponentPropsWithoutRef<typeof NavigationMenu.Link> & {
    asChild?: boolean;
  }
> = ({ children, asChild, ...props }) => {
  // Don't use asChild with Link components to prevent nested <a> tags
  if (asChild) {
    return (
      <NavigationMenu.Item>
        <span className="navigation-link-wrapper cursor-pointer">
          {children}
        </span>
      </NavigationMenu.Item>
    );
  }
  
  return (
    <NavigationMenu.Item>
      <NavigationMenu.Link {...props}>
        {children}
      </NavigationMenu.Link>
    </NavigationMenu.Item>
  );
};
