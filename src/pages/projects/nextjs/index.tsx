import CodeBlocks from '@/components/CodeBlock';
import ProjectLayout from '@/components/ProjectLayout';
import { ReactElement } from 'react';

export default function NextJS() {
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

NextJS.getLayout = function getLayout(page: ReactElement) {
  return <ProjectLayout>{page}</ProjectLayout>;
};
