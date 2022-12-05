import React from 'react';

import CustomPre from '@/components/CustomPre';
import {
  CustomH1,
  CustomH2,
  CustomH3,
  CustomH4,
  CustomH5,
  CustomH6,
} from '@/components/CustomHeading';
import CustomLink from '@/components/CustomLink';
import CustomImage from '@/components/CustomImage';

const mdxComponents = {
  h1: CustomH1,
  h2: CustomH2,
  h3: CustomH3,
  h4: CustomH4,
  h5: CustomH5,
  h6: CustomH6,
  pre: CustomPre,
  a: CustomLink,
  img: CustomImage,
  p: ({ children }: React.PropsWithChildren) => (
    <div suppressHydrationWarning={true}>{children}</div>
  ),
};

export default mdxComponents;
