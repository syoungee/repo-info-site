import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

export default function SearchButton() {
  return (
    <Box sx={{ '& button': { m: 1 } }}>
      <div></div>
      <div></div>
      <div>
        <Button variant="contained" size="medium">
          SEARCH
        </Button>
      </div>
    </Box>
  );
}
