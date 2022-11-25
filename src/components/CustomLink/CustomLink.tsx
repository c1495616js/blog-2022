import Link from 'next/link';
import React from 'react';

import ExternalLinkIcon from './external-link.svg';

type Props = React.ComponentPropsWithRef<'a'>;

const CustomLink = ({ href, children, ...rest }: Props) => {
  const isInternalLink = href && href.startsWith('/');
  const isAnchorLink = href && href.startsWith('#');

  if (isInternalLink) {
    return (
      <Link href={href} {...rest}>
        {children}
      </Link>
    );
  }

  if (isAnchorLink) {
    return (
      <a href={href} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <a target="_blank" rel="noopener noreferrer" href={href} {...rest}>
      {children}
      {typeof children === 'string' && (
        <ExternalLinkIcon className="ml-1 inline-block h-4 w-4" />
      )}
    </a>
  );
};

export default CustomLink;
