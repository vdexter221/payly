
# Fixing Nested Links in React

The warning `<a> cannot appear as a descendant of <a>` occurs when you have nested anchor tags in your React components. This usually happens when:

1. You use a routing library (like wouter) which renders anchor tags
2. You have UI component libraries that also render anchor tags (like Radix UI)

## How to Fix:

### Option 1: Use the provided utility components

Import and use the `SafeLink`, `NavItem`, or `SafeNavigationLink` components from our utility files:

```jsx
import { SafeLink } from './components/NavigationFix';
// or
import { SafeNavigationLink } from './components/NavigationMenuFix';

// Instead of nesting links:
<a href="/parent">
  Parent
  <Link href="/child">Child</Link>
</a>

// Use:
<SafeLink href="/parent">
  Parent
  <SafeNavigationLink href="/child">Child</SafeNavigationLink>
</SafeLink>
```

### Option 2: Modify your navigation components

If you're using Radix UI NavigationMenu with wouter Links, modify your components like this:

```jsx
// Before:
<NavigationMenu.Link asChild>
  <Link href="/dashboard">Dashboard</Link>
</NavigationMenu.Link>

// After:
<NavigationMenu.Item>
  <span className="navigation-link-wrapper">
    <Link href="/dashboard">Dashboard</Link>
  </span>
</NavigationMenu.Item>
```

### Option 3: Find and fix specific instances

Check your components that use both wouter's `Link` and Radix UI's `NavigationMenu` components. Replace one of the elements with a non-anchor element like `<span>` or `<div>`.
