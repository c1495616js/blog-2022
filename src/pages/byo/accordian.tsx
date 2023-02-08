import React from 'react';

import { Accordian } from '@/components/byo';
import CodeBlock from '@/components/CodeBlock';

type Props = {};

const BasicCodeBlock = `
export default function Accordion({ sections }: Props) {
    const [openSections, setOpenSections] = useState(new Set());
    
    return (
        <div className="accordion">
        {sections.map(({ value, title, contents }) => {
            const isExpanded = openSections.has(value);
    
            return (
            <div className={styles['accordion-item']} key={value}>
                <button
                className={styles['accordion-item-title']}
                type="button"
                onClick={() => {
                    const newOpenSections = new Set(openSections);
                    newOpenSections.has(value)
                    ? newOpenSections.delete(value)
                    : newOpenSections.add(value);
                    setOpenSections(newOpenSections);
                }}
                >
                {title}
                <span
                    aria-hidden={true}
                    className={[
                    styles['accordion-icon'],
                    isExpanded && styles['accordion-icon--rotated'],
                    ]
                    .filter(Boolean)
                    .join(' ')}
                />
                </button>
                <div
                className={styles['accordion-item-contents']}
                hidden={!isExpanded}
                >
                {contents}
                </div>
            </div>
            );
        })}
        </div>
    );
    }
    `;

const AccordianPage = (props: Props) => {
  return (
    <div>
      <Accordian
        sections={[
          {
            value: 'html',
            title: 'HTML',
            contents:
              'The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser.',
          },
          {
            value: 'css',
            title: 'CSS',
            contents:
              'Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML.',
          },
          {
            value: 'javascript',
            title: 'JavaScript',
            contents:
              'JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS.',
          },
        ]}
      />

      <CodeBlock highlight="3,7-8">{BasicCodeBlock}</CodeBlock>
    </div>
  );
};

export default AccordianPage;
