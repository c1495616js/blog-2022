import React from 'react';
import { CopyBlock, dracula } from 'react-code-blocks';

type Props = {
  language?: string;
  showLineNumbers?: boolean;
  wrapLines?: boolean;
  highlight?: string;
};

const CodeBlock = ({
  children,
  language = 'tsx',
  showLineNumbers = true,
  wrapLines = false,
  highlight,
}: React.PropsWithChildren<Props>) => {
  return (
    <CopyBlock
      theme={dracula}
      language={language}
      text={children}
      showLineNumbers={showLineNumbers}
      wrapLines={wrapLines}
      highlight={highlight}
      codeBlock
    />
  );
};

export default CodeBlock;
