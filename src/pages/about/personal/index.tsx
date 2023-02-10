import CodeBlocks from '@/components/CodeBlock';
import AboutLayout from '@/components/AboutLayout';
import { ReactElement } from 'react';

export default function Personal() {
  const codestring = `
const name = 'Jerry Wang'
let location = 'Victoria, BC. Canada'

let hobbies = [
  "Programming", 
  "Baseball",
  "Hiking",
  "Photography",
  "More programming", 
]
  `;
  return (
    <div className="flex h-full w-full">
      <CodeBlocks>{codestring}</CodeBlocks>
    </div>
  );
}

Personal.getLayout = function getLayout(page: ReactElement) {
  return <AboutLayout>{page}</AboutLayout>;
};
