import CodeBlocks from '@/components/CodeBlock';
import AboutLayout from '@/components/AboutLayout';
import { ReactElement } from 'react';

export default function Work() {
  const codestring = `
// Work Information
let profession = 'Frontend Developer';

// Most important skills
let languanges = [
  "React.js",
  "Typescript",
  "Nest.js",
];
  `;

  return (
    <div className="flex h-full w-full">
      <CodeBlocks>{codestring}</CodeBlocks>
    </div>
  );
}

Work.getLayout = function getLayout(page: ReactElement) {
  return <AboutLayout>{page}</AboutLayout>;
};
