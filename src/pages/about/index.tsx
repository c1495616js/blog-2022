import React from 'react';
import type { ReactElement } from 'react';
import type { NextPageWithLayout } from '@/pages/_app';
import AboutLayout from '@/components/AboutLayout';

const About: NextPageWithLayout = () => {
  return (
    <div className="flex flex-col gap-4 p-4">
      <p>
        Hello! I am a passionate frontend software developer with a focus on
        React. I have a strong understanding of JavaScript, including the latest
        features and best practices, as well as experience with CSS-in-JS and
        TypeScript.
      </p>

      <p>
        I am always exploring new technologies and staying up-to-date with
        industry trends. I am dedicated to building accessible and user-friendly
        interfaces that provide the best possible experience for users. I am
        confident in my ability to create scalable, maintainable, and efficient
        applications, and I am excited to contribute my skills to new and
        challenging projects.
      </p>
    </div>
  );
};

About.getLayout = function getLayout(page: ReactElement) {
  return <AboutLayout>{page}</AboutLayout>;
};

export default About;
