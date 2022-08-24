import * as React from 'react';
import Box from '@mui/material/Box';
import Icon from '@mui/material/Icon';

export default function Icons() {
  return (
    <Box
      sx={{
        '& > :not(style)': {
          m: 2,
        },
      }}
    >
      <Icon color="primary">add_circle</Icon>
    </Box>
  );
}
