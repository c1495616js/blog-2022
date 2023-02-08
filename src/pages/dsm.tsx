import React from 'react';
import { css, styled, Box, Button } from '@c1495616js/dsm';
import {
  Form,
  JsonFormContextProvider,
} from '@c1495616js/react-json-hook-form';
import type { FieldSchema } from '@c1495616js/react-json-hook-form';

const fields: FieldSchema[] = [
  {
    fieldName: 'name',
    inputType: 'text',
    label: 'Name',
    defaultValue: 'Jerry',
  },
  {
    fieldName: 'age',
    inputType: 'number',
    label: 'Age',
    defaultValue: 30,
  },
];

const wrapperGrid = css({
  paddingTop: '64px',
});

const Dsm = () => {
  return (
    <div className="flex flex-col gap-4">
      <Box as="section" id="button">
        <h2>Buttons</h2>

        <Button variant="primary">Button</Button>

        <Button variant="primary" disabled>
          Button
        </Button>
        <Button variant="secondary">Button</Button>

        <Button variant="secondary" disabled>
          Button
        </Button>
      </Box>

      <Box as="section" id="json form">
        <h2>JSON Form Builder</h2>
        <Form fields={fields} customSubmit={(data) => console.log(data)} />
      </Box>
    </div>
  );
};

export default Dsm;
