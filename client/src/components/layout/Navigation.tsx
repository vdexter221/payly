
import React from 'react';
import { Link } from 'wouter';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { NavigationMenuSafeLink } from '../ui/navigation-menu-fix';

export function Navigation() {
  return (
    <header className="border-b">
      <div className="container flex items-center justify-between py-4">
        <div className="flex items-center gap-6">
          {/* Logo - using span instead of Link to avoid nested anchors */}
          <span className="text-xl font-bold">
            <Link href="/">
              <a className="flex items-center gap-2">
                <img src="/logo.svg" alt="Payly.lat" className="h-8 w-8" />
                <span>Payly.lat</span>
              </a>
            </Link>
          </span>

          {/* Main Navigation */}
          <NavigationMenu.Root className="relative">
            <NavigationMenu.List className="flex gap-4">
              {/* Use SafeNavigationMenuLink instead of NavigationMenu.Link + Link */}
              <NavigationMenuSafeLink href="/features" className="text-sm font-medium">
                Features
              </NavigationMenuSafeLink>
              
              <NavigationMenuSafeLink href="/pricing" className="text-sm font-medium">
                Pricing
              </NavigationMenuSafeLink>
              
              <NavigationMenuSafeLink href="/about" className="text-sm font-medium">
                About
              </NavigationMenuSafeLink>
              
              <NavigationMenuSafeLink href="/contact" className="text-sm font-medium">
                Contact
              </NavigationMenuSafeLink>
            </NavigationMenu.List>
          </NavigationMenu.Root>
        </div>

        {/* Auth buttons - using spans to avoid nested anchors */}
        <div className="flex items-center gap-4">
          <span className="text-sm font-medium">
            <Link href="/login">
              <a>Log in</a>
            </Link>
          </span>
          <span className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground">
            <Link href="/signup">
              <a>Sign up</a>
            </Link>
          </span>
        </div>
      </div>
    </header>
  );
}

export default Navigation;
