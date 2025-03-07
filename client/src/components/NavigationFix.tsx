
import React from 'react';

/**
 * A wrapper to prevent nested link errors by replacing the outer or inner element
 * with a span when both would render as <a> tags
 */
export const SafeLink: React.FC<React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  asSpan?: boolean;
}> = ({ asSpan, children, ...props }) => {
  if (asSpan) {
    return <span className="cursor-pointer" {...props}>{children}</span>;
  }
  return <a {...props}>{children}</a>;
};

/**
 * Use this in navigation menus to wrap link items
 */
export const NavItem: React.FC<{
  href?: string;
  children: React.ReactNode;
  className?: string;
}> = ({ href, children, className }) => {
  // Check if children contain an <a> tag
  const containsLink = React.Children.toArray(children).some(
    (child) => 
      React.isValidElement(child) && 
      (child.type === 'a' || 
       (typeof child.type === 'function' && child.type.name === 'Link'))
  );

  if (containsLink) {
    // If we have nested links, don't render the outer one as a link
    return <span className={`${className} cursor-pointer`}>{children}</span>;
  }

  if (href) {
    return <a href={href} className={className}>{children}</a>;
  }

  return <span className={className}>{children}</span>;
};
