import React from 'react';
import { css, styled, Box, Button } from '@c1495616js/dsm';

const wrapperGrid = css({
  paddingTop: '64px',
});

const Dsm = () => {
  return (
    <div>
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
    </div>
  );
};

export default Dsm;
