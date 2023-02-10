import React from 'react';
import type { ReactElement } from 'react';
import type { NextPageWithLayout } from '@/pages/_app';
import AboutLayout from '@/components/AboutLayout';

const About: NextPageWithLayout = () => {
  return <div>About</div>;
};

About.getLayout = function getLayout(page: ReactElement) {
  return <AboutLayout>{page}</AboutLayout>;
};

export default About;
