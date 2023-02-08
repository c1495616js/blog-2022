import { useState } from 'react';

import styles from './accordian.module.css';

interface Section {
  value: string;
  title: string;
  contents: string;
}

type Props = {
  sections: Section[];
};

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
