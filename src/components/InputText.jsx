import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import SearchButton from './SearchButton';

export default function FullWidthTextField() {
  return (
    <Box
      sx={{
        width: '60%',
        maxWidth: '80%',
        display: 'flex',
      }}
    >
      <TextField fullWidth label="Input Repository Name" id="repository" />
      <SearchButton />
    </Box>
  );
}
